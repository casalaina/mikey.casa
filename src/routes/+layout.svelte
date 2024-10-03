<script>
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";
  import { isIOS, isMobile } from "~/lib/stores.js";

  // global vars
  import "~/styles/globals.scss";

  let vh;
  let visible = false;

  onMount(() => {
    if ($isIOS) {
      let heightFix = window.innerHeight * 0.01;
      document.body.style.setProperty("--vh", `${heightFix}px`);
    }
    const imagesToPreload = ["img/mikey.jpg", "img/mdam.jpg", "img/wet.jpg", "img/craft.jpg", "img/lr.jpg", "img/ptr.jpg", "img/letsheal.jpg", "img/ns.jpg", "img/tfi.jpg", "img/meevee.jpg"];

    imagesToPreload.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
    // mounted so fade in
    visible = true;
  });
</script>

<svelte:window bind:innerHeight={vh} />

{#if visible}
  <div in:fade={{ duration: 1000 }} class={$isMobile ? "mobile" : "desktop"}>
    <slot />
  </div>
{/if}
