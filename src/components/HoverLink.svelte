<script>
  import { createEventDispatcher, onMount, onDestroy } from "svelte";
  import { popoverState, isMobile, isKeyboardUser } from "~/lib/stores.js";

  export let href = "";
  export let target = "_self";
  export let colorClass = "";
  export let dataPopoverKey = "";
  export let linkName = "";
  export let tag = "span";

  const dispatch = createEventDispatcher();

  function handleClick(event) {
    if ($isMobile) {
      event.preventDefault(); // Prevent default for mobile touch events
    } else if (tag === "a" && href) {
      popoverState.update((state) => ({ ...state, visible: false }));
    }
    dispatch("activate", { event, key: dataPopoverKey, href, linkName, colorClass });
  }

  function handleKeyDown(event) {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      if ($isKeyboardUser) {
        popoverState.update((state) => ({
          ...state,
          visible: true,
          content: state.content,
          colorClass,
          link: href,
          linkName,
        }));
      }
      dispatch("activate", { event, key: dataPopoverKey, href, linkName, colorClass });
    }
  }

  function handleMouseEnter(event) {
    if (!$isMobile) {
      dispatch("hover", { event, type: "mouseenter", key: dataPopoverKey, href, linkName, colorClass });
    }
  }

  function handleMouseLeave(event) {
    if (!$isMobile) {
      dispatch("hover", { event, type: "mouseleave", key: dataPopoverKey, href, linkName, colorClass });
    }
  }

  function handleMouseMove(event) {
    if (!$isMobile) {
      dispatch("hover", { event, type: "mousemove", key: dataPopoverKey, href, linkName, colorClass });
    }
  }

  function handleVisibilityChange() {
    if (document.hidden) {
      popoverState.update((state) => ({ ...state, visible: false }));
    }
  }

  onMount(() => {
    document.addEventListener("visibilitychange", handleVisibilityChange);
  });

  onDestroy(() => {
    document.removeEventListener("visibilitychange", handleVisibilityChange);
  });
</script>

<svelte:element this={tag} class="hover {colorClass}" href={tag === "a" ? href : undefined} target={tag === "a" ? target : undefined} data-popover-key={dataPopoverKey} tabindex={tag === "a" ? undefined : "0"} on:click={handleClick} on:keydown={handleKeyDown} on:mouseenter={handleMouseEnter} on:mouseleave={handleMouseLeave} on:mousemove={handleMouseMove} role={tag === "a" ? undefined : "button"}>
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

  :global(.hover:focus) {
    outline: none;
  }

  :global(.hover:focus-visible) {
    outline: 2px solid currentColor;
    outline-offset: 2px;
  }
</style>
