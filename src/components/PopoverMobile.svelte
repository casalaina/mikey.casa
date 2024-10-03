<script>
  import { fade } from "svelte/transition";
  import { onMount, createEventDispatcher } from "svelte";
  import { popoverVisible, isKeyboardUser } from "~/lib/stores.js";

  export let content = "";
  export let colorClass = "";
  export let href = null;
  export let linkName = "";

  const dispatch = createEventDispatcher();

  let buttonRef;

  // Set popoverVisible to true and focus the button on mount
  onMount(() => {
    $popoverVisible = true;

    // Focus the button when the popover opens
    if (buttonRef && $isKeyboardUser) {
      buttonRef.focus();
    }

    // Add a keydown event listener to handle 'Tab' and close the popover
    const handleKeydown = (event) => {
      if (event.key === "Tab") {
        event.preventDefault(); // Prevent default tab behavior
        closePopover();
      }
    };

    window.addEventListener("keydown", handleKeydown);

    // Clean up the event listener when the component is destroyed
    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  });

  function closePopover() {
    dispatch("close");
    $popoverVisible = false;
  }

  function handleButtonClick(event) {
    event.stopPropagation();
    if (href) {
      window.open(href, "_blank");
    }
  }
</script>

<div transition:fade>
  <div class="overlay" on:click={closePopover} aria-hidden="true"></div>

  <!-- Popover content centered in the viewport -->
  <div class="popover popoverMobile {colorClass}" role="dialog">
    <div class="popover-content">
      {@html content}
    </div>
    {#if href && linkName}
      <button class="see-more-button" tabindex="0" on:click={handleButtonClick} bind:this={buttonRef}>
        {linkName}
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
    padding: 2rem;
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
      outline: 3px solid white;
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
</style>
