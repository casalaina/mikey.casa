<script>
  import { fade } from "svelte/transition";
  import { onMount } from "svelte";
  import { popoverState, isKeyboardUser } from "~/lib/stores.js";

  let buttonRef;

  onMount(() => {
    // Focus the 'See More' button if keyboard user
    if (buttonRef && $isKeyboardUser) {
      buttonRef.focus();
    }
  });

  function closePopover() {
    popoverState.update((state) => ({ ...state, visible: false }));
  }

  function handleButtonClick() {
    if ($popoverState.link) {
      window.open($popoverState.link, "_blank");
    }
    closePopover();
  }
</script>

<div transition:fade>
  <div class="overlay" on:click={closePopover} aria-hidden="true"></div>
  <div class="popover popoverMobile {$popoverState.colorClass}" role="dialog">
    <button class="close-button" on:click={closePopover}>×</button>
    <div class="popover-content">
      {@html $popoverState.content}
    </div>
    {#if $popoverState.link && $popoverState.linkName}
      <button class="see-more-button" tabindex="0" on:click={handleButtonClick} bind:this={buttonRef}>
        {$popoverState.linkName}
      </button>
    {/if}
  </div>
</div>

<style lang="scss">
  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    z-index: 9;
  }

  .popover {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: black;
    color: #f4f0e8;
    padding: 2.5rem 2.5rem 2rem 2.5rem;
    width: 90vw;
    height: auto;
    max-width: 500px;
    max-height: 80vh;
    overflow-y: auto;
    z-index: 10;
    border-radius: 2rem;
    line-height: 1.2;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);

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

  .popover-content {
    margin-bottom: 1.5rem;
  }

  .see-more-button {
    background: #4db7d0; /* Example color, adjust based on your needs */
    color: #fff;
    border: none;
    padding: 1rem 2rem;
    margin: 1rem 0;
    font-size: 3rem;
    border-radius: 1rem;
    cursor: pointer;
    text-align: center;
    position: relative;
    z-index: 11;
    width: 100%;
    pointer-events: all;

    &:focus-visible {
      outline: 2px solid #4db7d0;
      outline-offset: 2px;
    }
  }

  :global(.popoverMobile p) {
    font-size: 3em;
    margin: 1rem 0 0 0;
  }

  :global(.popoverMobile .caption) {
    font-size: 3em;
    margin: 1rem 0 0 0;
  }

  .close-button {
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    background: none;
    border: none;
    color: #f4f0e8;
    font-size: 2rem;
    cursor: pointer;
    padding: 0.5rem;
    line-height: 1;
  }
</style>
