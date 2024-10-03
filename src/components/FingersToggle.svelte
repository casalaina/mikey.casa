<script>
  import { fingersVisible } from "~/lib/stores.js";

  // Toggle visibility
  function toggleFingers() {
    fingersVisible.update((value) => !value);
  }
</script>

<button class="toggleFingers" class:active={$fingersVisible} on:click={toggleFingers} aria-label={$fingersVisible ? "Hide the fingers, show the content" : "Show the fingers, hide the content"} aria-pressed={$fingersVisible}>
  <div class="switch">
    <div class="icon">
      <div class:visible={$fingersVisible}>💡</div>
      <div class:visible={!$fingersVisible} class="toggleFinger">👉</div>
    </div>
    <div class="knob"></div>
  </div>
</button>

<style lang="scss">
  @use "~/styles/vars" as *;

  .toggleFingers {
    // Maintaining original dimensions and styles
    position: fixed;
    font-size: 6px;
    top: 0.8em;
    right: 2.5em;
    height: 7em;
    width: 12em;
    display: flex;
    align-items: center;
    cursor: pointer;
    border-radius: 3.5em;
    padding: 0.2em;
    transition: background-color 0.3s;
    box-shadow: 2px 5px 30px rgba(white, 0.3);
    z-index: 9;
    border: 3px solid black;
    background: none; /* emove default button styles */
    text-align: left;
    outline: none;

    &:focus-visible {
      outline: 3px solid #4db7d0; /* Add a visible focus indicator */
    }

    @include from(md) {
      left: auto;
      right: 0.8em;
    }

    &.active {
      background-color: #4db7d0;
    }

    .icon {
      position: absolute;
      inset: 0;
      font-size: 3.5em; // Maintaining original font size for mobile
      width: 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      margin-right: 0.5em;

      div {
        opacity: 0;
        transition:
          opacity 0.3s,
          transform 1s;

        &.visible {
          opacity: 1;
        }
      }
    }

    .toggleFinger {
      transform: rotate(-220deg);
    }

    .switch {
      flex-grow: 1;
      width: 100%;
      height: 7em; // Maintaining original size for mobile
      border-radius: 3.5em;
      position: relative;
      transition: background-color 0.3s;

      .knob {
        position: absolute;
        top: 0.8em; // Maintaining original offset for mobile
        left: 0.5em; // Maintaining original offset for mobile
        height: 5.5em; // Maintaining original knob size for mobile
        width: 5.5em; // Maintaining original knob size for mobile
        background-color: #000;
        border-radius: 50%;
        transition: transform 0.3s;
      }
    }

    &.active .switch .knob {
      transform: translateX(4em); // Adjusted based on mobile size
    }

    &.active .toggleFinger {
      transform: rotate(-90deg);
    }

    // Larger screen sizes
    @include from(sm) {
      font-size: 11px;
      top: 0.5em;
      left: auto;
      right: 4em;
      height: 4em;
      width: 7em;
      border-radius: 2em;
      padding: 0.1em;

      .icon {
        font-size: 2em; // Reduced size for larger screens
      }

      .switch {
        height: 4em; // Reduced size for larger screens
        border-radius: 2em;

        .knob {
          top: 0.5em; // Reduced offset for larger screens
          left: 0.5em;
          height: 3em; // Smaller knob for larger screens
          width: 3em; // Smaller knob for larger screens
        }
      }

      &.active .switch .knob {
        transform: translateX(2.4em); // Adjusted based on larger size
      }
    }
  }
</style>
