<script>
  import { onMount } from "svelte";
  import FingersToggle from "~/components/FingersToggle.svelte";
  import { fingersVisible } from "~/lib/stores.js";

  // finger variables
  let lines = [];
  let requestId = null;
  let fingerWrap;

  // content variables
  let light;
  let vw;
  let vh;

  // states
  let ready = false;

  // set global functions
  let mouseMove;
  let touchMove;
  let makeFingers;
  let update;

  const emojis = ["👉🏻", "👉🏼", "👉🏽", "👉🏾", "👉🏿"];

  let lastInteractionTime = 0;
  const INTERACTION_TIMEOUT = 1000; // 1 second

  function getFocusedElementPosition() {
    const focusedElement = document.activeElement;
    if (focusedElement && focusedElement !== document.body) {
      const rect = focusedElement.getBoundingClientRect();
      return {
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2,
      };
    }
    return null;
  }

  onMount(() => {
    vw = window.innerWidth;
    vh = window.innerHeight;
    let xInitial = vw > 800 ? vw * 0.15 : vw * 0.33;
    let yInitial = vw > 800 ? vh * 0.225 : vh * 0.15;
    let mouse = {
      x: xInitial,
      y: yInitial,
    };

    // Make fingers
    makeFingers = () => {
      // Clear fingerWrap
      fingerWrap.innerHTML = "";
      vw = window.innerWidth;
      vh = window.innerHeight;

      // finger settings
      let width = 40;
      let height = 40;
      let grid = 56;
      fingerWrap.style.setProperty("font-size", `32px`);

      // Small width finger adjustment
      if (vw < 600) {
        width = 30;
        height = 30;
        grid = 32;
        fingerWrap.style.setProperty("font-size", `18px`);
      }

      // Add Fingers
      let padding = 0;

      let xStart = grid / 2;
      let xEnd = vw - width;
      let yStart = grid / 2 + padding;
      let yEnd = vh - height - padding;

      if (vw > 600) {
        xStart += padding;
        xEnd -= padding;
      }

      for (let y = yStart; y <= yEnd; y += grid) {
        for (let x = xStart; x <= xEnd; x += grid) {
          let line = document.createElement("div");
          fingerWrap.append(line);
          line.style.width = width + "px";
          line.style.height = height + "px";
          line.style.left = x + "px";
          line.style.top = y + "px";
          line.innerHTML = `<span>👉🏿</span>`;
          line.className = "line";

          lines.push({
            element: line,
            cx: x + width / 2,
            cy: y + height / 2,
          });
        }
      }
      ready = true;
    };

    mouseMove = (event) => {
      mouse.x = event.pageX;
      mouse.y = event.pageY;

      if (!requestId) {
        requestId = requestAnimationFrame(update);
      }
    };

    touchMove = (event) => {
      mouse.x = event.touches[0].pageX;
      mouse.y = event.touches[0].pageY;

      if (!requestId) {
        requestId = requestAnimationFrame(update);
      }
    };

    // Update fingers
    update = () => {
      const currentTime = Date.now();
      let targetX, targetY;

      if (currentTime - lastInteractionTime > INTERACTION_TIMEOUT) {
        targetX = getFocusedElementPosition()?.x ?? mouse.x;
        targetY = getFocusedElementPosition()?.y ?? mouse.y;
      } else {
        targetX = mouse.x;
        targetY = mouse.y;
      }

      for (let i = 0; i < lines.length; i++) {
        let line = lines[i];
        let dx = targetX - line.cx;
        let dy = targetY - line.cy;
        let transform = "rotate(" + Math.atan2(dy, dx) + "rad)";
        line.element.style.transform = transform;

        // Calculate distance from cursor to finger center
        let distance = Math.hypot(dx, dy);

        // Determine which emoji to use based on distance
        let index;
        if (distance <= 75) {
          index = 0;
        } else if (distance <= 150) {
          index = 1;
        } else if (distance <= 275) {
          index = 2;
        } else if (distance <= 400) {
          index = 3;
        } else {
          index = 4;
        }

        // Update the emoji in the span
        let currentEmoji = line.element.firstChild.textContent;
        let newEmoji = emojis[index];
        if (currentEmoji !== newEmoji) {
          line.element.firstChild.textContent = newEmoji;
        }
      }

      requestId = null;

      // Update light position
      if (light) {
        light.style.cssText = `transform: translate(${targetX - 250}px, ${targetY - 250}px)`;
      }

      lastInteractionTime = currentTime;
    };

    makeFingers();
    update();
  });
</script>

<svelte:window
  on:resize={makeFingers}
  on:mousemove={mouseMove}
  on:touchmove={touchMove}
  on:focusin={() => {
    lastInteractionTime = 0;
    if (!requestId) {
      requestId = requestAnimationFrame(update);
    }
  }}
  bind:innerWidth={vw}
  bind:innerHeight={vh} />
<div id="outer" on:mousemove={mouseMove} on:touchmove={touchMove} class={$fingersVisible ? "" : "hideFingers"} aria-hidden="true">
  <div id="inner">
    <FingersToggle />

    <div id="light" bind:this={light} />
    <slot />

    <div id="fingerWrap" bind:this={fingerWrap} aria-label="An emoji-based interactive where finger pointing emojis follow the cursor" />
  </div>
</div>

<style lang="scss">
  @use "sass:color";
  @use "~/styles/vars" as *;

  #fingerWrap {
    position: absolute;
    z-index: 4;
    // cursor: pointer;
    font-size: 32px;
    opacity: 1;
    transition: opacity 0.5s;
  }

  :global(.line) {
    position: absolute;
    will-change: transform;
    pointer-events: none;
  }

  #inner {
    margin: 0;
    padding-top: 5rem;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    height: calc(var(--vh, 1vh) * 100);
    position: fixed;
    background-color: #000;
    overflow: hidden;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;

    @include from(md) {
      padding-top: 0;
    }
  }

  #light {
    position: absolute;
    z-index: 2;
    pointer-events: none;
    background-color: transparent;
    box-shadow:
      inset 0 0 100px 100px rgba(#000, 0.9),
      0 0 200vw 200vw rgba(#000, 0.9);
    width: 500px;
    height: 500px;
    opacity: 1;
    transition:
      opacity 0.5s,
      box-shadow 0.5s;
    will-change: transform;
  }
</style>
