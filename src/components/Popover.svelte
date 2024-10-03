<script>
  import { onMount, afterUpdate } from "svelte";
  import { fade } from "svelte/transition";

  export let content = "";
  export let x = 0; // Mouse x position
  export let y = 0; // Mouse y position
  export let colorClass = "";

  let alignmentClass = "";
  let popoverElement;
  let popoverHeight = 0;
  let popoverWidth = 0;
  let adjustedX = x;
  let adjustedY = y;

  // Ensure popoverHeight and popoverWidth are up-to-date after DOM updates
  afterUpdate(() => {
    if (popoverElement) {
      popoverHeight = popoverElement.offsetHeight || 0;
      popoverWidth = popoverElement.offsetWidth || 0;
      clampPosition(); // Adjust position if needed after every update
    }
  });

  // Clamp the popover position to ensure it stays inside the viewport
  function clampPosition() {
    const distanceToRight = window.innerWidth - x;
    const distanceToBottom = window.innerHeight - y;

    // Clamp x position to ensure the popover does not overflow on the right
    if (distanceToRight < popoverWidth) {
      adjustedX = Math.max(20, window.innerWidth - popoverWidth - 20); // Clamping X, adding padding from the right edge
    } else {
      adjustedX = x;
    }

    // Clamp y position to ensure the popover does not overflow on the bottom
    if (distanceToBottom < popoverHeight) {
      adjustedY = Math.max(20, window.innerHeight - popoverHeight - 20); // Clamping Y, adding padding from the bottom edge
    } else {
      adjustedY = y;
    }
  }

  // Initial update of position
  $: clampPosition();
</script>

<!-- Popover element with dynamic positioning -->
<div
  bind:this={popoverElement}
  class="popover popoverStandard {alignmentClass} {colorClass}"
  style="
    --x: {adjustedX}px;
    --y: {adjustedY}px;
  "
  in:fade={{ delay: 500 }}
  out:fade>
  {@html content}
</div>

<style lang="scss">
  .popover {
    position: fixed;
    top: 0;
    left: 0;
    transform: translate(var(--x), var(--y));
    background-color: black;
    color: #f4f0e8;
    padding: 2rem;
    max-width: 400px;
    z-index: 100;
    border-radius: 2rem;
    font-size: 2.5rem;
    line-height: 1.1;
    cursor: pointer;
    margin-bottom: 1rem;

    &.red {
      box-shadow: 10px 10px 0 #ea6180;
    }

    &.yellow {
      box-shadow: 10px 10px 0 #f8d68f;
    }

    &.green {
      box-shadow: 10px 10px 0 #6dc999;
    }

    &.blue {
      box-shadow: 10px 10px 0 #4db7d0;
    }
  }

  :global(.popover p) {
    font-size: 1em;
    margin: 1rem 0 0 0;
  }

  :global(.popover .caption) {
    font-size: 0.85em;
    margin: 1rem 0 0 0;
  }
</style>
