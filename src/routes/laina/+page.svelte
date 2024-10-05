<script>
  import { onMount } from "svelte";
  import Fingers from "~/components/Fingers.svelte";
  import Popover from "~/components/Popover.svelte";
  import PopoverMobile from "~/components/PopoverMobile.svelte";
  import HoverLink from "~/components/HoverLink.svelte";
  import { isMobile, isKeyboardUser, popoverState } from "~/lib/stores.js";

  let ready = true;
  let base64 = "bWlrZXlAY2FzYWxhaW5hLmNvbQ==";
  let decodedEmail = atob(base64);

  // Content mapping for hover targets
  const hoverContent = {
    pointed: "<p>Use the <span class='no-wrap'>👉 pointing fingers</span> to light your way! <span class='desktopOnly'>Hovering over</span><span class='mobileOnly'>Tapping</span> squiggly-underlined stuff shows other stuff (like this very message). Annoyed? Sorry! Use the toggle in the upper right to turn on the lights.</p>",
    mikey: "<img src='img/mikey.jpg' /><p class='caption'>Me, pretending to be a model</p>",
    creative: "<p>Was never really sure how to feel about using “creative” as a noun, but I guess it’s become so widespread, if you can’t beat em, join em.</p>",
    amsterdam: "<img src='img/mdam.jpg' /><p class='caption'>Actually, I live in Monnickendam, a small fisherman’s village 10 minutes north of Amsterdam, but saying “living and working in Amsterdam” sounds better so I’m sticking with it.</p>",
    wet: "<img src='img/wet.jpg' /><p class='caption'>This must look familiar, right? World's simplest way to send files. I used to lead the team that built all the big, beautiful, interactive, creative backgrounds.</p>",
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
  function handleHover(event) {
    const { detail } = event;
    const { event: mouseEvent, key, href, linkName, colorClass } = detail;

    // For mouse users only
    if (!$isMobile && !$isKeyboardUser) {
      if (mouseEvent.type === "mouseenter") {
        popoverState.update((state) => ({
          ...state,
          visible: true,
          content: hoverContent[key] || "<p>No content available.</p>",
          x: mouseEvent.clientX + 15,
          y: mouseEvent.clientY + 15,
          colorClass,
          link: href,
          linkName,
        }));
      } else if (mouseEvent.type === "mouseleave") {
        popoverState.update((state) => ({ ...state, visible: false }));
      } else if (mouseEvent.type === "mousemove") {
        popoverState.update((state) => ({
          ...state,
          x: mouseEvent.clientX + 15,
          y: mouseEvent.clientY + 15,
        }));
      }
    }
  }

  function handleActivate(event) {
    const { detail } = event;
    const { event: mouseEvent, key, href, linkName, colorClass } = detail;

    // For mobile and keyboard users
    popoverState.set({
      visible: true,
      content: hoverContent[key] || "<p>No content available.</p>",
      x: 0, // Centered in PopoverMobile
      y: 0,
      colorClass,
      link: href,
      linkName,
      focusTrigger: mouseEvent.target,
    });
  }

  function handleFocus(event) {
    const { detail } = event;
    const { key, href, linkName, colorClass } = detail;

    // Update popover state without showing it
    popoverState.update((state) => ({
      ...state,
      content: hoverContent[key] || "<p>No content available.</p>",
      colorClass,
      link: href,
      linkName,
      focusTrigger: event.target,
    }));
  }

  function handleBlur() {
    // Only hide the popover if it's not mobile
    if (!$isMobile) {
      popoverState.update((state) => ({ ...state, visible: false }));
    }
  }

  function closePopover() {
    popoverState.update((state) => ({ ...state, visible: false }));

    // Return focus to the element that triggered the popover
    if ($popoverState.focusTrigger) {
      $popoverState.focusTrigger.focus();
    }
  }

  onMount(() => {
    function handleEscape(event) {
      if (event.key === "Escape") {
        closePopover();
      }
    }

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  });
</script>

<div id="fadeWrap" class={ready ? "active" : ""}>
  <Fingers>
    <div id="bgText">
      <div>
        <p>
          I'm not sure who
          <HoverLink tag="span" colorClass="red" dataPopoverKey="pointed" href="" linkName="" on:activate={handleActivate} on:hover={handleHover} on:focus={handleFocus} on:blur={handleBlur}>pointed</HoverLink>
          you here, but I'm glad you found the way.
        </p>
        <p>
          Hi, I'm
          <HoverLink tag="span" colorClass="blue" dataPopoverKey="mikey" on:activate={handleActivate} on:hover={handleHover} on:focus={handleFocus} on:blur={handleBlur}>Mikey</HoverLink>, a multi-disciplinary
          <HoverLink tag="span" colorClass="green" dataPopoverKey="creative" on:activate={handleActivate} on:hover={handleHover} on:focus={handleFocus} on:blur={handleBlur}>creative</HoverLink>, living and working in
          <HoverLink tag="span" colorClass="yellow" dataPopoverKey="amsterdam" on:activate={handleActivate} on:hover={handleHover} on:focus={handleFocus} on:blur={handleBlur}>Amsterdam</HoverLink>. I've led creative teams as a director at
          <HoverLink tag="a" href="https://wetransfer.com" linkName="Send some files w/ WeTransfer" target="_blank" colorClass="red" dataPopoverKey="wet" on:activate={handleActivate} on:hover={handleHover} on:focus={handleFocus} on:blur={handleBlur}>WeTransfer</HoverLink> and
          <HoverLink tag="a" href="https://www.craft.do" linkName="Check out Craft" target="_blank" colorClass="blue" dataPopoverKey="craft" on:activate={handleActivate} on:hover={handleHover} on:focus={handleFocus} on:blur={handleBlur}>Craft</HoverLink>, designed and coded apps with
          <HoverLink tag="a" href="https://looprecur.com" linkName="Check out loop/recur" target="_blank" colorClass="green" dataPopoverKey="lr" on:activate={handleActivate} on:hover={handleHover} on:focus={handleFocus} on:blur={handleBlur}>loop/recur</HoverLink>, built countless websites, hosted a
          <HoverLink tag="span" colorClass="yellow" dataPopoverKey="ptr" on:activate={handleActivate} on:hover={handleHover} on:focus={handleFocus} on:blur={handleBlur}>podcast</HoverLink>, edited books for
          <HoverLink tag="a" href="https://letsheal.org" linkName="Check out LetsHeal.org" target="_blank" colorClass="red" dataPopoverKey="letsheal" on:activate={handleActivate} on:hover={handleHover} on:focus={handleFocus} on:blur={handleBlur}>LetsHeal</HoverLink>, wrote, performed, and recorded with my band
          <HoverLink tag="a" href="https://www.youtube.com/watch?v=eUuXFB4T23o" linkName="Watch a Naive Set video" target="_blank" colorClass="blue" dataPopoverKey="ns" on:activate={handleActivate} on:hover={handleHover} on:focus={handleFocus} on:blur={handleBlur}>Naive Set</HoverLink>, and educated thousands with the
          <span style="white-space: nowrap"> <HoverLink tag="a" href="https://tfi.edu" linkName="Checkout tfi.edu" target="_blank" colorClass="green" dataPopoverKey="tfi" on:activate={handleActivate} on:hover={handleHover} on:focus={handleFocus} on:blur={handleBlur}>Franklin Institute</HoverLink>.</span>
        </p>
        <p style="break-before: column;">
          I'm currently working on something called
          <HoverLink tag="a" href="https://meev.ee" linkName="Check out Meevee" target="_blank" colorClass="yellow" dataPopoverKey="meevee" on:activate={handleActivate} on:hover={handleHover} on:focus={handleFocus} on:blur={handleBlur}>Meevee</HoverLink>, which I think will help parents and kids use screen time for good. But
          <HoverLink tag="a" href="https://www.veed.io/view/7e44bab8-c991-489b-b0ff-06faf524e51e" linkName="Watch the video" target="_blank" colorClass="red" dataPopoverKey="more" on:activate={handleActivate} on:hover={handleHover} on:focus={handleFocus} on:blur={handleBlur}>more</HoverLink> on that coming soon!
        </p>
        <p>
          Not sure what else to say at this
          <HoverLink tag="span" colorClass="green" dataPopoverKey="point" on:activate={handleActivate} on:hover={handleHover} on:focus={handleFocus} on:blur={handleBlur}>point</HoverLink>. But yeah, thanks for reading this far! Feel free to reach out and say hello. My email address is
          <span class="no-wrap">
            <HoverLink tag="a" href="mailto:{decodedEmail}" linkName="Email me!" colorClass="blue" dataPopoverKey="email" on:activate={handleActivate} on:hover={handleHover} on:focus={handleFocus} on:blur={handleBlur}>
              {decodedEmail}
            </HoverLink>
          </span>.
        </p>
      </div>
    </div>
    {#if $popoverState.visible && ($isMobile || $isKeyboardUser)}
      <PopoverMobile on:close={closePopover} />
    {/if}

    {#if $popoverState.visible && !($isMobile || $isKeyboardUser)}
      <Popover />
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
