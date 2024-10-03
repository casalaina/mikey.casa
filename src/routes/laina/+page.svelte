<script>
  import { onMount, onDestroy } from "svelte";
  import Fingers from "~/components/Fingers.svelte";
  import Popover from "~/components/Popover.svelte";
  import PopoverMobile from "~/components/PopoverMobile.svelte";
  import HoverLink from "~/components/HoverLink.svelte";
  import { isMobile, isKeyboardUser, popoverVisible } from "~/lib/stores.js";

  // States
  let ready = true;

  let base64 = "bWlrZXlAY2FzYWxhaW5hLmNvbQ==";
  let decodedEmail = atob(base64);

  // Popover states
  let popoverContent = "";
  let mouseX = 0;
  let mouseY = 0;
  let popoverColorClass = "";
  let popoverLink = "";
  let popoverLinkName = "";
  let focusTrigger = null;

  // Content mapping for hover targets
  const hoverContent = {
    pointed: "<p>This is a play on all the <span class='no-wrap'>👉 pointing fingers</span>, which is hopefully obvious, but I’m explaining it here to introduce that <span class='desktopOnly'>hovering on</span><span class='mobileOnly'>tapping</span> stuff shows other stuff.</p>",
    mikey: "<img src='img/mikey.jpg' /><p class='caption'>Me, pretending to be a model</p>",
    creative: "<p>Was never really sure how to feel about using “creative” as a noun, but I guess it’s become so widespread, if you can’t beat em, join em.</p>",
    amsterdam: "<img src='img/mdam.jpg' /><p class='caption'>Actually, I live in Monnickendam, a small fisherman’s village 10 minutes north of Amsterdam, but saying “living and working in Amsterdam” sounds better so I’m sticking with it.</p>",
    wet: "<img src='img/wet.jpg' /><p class='caption'>This must look familiar, right? World's simplest way to send files. I led the team that built all the big, beautiful, interactive, creative backgrounds.</p>",
    craft: "<img src='img/craft.jpg' /><p class='caption'>Apple Award-winning collaborative document app.</p>",
    lr: "<img src='img/lr.jpg' /><p class='caption'>loop/recur was a Bay Area-based app dev and design shop back in the early days of apps. We built stuff for Gamestop, Disney, Planned Parenthood, and lots more.</p>",
    ptr: "<img src='img/ptr.jpg' /><p class='caption'>“Pull to Refresh” was a tech/comedy podcast back in 2012, before everybody and their mom had one.</p>",
    letsheal: "<img src='img/letsheal.jpg' /><p class='caption'>LetsHeal is a non-profit initiative by adman turned pro-social advocate Mark Woerde.</p>",
    ns: "<img src='img/ns.jpg' /><p class='caption'>You can click to see my favorite video we did, but we've also got 4 full length LPs to check out where ever streaming is streamed.</p>",
    tfi: "<img src='img/tfi.jpg' /><p class='caption'>200 year old insitution with his giant marble Ben Franklin greeting you on the way in. I got to perform on stage, blowing up stuff and high fiving kids.</p>",
    meevee: "<img src='img/meevee.jpg' /><p class='caption'>Combining my shared love of tech, music, and education to bring something new to life.</p>",
    more: "<p>Fine, go ahead and click to see a little intro video.</p>",
    point: "<p>This is pretty much the exact same “point” pun I made at the beginning. Sorry.</p>",
    email: "<p>I legit love getting email. Seriously, send me something, don't be shy!</p>",
  };

  function handlePopoverEvent(event) {
    const { key, event: mouseEvent, href, linkName } = event.detail;
    focusTrigger = mouseEvent.target;

    // Set content and styling for the popover
    popoverContent = hoverContent[key] || "<p>No content available.</p>";
    popoverColorClass = Array.from(mouseEvent.target.classList).find((cls) => cls === "red" || cls === "blue" || cls === "green" || cls === "yellow") || "";
    popoverLink = href;
    popoverLinkName = linkName;

    // Handling different types of events to show/hide the popover
    if (mouseEvent.type === "mouseenter" || mouseEvent.type === "mousemove" || (mouseEvent.type === "click" && ($isMobile || $isKeyboardUser))) {
      // Show the popover for mouse hover or click
      $popoverVisible = true;
      mouseX = mouseEvent.pageX + 15 || 0;
      mouseY = mouseEvent.pageY + 15 || 0;
    } else if (mouseEvent.type === "mouseleave") {
      // Hide the popover when the mouse leaves
      $popoverVisible = false;
    }
  }

  function closePopover() {
    popoverLink = "";
    popoverLinkName = "";
    $popoverVisible = false;

    if (focusTrigger) {
      focusTrigger.focus();
    }
  }

  onMount(() => {
    if (typeof window !== "undefined") {
      const handleEscape = (event) => {
        if (event.key === "Escape") {
          closePopover();
        }
      };
      window.addEventListener("keydown", handleEscape);

      return () => {
        window.removeEventListener("keydown", handleEscape);
      };
    }
  });
</script>

