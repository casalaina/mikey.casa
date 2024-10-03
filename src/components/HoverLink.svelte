<script>
  import { createEventDispatcher } from "svelte";
  import { isMobile, isKeyboardUser } from "~/lib/stores.js";

  // Props
  export let href = "";
  export let target = "_self";
  export let colorClass = "";
  export let dataPopoverKey = "";
  export let linkName = "";
  export let tag = "span";

  const dispatch = createEventDispatcher();

  function handleClick(event) {
    if ($isMobile || $isKeyboardUser) {
      event.preventDefault();
    }
    dispatch("hover", { event, key: dataPopoverKey, href, linkName });
  }

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      handleClick(event);
    }
  }

  function debounce(func, delay) {
    let timer;
    return function (...args) {
      clearTimeout(timer);
      timer = setTimeout(() => func.apply(this, args), delay);
    };
  }

  const handleMouse = debounce((event) => {
    if (!$isKeyboardUser && (event.type === "mouseenter" || event.type === "mousemove")) {
      dispatch("hover", { event, key: dataPopoverKey, href, linkName });
    } else if (!$isKeyboardUser && event.type === "mouseleave") {
      dispatch("hover", { event, key: dataPopoverKey, close: true });
    }
  }, 10);
</script>

<svelte:element
  this={tag === "a" ? "a" : "span"}
  class="hover {colorClass}"
  href={tag === "a" ? href : undefined}
  target={tag === "a" ? target : undefined}
  data-popover-key={dataPopoverKey}
  tabindex="0"
  on:click={handleClick}
  on:keydown={handleKeyDown}
  on:focus={handleMouse}
  on:blur={handleMouse}
  on:mouseenter={handleMouse}
  on:mouseleave={handleMouse}
  on:mousemove={handleMouse}
  role={tag === "a" ? undefined : "button"}>
  <span class="inner">
    <slot />
  </span>
</svelte:element>

<style lang="scss">
  @use "~/styles/vars" as *;

  @keyframes move {
    from {
      transform: translate(0, 85%);
    }
    to {
      transform: translate(-1000px, 85%);
    }
  }

  span.hover {
    cursor: pointer;

    @include from(md) {
      cursor: crosshair;
    }
  }

  .hover {
    color: #ea6180;
    display: inline-block;
    vertical-align: bottom;
    position: relative;
    text-decoration: none;
    -webkit-text-decoration-skip: objects;
    font-weight: 700;

    &:focus {
      outline: 2px solid #4db7d0; // Use a visible focus outline
      outline-offset: 4px; // Move the outline away from the element
    }

    .inner {
      clip-path: inset(0 0 -20% 0);
      pointer-events: none;

      &:after {
        content: "";
        position: absolute;
        width: 2000px;
        height: 100%;
        bottom: 0;
        left: 0;
        transform: translate(0, 85%);
        background-image: url("~/assets/wavy--red.svg");
        background-repeat: repeat-x;
        background-size: 3.5rem;
        animation: move 8s linear infinite paused;
        will-change: transform;
        pointer-events: none;
      }
    }
    &:hover .inner:after {
      animation-play-state: running;
    }
  }

  .hover.red {
    color: #ea6180;
    .inner:after {
      background-image: url("~/assets/wavy--red.svg");
    }
  }

  .hover.yellow {
    color: #f8d68f;
    .inner:after {
      background-image: url("~/assets/wavy--yellow.svg");
    }
  }

  .hover.green {
    color: #6dc999;
    .inner:after {
      background-image: url("~/assets/wavy--green.svg");
    }
  }

  .hover.blue {
    color: #4db7d0;
    .inner:after {
      background-image: url("~/assets/wavy--blue.svg");
    }
  }
</style>
