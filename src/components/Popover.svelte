<script>
  import { afterUpdate } from "svelte";
  import { fade } from "svelte/transition";
  import { popoverState } from "~/lib/stores.js";

  let popoverElement;
  let popoverHeight = 0;
  let popoverWidth = 0;
  let adjustedX = 0;
  let adjustedY = 0;

  // Recalculate popover dimensions and adjust position after updates
  afterUpdate(() => {
    if (popoverElement) {
      popoverHeight = popoverElement.offsetHeight || 0;
      popoverWidth = popoverElement.offsetWidth || 0;
      clampPosition(); // Adjust position if needed after every update
    }
  });

  // Clamp the popover position to ensure it stays inside the viewport
  function clampPosition() {
    const x = $popoverState.x;
    const y = $popoverState.y;
    const distanceToRight = window.innerWidth - x;
    const distanceToBottom = window.innerHeight - y;

    // Clamp x position to ensure the popover does not overflow on the right
    if (distanceToRight < popoverWidth) {
      adjustedX = Math.max(20, window.innerWidth - popoverWidth - 20);
    } else {
      adjustedX = x;
    }

    // Clamp y position to ensure the popover does not overflow on the bottom
    if (distanceToBottom < popoverHeight) {
      adjustedY = Math.max(20, window.innerHeight - popoverHeight - 20);
    } else {
      adjustedY = y;
    }
  }

  // Update position whenever popoverState changes
  $: if ($popoverState.visible) {
    clampPosition();
  }
</script>

<!-- Popover element with dynamic positioning -->
<div
  bind:this={popoverElement}
  class="popover popoverStandard {$popoverState.colorClass}"
  style="
    left: 0;
    top: 0;
    transform: translate({adjustedX}px, {adjustedY}px);
  "
  in:fade={{ delay: 500 }}
  out:fade>
  {@html $popoverState.content}
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