<div id="fadeWrap" class={ready ? "active" : ""}>
  <Fingers>
    <div id="bgText">
      <div>
        <p>
          I’m not sure who
          <HoverLink tag="span" colorClass="red" dataPopoverKey="pointed" on:hover={handlePopoverEvent}>pointed</HoverLink>
          you here, but I’m glad you found the way.
        </p>
        <p>
          Hi, I’m
          <HoverLink tag="span" colorClass="blue" dataPopoverKey="mikey" on:hover={handlePopoverEvent}>Mikey</HoverLink>, a multi-disciplinary
          <HoverLink tag="span" colorClass="green" dataPopoverKey="creative" on:hover={handlePopoverEvent}>creative</HoverLink>, living and working in
          <HoverLink tag="span" colorClass="yellow" dataPopoverKey="amsterdam" on:hover={handlePopoverEvent}>Amsterdam</HoverLink>. I’ve led creative teams as a director at
          <HoverLink tag="a" href="https://wetransfer.com" linkName="Send some files w/ WeTransfer" target="_blank" colorClass="red" dataPopoverKey="wet" on:hover={handlePopoverEvent}>WeTransfer</HoverLink> and
          <HoverLink tag="a" href="https://www.craft.do" linkName="Check out Craft" target="_blank" colorClass="blue" dataPopoverKey="craft" on:hover={handlePopoverEvent}>Craft</HoverLink>, designed and coded apps with
          <HoverLink tag="a" href="https://looprecur.com" linkName="Check out loop/recur" target="_blank" colorClass="green" dataPopoverKey="lr" on:hover={handlePopoverEvent}>loop/recur</HoverLink>, built countless websites, hosted a
          <HoverLink tag="span" colorClass="yellow" dataPopoverKey="ptr" on:hover={handlePopoverEvent}>podcast</HoverLink>, edited books for
          <HoverLink tag="a" href="https://letsheal.org" linkName="Check out LetsHeal.org" target="_blank" colorClass="red" dataPopoverKey="letsheal" on:hover={handlePopoverEvent}>LetsHeal</HoverLink>, wrote, performed, and recorded with my band
          <HoverLink tag="a" href="https://www.youtube.com/watch?v=eUuXFB4T23o" linkName="Watch a Naive Set video" target="_blank" colorClass="blue" dataPopoverKey="ns" on:hover={handlePopoverEvent}>Naive Set</HoverLink>, and educated thousands with the
          <span style="white-space: nowrap"> <HoverLink tag="a" href="https://tfi.edu" linkName="Checkout tfi.edu" target="_blank" colorClass="green" dataPopoverKey="tfi" on:hover={handlePopoverEvent}>Franklin Institute</HoverLink>.</span>
        </p>
        <p style="break-before: column;">
          I’m currently working on something called
          <HoverLink tag="a" href="https://meev.ee" linkName="Check out Meevee" target="_blank" colorClass="yellow" dataPopoverKey="meevee" on:hover={handlePopoverEvent}>Meevee</HoverLink>, which I think will help parents and kids use screen time for good. But
          <HoverLink tag="a" href="https://www.veed.io/view/7e44bab8-c991-489b-b0ff-06faf524e51e" linkName="Watch the video" target="_blank" colorClass="red" dataPopoverKey="more" on:hover={handlePopoverEvent}>more</HoverLink> on that coming soon!
        </p>
        <p>
          Not sure what else to say at this
          <HoverLink tag="span" colorClass="green" dataPopoverKey="point" on:hover={handlePopoverEvent}>point</HoverLink>. But yeah, thanks for reading this far! Feel free to reach out and say hello. My email address is
          <span class="no-wrap">
            <HoverLink tag="a" href="mailto:{decodedEmail}" linkName="Email me!" colorClass="blue" dataPopoverKey="email" on:hover={handlePopoverEvent}>
              {decodedEmail}
            </HoverLink>
          </span>.
        </p>
      </div>
    </div>
    {#if $popoverVisible && ($isMobile || $isKeyboardUser)}
      <!-- Only show PopoverMobile if mobile or keyboard interaction -->
      <PopoverMobile content={popoverContent} colorClass={popoverColorClass} href={popoverLink} linkName={popoverLinkName} on:close={closePopover} />
    {/if}

    {#if $popoverVisible && !$isMobile && !$isKeyboardUser}
      <!-- Show regular Popover only for mouse interaction on non-mobile -->
      <Popover content={popoverContent} x={mouseX} y={mouseY} colorClass={popoverColorClass} on:close={closePopover} />
    {/if}
  </Fingers>
</div>

<style lang="scss">
  @use "sass:color";
  @use "~/styles/vars" as *;

  #fadeWrap {
    opacity: 0;
    transition: opacity 5s;
    &.active {
      opacity: 1;
    }
  }

  #bgText {
    font-size: 3.3rem;
    width: 100vw;
    height: 100%;
    position: absolute;
    background-color: #000;
    color: #f4f0e8;
    padding: 9rem 2rem;
    z-index: 1;
    background-size: cover;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transition:
      opacity 0.5s,
      background-color 0.5s,
      color 0.5s;

    cursor: default;
    user-select: none;
    -webkit-user-select: none;
    -webkit-touch-callout: none;

    @include from(sm) {
      column-count: 2;
      padding: 3.5rem;
    }
  }

  p {
    margin-top: 0;
    margin-bottom: 1.25rem;

    @include until(sm) {
      line-height: 1.5;
    }

    @include from(md) {
      margin-bottom: 1.5rem;
    }
  }
</style>
