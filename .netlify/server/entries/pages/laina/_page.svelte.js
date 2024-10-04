import { c as create_ssr_component, a as subscribe, b as add_attribute, v as validate_component, e as escape, d as createEventDispatcher, n as null_to_empty } from "../../../chunks/ssr.js";
import { f as fingersVisible, p as popoverVisible, b as isKeyboardUser, a as isMobile } from "../../../chunks/stores.js";
const void_element_names = /^(?:area|base|br|col|command|embed|hr|img|input|keygen|link|meta|param|source|track|wbr)$/;
function is_void(name) {
  return void_element_names.test(name) || name.toLowerCase() === "!doctype";
}
const css$5 = {
  code: ".toggleFingers.svelte-pl57r.svelte-pl57r{position:fixed;font-size:6px;top:0.8em;right:2.5em;height:7em;width:12em;display:flex;align-items:center;cursor:pointer;border-radius:3.5em;padding:0.2em;transition:background-color 0.3s;box-shadow:2px 5px 30px rgba(255, 255, 255, 0.3);z-index:9;border:3px solid black;background:none;text-align:left;outline:none}.toggleFingers.svelte-pl57r.svelte-pl57r:focus-visible{outline:3px solid #4db7d0}@media screen and (min-width: 700px){.toggleFingers.svelte-pl57r.svelte-pl57r{left:auto;right:0.8em}}.toggleFingers.active.svelte-pl57r.svelte-pl57r{background-color:#4db7d0}.toggleFingers.svelte-pl57r .icon.svelte-pl57r{position:absolute;inset:0;font-size:3.5em;width:100%;display:flex;justify-content:space-around;align-items:center;margin-right:0.5em}.toggleFingers.svelte-pl57r .icon div.svelte-pl57r{opacity:0;transition:opacity 0.3s, transform 1s}.toggleFingers.svelte-pl57r .icon div.visible.svelte-pl57r{opacity:1}.toggleFingers.svelte-pl57r .toggleFinger.svelte-pl57r{transform:rotate(-220deg)}.toggleFingers.svelte-pl57r .switch.svelte-pl57r{flex-grow:1;width:100%;height:7em;border-radius:3.5em;position:relative;transition:background-color 0.3s}.toggleFingers.svelte-pl57r .switch .knob.svelte-pl57r{position:absolute;top:0.8em;left:0.5em;height:5.5em;width:5.5em;background-color:#000;border-radius:50%;transition:transform 0.3s}.toggleFingers.active.svelte-pl57r .switch .knob.svelte-pl57r{transform:translateX(4em)}.toggleFingers.active.svelte-pl57r .toggleFinger.svelte-pl57r{transform:rotate(-90deg)}@media screen and (min-width: 600px){.toggleFingers.svelte-pl57r.svelte-pl57r{font-size:11px;top:0.5em;left:auto;right:4em;height:4em;width:7em;border-radius:2em;padding:0.1em}.toggleFingers.svelte-pl57r .icon.svelte-pl57r{font-size:2em}.toggleFingers.svelte-pl57r .switch.svelte-pl57r{height:4em;border-radius:2em}.toggleFingers.svelte-pl57r .switch .knob.svelte-pl57r{top:0.5em;left:0.5em;height:3em;width:3em}.toggleFingers.active.svelte-pl57r .switch .knob.svelte-pl57r{transform:translateX(2.4em)}}",
  map: '{"version":3,"file":"FingersToggle.svelte","sources":["FingersToggle.svelte"],"sourcesContent":["<script>\\n  import { fingersVisible } from \\"~/lib/stores.js\\";\\n\\n  // Toggle visibility\\n  function toggleFingers() {\\n    fingersVisible.update((value) => !value);\\n  }\\n<\/script>\\n\\n<button class=\\"toggleFingers\\" class:active={$fingersVisible} on:click={toggleFingers} aria-label={$fingersVisible ? \\"Hide the fingers, show the content\\" : \\"Show the fingers, hide the content\\"} aria-pressed={$fingersVisible}>\\n  <div class=\\"switch\\">\\n    <div class=\\"icon\\">\\n      <div class:visible={$fingersVisible}>💡</div>\\n      <div class:visible={!$fingersVisible} class=\\"toggleFinger\\">👉</div>\\n    </div>\\n    <div class=\\"knob\\"></div>\\n  </div>\\n</button>\\n\\n<style lang=\\"scss\\">.toggleFingers {\\n  position: fixed;\\n  font-size: 6px;\\n  top: 0.8em;\\n  right: 2.5em;\\n  height: 7em;\\n  width: 12em;\\n  display: flex;\\n  align-items: center;\\n  cursor: pointer;\\n  border-radius: 3.5em;\\n  padding: 0.2em;\\n  transition: background-color 0.3s;\\n  box-shadow: 2px 5px 30px rgba(255, 255, 255, 0.3);\\n  z-index: 9;\\n  border: 3px solid black;\\n  background: none; /* emove default button styles */\\n  text-align: left;\\n  outline: none;\\n}\\n.toggleFingers:focus-visible {\\n  outline: 3px solid #4db7d0; /* Add a visible focus indicator */\\n}\\n@media screen and (min-width: 700px) {\\n  .toggleFingers {\\n    left: auto;\\n    right: 0.8em;\\n  }\\n}\\n.toggleFingers.active {\\n  background-color: #4db7d0;\\n}\\n.toggleFingers .icon {\\n  position: absolute;\\n  inset: 0;\\n  font-size: 3.5em;\\n  width: 100%;\\n  display: flex;\\n  justify-content: space-around;\\n  align-items: center;\\n  margin-right: 0.5em;\\n}\\n.toggleFingers .icon div {\\n  opacity: 0;\\n  transition: opacity 0.3s, transform 1s;\\n}\\n.toggleFingers .icon div.visible {\\n  opacity: 1;\\n}\\n.toggleFingers .toggleFinger {\\n  transform: rotate(-220deg);\\n}\\n.toggleFingers .switch {\\n  flex-grow: 1;\\n  width: 100%;\\n  height: 7em;\\n  border-radius: 3.5em;\\n  position: relative;\\n  transition: background-color 0.3s;\\n}\\n.toggleFingers .switch .knob {\\n  position: absolute;\\n  top: 0.8em;\\n  left: 0.5em;\\n  height: 5.5em;\\n  width: 5.5em;\\n  background-color: #000;\\n  border-radius: 50%;\\n  transition: transform 0.3s;\\n}\\n.toggleFingers.active .switch .knob {\\n  transform: translateX(4em);\\n}\\n.toggleFingers.active .toggleFinger {\\n  transform: rotate(-90deg);\\n}\\n@media screen and (min-width: 600px) {\\n  .toggleFingers {\\n    font-size: 11px;\\n    top: 0.5em;\\n    left: auto;\\n    right: 4em;\\n    height: 4em;\\n    width: 7em;\\n    border-radius: 2em;\\n    padding: 0.1em;\\n  }\\n  .toggleFingers .icon {\\n    font-size: 2em;\\n  }\\n  .toggleFingers .switch {\\n    height: 4em;\\n    border-radius: 2em;\\n  }\\n  .toggleFingers .switch .knob {\\n    top: 0.5em;\\n    left: 0.5em;\\n    height: 3em;\\n    width: 3em;\\n  }\\n  .toggleFingers.active .switch .knob {\\n    transform: translateX(2.4em);\\n  }\\n}</style>\\n"],"names":[],"mappings":"AAmBmB,wCAAe,CAChC,QAAQ,CAAE,KAAK,CACf,SAAS,CAAE,GAAG,CACd,GAAG,CAAE,KAAK,CACV,KAAK,CAAE,KAAK,CACZ,MAAM,CAAE,GAAG,CACX,KAAK,CAAE,IAAI,CACX,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,MAAM,CAAE,OAAO,CACf,aAAa,CAAE,KAAK,CACpB,OAAO,CAAE,KAAK,CACd,UAAU,CAAE,gBAAgB,CAAC,IAAI,CACjC,UAAU,CAAE,GAAG,CAAC,GAAG,CAAC,IAAI,CAAC,KAAK,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CACjD,OAAO,CAAE,CAAC,CACV,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,KAAK,CACvB,UAAU,CAAE,IAAI,CAChB,UAAU,CAAE,IAAI,CAChB,OAAO,CAAE,IACX,CACA,wCAAc,cAAe,CAC3B,OAAO,CAAE,GAAG,CAAC,KAAK,CAAC,OACrB,CACA,OAAO,MAAM,CAAC,GAAG,CAAC,YAAY,KAAK,CAAE,CACnC,wCAAe,CACb,IAAI,CAAE,IAAI,CACV,KAAK,CAAE,KACT,CACF,CACA,cAAc,iCAAQ,CACpB,gBAAgB,CAAE,OACpB,CACA,2BAAc,CAAC,kBAAM,CACnB,QAAQ,CAAE,QAAQ,CAClB,KAAK,CAAE,CAAC,CACR,SAAS,CAAE,KAAK,CAChB,KAAK,CAAE,IAAI,CACX,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,YAAY,CAC7B,WAAW,CAAE,MAAM,CACnB,YAAY,CAAE,KAChB,CACA,2BAAc,CAAC,KAAK,CAAC,gBAAI,CACvB,OAAO,CAAE,CAAC,CACV,UAAU,CAAE,OAAO,CAAC,IAAI,CAAC,CAAC,SAAS,CAAC,EACtC,CACA,2BAAc,CAAC,KAAK,CAAC,GAAG,qBAAS,CAC/B,OAAO,CAAE,CACX,CACA,2BAAc,CAAC,0BAAc,CAC3B,SAAS,CAAE,OAAO,OAAO,CAC3B,CACA,2BAAc,CAAC,oBAAQ,CACrB,SAAS,CAAE,CAAC,CACZ,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,GAAG,CACX,aAAa,CAAE,KAAK,CACpB,QAAQ,CAAE,QAAQ,CAClB,UAAU,CAAE,gBAAgB,CAAC,IAC/B,CACA,2BAAc,CAAC,OAAO,CAAC,kBAAM,CAC3B,QAAQ,CAAE,QAAQ,CAClB,GAAG,CAAE,KAAK,CACV,IAAI,CAAE,KAAK,CACX,MAAM,CAAE,KAAK,CACb,KAAK,CAAE,KAAK,CACZ,gBAAgB,CAAE,IAAI,CACtB,aAAa,CAAE,GAAG,CAClB,UAAU,CAAE,SAAS,CAAC,IACxB,CACA,cAAc,oBAAO,CAAC,OAAO,CAAC,kBAAM,CAClC,SAAS,CAAE,WAAW,GAAG,CAC3B,CACA,cAAc,oBAAO,CAAC,0BAAc,CAClC,SAAS,CAAE,OAAO,MAAM,CAC1B,CACA,OAAO,MAAM,CAAC,GAAG,CAAC,YAAY,KAAK,CAAE,CACnC,wCAAe,CACb,SAAS,CAAE,IAAI,CACf,GAAG,CAAE,KAAK,CACV,IAAI,CAAE,IAAI,CACV,KAAK,CAAE,GAAG,CACV,MAAM,CAAE,GAAG,CACX,KAAK,CAAE,GAAG,CACV,aAAa,CAAE,GAAG,CAClB,OAAO,CAAE,KACX,CACA,2BAAc,CAAC,kBAAM,CACnB,SAAS,CAAE,GACb,CACA,2BAAc,CAAC,oBAAQ,CACrB,MAAM,CAAE,GAAG,CACX,aAAa,CAAE,GACjB,CACA,2BAAc,CAAC,OAAO,CAAC,kBAAM,CAC3B,GAAG,CAAE,KAAK,CACV,IAAI,CAAE,KAAK,CACX,MAAM,CAAE,GAAG,CACX,KAAK,CAAE,GACT,CACA,cAAc,oBAAO,CAAC,OAAO,CAAC,kBAAM,CAClC,SAAS,CAAE,WAAW,KAAK,CAC7B,CACF"}'
};
const FingersToggle = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $fingersVisible, $$unsubscribe_fingersVisible;
  $$unsubscribe_fingersVisible = subscribe(fingersVisible, (value) => $fingersVisible = value);
  $$result.css.add(css$5);
  $$unsubscribe_fingersVisible();
  return `<button class="${["toggleFingers svelte-pl57r", $fingersVisible ? "active" : ""].join(" ").trim()}"${add_attribute(
    "aria-label",
    $fingersVisible ? "Hide the fingers, show the content" : "Show the fingers, hide the content",
    0
  )}${add_attribute("aria-pressed", $fingersVisible, 0)}><div class="switch svelte-pl57r"><div class="icon svelte-pl57r"><div class="${["svelte-pl57r", $fingersVisible ? "visible" : ""].join(" ").trim()}" data-svelte-h="svelte-7xom19">💡</div> <div class="${["toggleFinger svelte-pl57r", !$fingersVisible ? "visible" : ""].join(" ").trim()}" data-svelte-h="svelte-13btrcm">👉</div></div> <div class="knob svelte-pl57r"></div></div> </button>`;
});
const css$4 = {
  code: "#fingerWrap.svelte-ouji0y{position:absolute;z-index:4;font-size:32px;opacity:1;transition:opacity 0.5s}.line{position:absolute;will-change:transform;pointer-events:none}#inner.svelte-ouji0y{margin:0;padding-top:5rem;width:100vw;height:100vh;top:0;left:0;height:calc(var(--vh, 1vh) * 100);position:fixed;background-color:#000;overflow:hidden;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-backface-visibility:hidden;backface-visibility:hidden}@media screen and (min-width: 700px){#inner.svelte-ouji0y{padding-top:0}}#light.svelte-ouji0y{position:absolute;z-index:2;pointer-events:none;background-color:transparent;box-shadow:inset 0 0 100px 100px rgba(0, 0, 0, 0.9), 0 0 200vw 200vw rgba(0, 0, 0, 0.9);width:500px;height:500px;opacity:1;transition:opacity 0.5s, box-shadow 0.5s;will-change:transform}",
  map: '{"version":3,"file":"Fingers.svelte","sources":["Fingers.svelte"],"sourcesContent":["<script>\\n  import { onMount } from \\"svelte\\";\\n  import FingersToggle from \\"~/components/FingersToggle.svelte\\";\\n  import { fingersVisible } from \\"~/lib/stores.js\\";\\n\\n  // finger variables\\n  let lines = [];\\n  let requestId = null;\\n  let fingerWrap;\\n\\n  // content variables\\n  let light;\\n  let vw;\\n  let vh;\\n\\n  // states\\n  let ready = false;\\n\\n  // set global functions\\n  let mouseMove;\\n  let touchMove;\\n  let makeFingers;\\n  let update;\\n\\n  const emojis = [\\"👉🏻\\", \\"👉🏼\\", \\"👉🏽\\", \\"👉🏾\\", \\"👉🏿\\"];\\n\\n  onMount(() => {\\n    vw = window.innerWidth;\\n    vh = window.innerHeight;\\n    let xInitial = vw > 800 ? vw * 0.15 : vw * 0.33;\\n    let yInitial = vw > 800 ? vh * 0.225 : vh * 0.15;\\n    let mouse = {\\n      x: xInitial,\\n      y: yInitial,\\n    };\\n\\n    // Make fingers\\n    makeFingers = () => {\\n      // Clear fingerWrap\\n      fingerWrap.innerHTML = \\"\\";\\n      vw = window.innerWidth;\\n      vh = window.innerHeight;\\n\\n      // finger settings\\n      let width = 40;\\n      let height = 40;\\n      let grid = 56;\\n      fingerWrap.style.setProperty(\\"font-size\\", `32px`);\\n\\n      // Small width finger adjustment\\n      if (vw < 600) {\\n        width = 30;\\n        height = 30;\\n        grid = 32;\\n        fingerWrap.style.setProperty(\\"font-size\\", `18px`);\\n      }\\n\\n      // Add Fingers\\n      let padding = 0;\\n\\n      let xStart = grid / 2;\\n      let xEnd = vw - width;\\n      let yStart = grid / 2 + padding;\\n      let yEnd = vh - height - padding;\\n\\n      if (vw > 600) {\\n        xStart += padding;\\n        xEnd -= padding;\\n      }\\n\\n      for (let y = yStart; y <= yEnd; y += grid) {\\n        for (let x = xStart; x <= xEnd; x += grid) {\\n          let line = document.createElement(\\"div\\");\\n          fingerWrap.append(line);\\n          line.style.width = width + \\"px\\";\\n          line.style.height = height + \\"px\\";\\n          line.style.left = x + \\"px\\";\\n          line.style.top = y + \\"px\\";\\n          line.innerHTML = `<span>👉🏿</span>`;\\n          line.className = \\"line\\";\\n\\n          lines.push({\\n            element: line,\\n            cx: x + width / 2,\\n            cy: y + height / 2,\\n          });\\n        }\\n      }\\n      ready = true;\\n    };\\n\\n    mouseMove = (event) => {\\n      mouse.x = event.pageX;\\n      mouse.y = event.pageY;\\n\\n      if (!requestId) {\\n        requestId = requestAnimationFrame(update);\\n      }\\n    };\\n\\n    touchMove = (event) => {\\n      mouse.x = event.touches[0].pageX;\\n      mouse.y = event.touches[0].pageY;\\n\\n      if (!requestId) {\\n        requestId = requestAnimationFrame(update);\\n      }\\n    };\\n\\n    // Update fingers\\n    update = () => {\\n      for (let i = 0; i < lines.length; i++) {\\n        let line = lines[i];\\n        let dx = mouse.x - line.cx;\\n        let dy = mouse.y - line.cy;\\n        let transform = \\"rotate(\\" + Math.atan2(dy, dx) + \\"rad)\\";\\n        line.element.style.transform = transform;\\n\\n        // Calculate distance from cursor to finger center\\n        let distance = Math.hypot(dx, dy);\\n\\n        // Determine which emoji to use based on distance\\n        let index;\\n        if (distance <= 75) {\\n          index = 0;\\n        } else if (distance <= 150) {\\n          index = 1;\\n        } else if (distance <= 275) {\\n          index = 2;\\n        } else if (distance <= 400) {\\n          index = 3;\\n        } else {\\n          index = 4;\\n        }\\n\\n        // Update the emoji in the span\\n        let currentEmoji = line.element.firstChild.textContent;\\n        let newEmoji = emojis[index];\\n        if (currentEmoji !== newEmoji) {\\n          line.element.firstChild.textContent = newEmoji;\\n        }\\n      }\\n\\n      requestId = null;\\n\\n      // Update light position\\n      if (light) {\\n        light.style.cssText = `transform: translate(${mouse.x - 250}px, ${mouse.y - 250}px)`;\\n      }\\n    };\\n\\n    makeFingers();\\n    update();\\n  });\\n<\/script>\\n\\n<svelte:window on:resize={makeFingers} bind:innerWidth={vw} bind:innerHeight={vh} />\\n<div id=\\"outer\\" on:mousemove={mouseMove} on:touchmove={touchMove} class={$fingersVisible ? \\"\\" : \\"hideFingers\\"} aria-hidden=\\"true\\">\\n  <div id=\\"inner\\">\\n    <FingersToggle />\\n\\n    <div id=\\"light\\" bind:this={light} />\\n    <slot />\\n\\n    <div id=\\"fingerWrap\\" bind:this={fingerWrap} aria-label=\\"An emoji-based interactive where finger pointing emojis follow the cursor\\" />\\n  </div>\\n</div>\\n\\n<style lang=\\"scss\\">#fingerWrap {\\n  position: absolute;\\n  z-index: 4;\\n  font-size: 32px;\\n  opacity: 1;\\n  transition: opacity 0.5s;\\n}\\n\\n:global(.line) {\\n  position: absolute;\\n  will-change: transform;\\n  pointer-events: none;\\n}\\n\\n#inner {\\n  margin: 0;\\n  padding-top: 5rem;\\n  width: 100vw;\\n  height: 100vh;\\n  top: 0;\\n  left: 0;\\n  height: calc(var(--vh, 1vh) * 100);\\n  position: fixed;\\n  background-color: #000;\\n  overflow: hidden;\\n  -webkit-font-smoothing: antialiased;\\n  -moz-osx-font-smoothing: grayscale;\\n  -webkit-backface-visibility: hidden;\\n  backface-visibility: hidden;\\n}\\n@media screen and (min-width: 700px) {\\n  #inner {\\n    padding-top: 0;\\n  }\\n}\\n\\n#light {\\n  position: absolute;\\n  z-index: 2;\\n  pointer-events: none;\\n  background-color: transparent;\\n  box-shadow: inset 0 0 100px 100px rgba(0, 0, 0, 0.9), 0 0 200vw 200vw rgba(0, 0, 0, 0.9);\\n  width: 500px;\\n  height: 500px;\\n  opacity: 1;\\n  transition: opacity 0.5s, box-shadow 0.5s;\\n  will-change: transform;\\n}</style>\\n"],"names":[],"mappings":"AAwKmB,yBAAY,CAC7B,QAAQ,CAAE,QAAQ,CAClB,OAAO,CAAE,CAAC,CACV,SAAS,CAAE,IAAI,CACf,OAAO,CAAE,CAAC,CACV,UAAU,CAAE,OAAO,CAAC,IACtB,CAEQ,KAAO,CACb,QAAQ,CAAE,QAAQ,CAClB,WAAW,CAAE,SAAS,CACtB,cAAc,CAAE,IAClB,CAEA,oBAAO,CACL,MAAM,CAAE,CAAC,CACT,WAAW,CAAE,IAAI,CACjB,KAAK,CAAE,KAAK,CACZ,MAAM,CAAE,KAAK,CACb,GAAG,CAAE,CAAC,CACN,IAAI,CAAE,CAAC,CACP,MAAM,CAAE,KAAK,IAAI,IAAI,CAAC,IAAI,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,CAClC,QAAQ,CAAE,KAAK,CACf,gBAAgB,CAAE,IAAI,CACtB,QAAQ,CAAE,MAAM,CAChB,sBAAsB,CAAE,WAAW,CACnC,uBAAuB,CAAE,SAAS,CAClC,2BAA2B,CAAE,MAAM,CACnC,mBAAmB,CAAE,MACvB,CACA,OAAO,MAAM,CAAC,GAAG,CAAC,YAAY,KAAK,CAAE,CACnC,oBAAO,CACL,WAAW,CAAE,CACf,CACF,CAEA,oBAAO,CACL,QAAQ,CAAE,QAAQ,CAClB,OAAO,CAAE,CAAC,CACV,cAAc,CAAE,IAAI,CACpB,gBAAgB,CAAE,WAAW,CAC7B,UAAU,CAAE,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,KAAK,CAAC,KAAK,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,KAAK,CAAC,KAAK,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,CACxF,KAAK,CAAE,KAAK,CACZ,MAAM,CAAE,KAAK,CACb,OAAO,CAAE,CAAC,CACV,UAAU,CAAE,OAAO,CAAC,IAAI,CAAC,CAAC,UAAU,CAAC,IAAI,CACzC,WAAW,CAAE,SACf"}'
};
const Fingers = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $fingersVisible, $$unsubscribe_fingersVisible;
  $$unsubscribe_fingersVisible = subscribe(fingersVisible, (value) => $fingersVisible = value);
  let fingerWrap;
  let light;
  $$result.css.add(css$4);
  $$unsubscribe_fingersVisible();
  return ` <div id="outer"${add_attribute("class", $fingersVisible ? "" : "hideFingers", 0)} aria-hidden="true"><div id="inner" class="svelte-ouji0y">${validate_component(FingersToggle, "FingersToggle").$$render($$result, {}, {}, {})} <div id="light" class="svelte-ouji0y"${add_attribute("this", light, 0)}></div> ${slots.default ? slots.default({}) : ``} <div id="fingerWrap" aria-label="An emoji-based interactive where finger pointing emojis follow the cursor" class="svelte-ouji0y"${add_attribute("this", fingerWrap, 0)}></div></div> </div>`;
});
const css$3 = {
  code: ".popover.svelte-ig72uc{position:fixed;top:0;left:0;transform:translate(var(--x), var(--y));background-color:black;color:#f4f0e8;padding:2rem;max-width:400px;z-index:100;border-radius:2rem;font-size:2.5rem;line-height:1.1;cursor:pointer;margin-bottom:1rem}.popover.red.svelte-ig72uc{box-shadow:10px 10px 0 #ea6180}.popover.yellow.svelte-ig72uc{box-shadow:10px 10px 0 #f8d68f}.popover.green.svelte-ig72uc{box-shadow:10px 10px 0 #6dc999}.popover.blue.svelte-ig72uc{box-shadow:10px 10px 0 #4db7d0}.popover p{font-size:1em;margin:1rem 0 0 0}.popover .caption{font-size:0.85em;margin:1rem 0 0 0}",
  map: '{"version":3,"file":"Popover.svelte","sources":["Popover.svelte"],"sourcesContent":["<script>\\n  import { onMount, afterUpdate } from \\"svelte\\";\\n  import { fade } from \\"svelte/transition\\";\\n\\n  export let content = \\"\\";\\n  export let x = 0; // Mouse x position\\n  export let y = 0; // Mouse y position\\n  export let colorClass = \\"\\";\\n\\n  let alignmentClass = \\"\\";\\n  let popoverElement;\\n  let popoverHeight = 0;\\n  let popoverWidth = 0;\\n  let adjustedX = x;\\n  let adjustedY = y;\\n\\n  // Ensure popoverHeight and popoverWidth are up-to-date after DOM updates\\n  afterUpdate(() => {\\n    if (popoverElement) {\\n      popoverHeight = popoverElement.offsetHeight || 0;\\n      popoverWidth = popoverElement.offsetWidth || 0;\\n      clampPosition(); // Adjust position if needed after every update\\n    }\\n  });\\n\\n  // Clamp the popover position to ensure it stays inside the viewport\\n  function clampPosition() {\\n    const distanceToRight = window.innerWidth - x;\\n    const distanceToBottom = window.innerHeight - y;\\n\\n    // Clamp x position to ensure the popover does not overflow on the right\\n    if (distanceToRight < popoverWidth) {\\n      adjustedX = Math.max(20, window.innerWidth - popoverWidth - 20); // Clamping X, adding padding from the right edge\\n    } else {\\n      adjustedX = x;\\n    }\\n\\n    // Clamp y position to ensure the popover does not overflow on the bottom\\n    if (distanceToBottom < popoverHeight) {\\n      adjustedY = Math.max(20, window.innerHeight - popoverHeight - 20); // Clamping Y, adding padding from the bottom edge\\n    } else {\\n      adjustedY = y;\\n    }\\n  }\\n\\n  // Initial update of position\\n  $: clampPosition();\\n<\/script>\\n\\n<!-- Popover element with dynamic positioning -->\\n<div\\n  bind:this={popoverElement}\\n  class=\\"popover popoverStandard {alignmentClass} {colorClass}\\"\\n  style=\\"\\n    --x: {adjustedX}px;\\n    --y: {adjustedY}px;\\n  \\"\\n  in:fade={{ delay: 500 }}\\n  out:fade>\\n  {@html content}\\n</div>\\n\\n<style lang=\\"scss\\">.popover {\\n  position: fixed;\\n  top: 0;\\n  left: 0;\\n  transform: translate(var(--x), var(--y));\\n  background-color: black;\\n  color: #f4f0e8;\\n  padding: 2rem;\\n  max-width: 400px;\\n  z-index: 100;\\n  border-radius: 2rem;\\n  font-size: 2.5rem;\\n  line-height: 1.1;\\n  cursor: pointer;\\n  margin-bottom: 1rem;\\n}\\n.popover.red {\\n  box-shadow: 10px 10px 0 #ea6180;\\n}\\n.popover.yellow {\\n  box-shadow: 10px 10px 0 #f8d68f;\\n}\\n.popover.green {\\n  box-shadow: 10px 10px 0 #6dc999;\\n}\\n.popover.blue {\\n  box-shadow: 10px 10px 0 #4db7d0;\\n}\\n\\n:global(.popover p) {\\n  font-size: 1em;\\n  margin: 1rem 0 0 0;\\n}\\n\\n:global(.popover .caption) {\\n  font-size: 0.85em;\\n  margin: 1rem 0 0 0;\\n}</style>\\n"],"names":[],"mappings":"AA8DmB,sBAAS,CAC1B,QAAQ,CAAE,KAAK,CACf,GAAG,CAAE,CAAC,CACN,IAAI,CAAE,CAAC,CACP,SAAS,CAAE,UAAU,IAAI,GAAG,CAAC,CAAC,CAAC,IAAI,GAAG,CAAC,CAAC,CACxC,gBAAgB,CAAE,KAAK,CACvB,KAAK,CAAE,OAAO,CACd,OAAO,CAAE,IAAI,CACb,SAAS,CAAE,KAAK,CAChB,OAAO,CAAE,GAAG,CACZ,aAAa,CAAE,IAAI,CACnB,SAAS,CAAE,MAAM,CACjB,WAAW,CAAE,GAAG,CAChB,MAAM,CAAE,OAAO,CACf,aAAa,CAAE,IACjB,CACA,QAAQ,kBAAK,CACX,UAAU,CAAE,IAAI,CAAC,IAAI,CAAC,CAAC,CAAC,OAC1B,CACA,QAAQ,qBAAQ,CACd,UAAU,CAAE,IAAI,CAAC,IAAI,CAAC,CAAC,CAAC,OAC1B,CACA,QAAQ,oBAAO,CACb,UAAU,CAAE,IAAI,CAAC,IAAI,CAAC,CAAC,CAAC,OAC1B,CACA,QAAQ,mBAAM,CACZ,UAAU,CAAE,IAAI,CAAC,IAAI,CAAC,CAAC,CAAC,OAC1B,CAEQ,UAAY,CAClB,SAAS,CAAE,GAAG,CACd,MAAM,CAAE,IAAI,CAAC,CAAC,CAAC,CAAC,CAAC,CACnB,CAEQ,iBAAmB,CACzB,SAAS,CAAE,MAAM,CACjB,MAAM,CAAE,IAAI,CAAC,CAAC,CAAC,CAAC,CAAC,CACnB"}'
};
let alignmentClass = "";
const Popover = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { content = "" } = $$props;
  let { x = 0 } = $$props;
  let { y = 0 } = $$props;
  let { colorClass = "" } = $$props;
  let popoverElement;
  let popoverHeight = 0;
  let popoverWidth = 0;
  let adjustedX = x;
  let adjustedY = y;
  function clampPosition() {
    const distanceToRight = window.innerWidth - x;
    const distanceToBottom = window.innerHeight - y;
    if (distanceToRight < popoverWidth) {
      adjustedX = Math.max(20, window.innerWidth - popoverWidth - 20);
    } else {
      adjustedX = x;
    }
    if (distanceToBottom < popoverHeight) {
      adjustedY = Math.max(20, window.innerHeight - popoverHeight - 20);
    } else {
      adjustedY = y;
    }
  }
  if ($$props.content === void 0 && $$bindings.content && content !== void 0) $$bindings.content(content);
  if ($$props.x === void 0 && $$bindings.x && x !== void 0) $$bindings.x(x);
  if ($$props.y === void 0 && $$bindings.y && y !== void 0) $$bindings.y(y);
  if ($$props.colorClass === void 0 && $$bindings.colorClass && colorClass !== void 0) $$bindings.colorClass(colorClass);
  $$result.css.add(css$3);
  {
    clampPosition();
  }
  return ` <div class="${"popover popoverStandard " + escape(alignmentClass, true) + " " + escape(colorClass, true) + " svelte-ig72uc"}" style="${"--x: " + escape(adjustedX, true) + "px; --y: " + escape(adjustedY, true) + "px;"}"${add_attribute("this", popoverElement, 0)}><!-- HTML_TAG_START -->${content}<!-- HTML_TAG_END --> </div>`;
});
const css$2 = {
  code: ".overlay.svelte-1pztphg{position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0, 0, 0, 0.7);z-index:9}.popover.svelte-1pztphg{position:fixed;top:50%;left:50%;transform:translate(-50%, -50%);background-color:black;color:#f4f0e8;padding:2rem;width:90vw;height:auto;max-width:500px;max-height:80vh;overflow-y:auto;z-index:10;border-radius:2rem;line-height:1.2;box-shadow:0 4px 12px rgba(0, 0, 0, 0.3)}.popover.red.svelte-1pztphg{box-shadow:10px 10px 0 #ea6180}.popover.yellow.svelte-1pztphg{box-shadow:10px 10px 0 #f8d68f}.popover.green.svelte-1pztphg{box-shadow:10px 10px 0 #6dc999}.popover.blue.svelte-1pztphg{box-shadow:10px 10px 0 #4db7d0}.popover-content.svelte-1pztphg{margin-bottom:1.5rem}.see-more-button.svelte-1pztphg{background:#4db7d0;color:#fff;border:none;padding:1rem 2rem;margin:1rem 0;font-size:3rem;border-radius:1rem;cursor:pointer;text-align:center;position:relative;z-index:11;width:100%;pointer-events:all}.see-more-button.svelte-1pztphg:focus-visible{outline:3px solid white}.popoverMobile p{font-size:3em;margin:1rem 0 0 0}.popoverMobile .caption{font-size:3em;margin:1rem 0 0 0}",
  map: `{"version":3,"file":"PopoverMobile.svelte","sources":["PopoverMobile.svelte"],"sourcesContent":["<script>\\n  import { fade } from \\"svelte/transition\\";\\n  import { onMount, createEventDispatcher } from \\"svelte\\";\\n  import { popoverVisible, isKeyboardUser } from \\"~/lib/stores.js\\";\\n\\n  export let content = \\"\\";\\n  export let colorClass = \\"\\";\\n  export let href = null;\\n  export let linkName = \\"\\";\\n\\n  const dispatch = createEventDispatcher();\\n\\n  let buttonRef;\\n\\n  // Set popoverVisible to true and focus the button on mount\\n  onMount(() => {\\n    $popoverVisible = true;\\n\\n    // Focus the button when the popover opens\\n    if (buttonRef && $isKeyboardUser) {\\n      buttonRef.focus();\\n    }\\n\\n    // Add a keydown event listener to handle 'Tab' and close the popover\\n    const handleKeydown = (event) => {\\n      if (event.key === \\"Tab\\") {\\n        event.preventDefault(); // Prevent default tab behavior\\n        closePopover();\\n      }\\n    };\\n\\n    window.addEventListener(\\"keydown\\", handleKeydown);\\n\\n    // Clean up the event listener when the component is destroyed\\n    return () => {\\n      window.removeEventListener(\\"keydown\\", handleKeydown);\\n    };\\n  });\\n\\n  function closePopover() {\\n    dispatch(\\"close\\");\\n    $popoverVisible = false;\\n  }\\n\\n  function handleButtonClick(event) {\\n    event.stopPropagation();\\n    if (href) {\\n      window.open(href, \\"_blank\\");\\n    }\\n  }\\n<\/script>\\n\\n<div transition:fade>\\n  <div class=\\"overlay\\" on:click={closePopover} aria-hidden=\\"true\\"></div>\\n\\n  <!-- Popover content centered in the viewport -->\\n  <div class=\\"popover popoverMobile {colorClass}\\" role=\\"dialog\\">\\n    <div class=\\"popover-content\\">\\n      {@html content}\\n    </div>\\n    {#if href && linkName}\\n      <button class=\\"see-more-button\\" tabindex=\\"0\\" on:click={handleButtonClick} bind:this={buttonRef}>\\n        {linkName}\\n      </button>\\n    {/if}\\n  </div>\\n</div>\\n\\n<style lang=\\"scss\\">.overlay {\\n  position: fixed;\\n  top: 0;\\n  left: 0;\\n  width: 100%;\\n  height: 100%;\\n  background: rgba(0, 0, 0, 0.7);\\n  z-index: 9;\\n}\\n\\n.popover {\\n  position: fixed;\\n  top: 50%;\\n  left: 50%;\\n  transform: translate(-50%, -50%);\\n  background-color: black;\\n  color: #f4f0e8;\\n  padding: 2rem;\\n  width: 90vw;\\n  height: auto;\\n  max-width: 500px;\\n  max-height: 80vh;\\n  overflow-y: auto;\\n  z-index: 10;\\n  border-radius: 2rem;\\n  line-height: 1.2;\\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);\\n}\\n.popover.red {\\n  box-shadow: 10px 10px 0 #ea6180;\\n}\\n.popover.yellow {\\n  box-shadow: 10px 10px 0 #f8d68f;\\n}\\n.popover.green {\\n  box-shadow: 10px 10px 0 #6dc999;\\n}\\n.popover.blue {\\n  box-shadow: 10px 10px 0 #4db7d0;\\n}\\n\\n.popover-content {\\n  margin-bottom: 1.5rem;\\n}\\n\\n.see-more-button {\\n  background: #4db7d0; /* Example color, adjust based on your needs */\\n  color: #fff;\\n  border: none;\\n  padding: 1rem 2rem;\\n  margin: 1rem 0;\\n  font-size: 3rem;\\n  border-radius: 1rem;\\n  cursor: pointer;\\n  text-align: center;\\n  position: relative;\\n  z-index: 11;\\n  width: 100%;\\n  pointer-events: all;\\n}\\n.see-more-button:focus-visible {\\n  outline: 3px solid white;\\n}\\n\\n:global(.popoverMobile p) {\\n  font-size: 3em;\\n  margin: 1rem 0 0 0;\\n}\\n\\n:global(.popoverMobile .caption) {\\n  font-size: 3em;\\n  margin: 1rem 0 0 0;\\n}</style>\\n"],"names":[],"mappings":"AAoEmB,uBAAS,CAC1B,QAAQ,CAAE,KAAK,CACf,GAAG,CAAE,CAAC,CACN,IAAI,CAAE,CAAC,CACP,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,UAAU,CAAE,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,CAC9B,OAAO,CAAE,CACX,CAEA,uBAAS,CACP,QAAQ,CAAE,KAAK,CACf,GAAG,CAAE,GAAG,CACR,IAAI,CAAE,GAAG,CACT,SAAS,CAAE,UAAU,IAAI,CAAC,CAAC,IAAI,CAAC,CAChC,gBAAgB,CAAE,KAAK,CACvB,KAAK,CAAE,OAAO,CACd,OAAO,CAAE,IAAI,CACb,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,SAAS,CAAE,KAAK,CAChB,UAAU,CAAE,IAAI,CAChB,UAAU,CAAE,IAAI,CAChB,OAAO,CAAE,EAAE,CACX,aAAa,CAAE,IAAI,CACnB,WAAW,CAAE,GAAG,CAChB,UAAU,CAAE,CAAC,CAAC,GAAG,CAAC,IAAI,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CAC1C,CACA,QAAQ,mBAAK,CACX,UAAU,CAAE,IAAI,CAAC,IAAI,CAAC,CAAC,CAAC,OAC1B,CACA,QAAQ,sBAAQ,CACd,UAAU,CAAE,IAAI,CAAC,IAAI,CAAC,CAAC,CAAC,OAC1B,CACA,QAAQ,qBAAO,CACb,UAAU,CAAE,IAAI,CAAC,IAAI,CAAC,CAAC,CAAC,OAC1B,CACA,QAAQ,oBAAM,CACZ,UAAU,CAAE,IAAI,CAAC,IAAI,CAAC,CAAC,CAAC,OAC1B,CAEA,+BAAiB,CACf,aAAa,CAAE,MACjB,CAEA,+BAAiB,CACf,UAAU,CAAE,OAAO,CACnB,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,OAAO,CAAE,IAAI,CAAC,IAAI,CAClB,MAAM,CAAE,IAAI,CAAC,CAAC,CACd,SAAS,CAAE,IAAI,CACf,aAAa,CAAE,IAAI,CACnB,MAAM,CAAE,OAAO,CACf,UAAU,CAAE,MAAM,CAClB,QAAQ,CAAE,QAAQ,CAClB,OAAO,CAAE,EAAE,CACX,KAAK,CAAE,IAAI,CACX,cAAc,CAAE,GAClB,CACA,+BAAgB,cAAe,CAC7B,OAAO,CAAE,GAAG,CAAC,KAAK,CAAC,KACrB,CAEQ,gBAAkB,CACxB,SAAS,CAAE,GAAG,CACd,MAAM,CAAE,IAAI,CAAC,CAAC,CAAC,CAAC,CAAC,CACnB,CAEQ,uBAAyB,CAC/B,SAAS,CAAE,GAAG,CACd,MAAM,CAAE,IAAI,CAAC,CAAC,CAAC,CAAC,CAAC,CACnB"}`
};
const PopoverMobile = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_popoverVisible;
  let $$unsubscribe_isKeyboardUser;
  $$unsubscribe_popoverVisible = subscribe(popoverVisible, (value) => value);
  $$unsubscribe_isKeyboardUser = subscribe(isKeyboardUser, (value) => value);
  let { content = "" } = $$props;
  let { colorClass = "" } = $$props;
  let { href = null } = $$props;
  let { linkName = "" } = $$props;
  createEventDispatcher();
  let buttonRef;
  if ($$props.content === void 0 && $$bindings.content && content !== void 0) $$bindings.content(content);
  if ($$props.colorClass === void 0 && $$bindings.colorClass && colorClass !== void 0) $$bindings.colorClass(colorClass);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0) $$bindings.href(href);
  if ($$props.linkName === void 0 && $$bindings.linkName && linkName !== void 0) $$bindings.linkName(linkName);
  $$result.css.add(css$2);
  $$unsubscribe_popoverVisible();
  $$unsubscribe_isKeyboardUser();
  return `<div><div class="overlay svelte-1pztphg" aria-hidden="true"></div>  <div class="${"popover popoverMobile " + escape(colorClass, true) + " svelte-1pztphg"}" role="dialog"><div class="popover-content svelte-1pztphg"><!-- HTML_TAG_START -->${content}<!-- HTML_TAG_END --></div> ${href && linkName ? `<button class="see-more-button svelte-1pztphg" tabindex="0"${add_attribute("this", buttonRef, 0)}>${escape(linkName)}</button>` : ``}</div> </div>`;
});
const css$1 = {
  code: '@keyframes svelte-huc68a-move{from{transform:translate(0, 85%)}to{transform:translate(-1000px, 85%)}}span.hover.svelte-huc68a.svelte-huc68a{cursor:pointer}@media screen and (min-width: 700px){span.hover.svelte-huc68a.svelte-huc68a{cursor:crosshair}}.hover.svelte-huc68a.svelte-huc68a{color:#ea6180;display:inline-block;vertical-align:bottom;position:relative;text-decoration:none;-webkit-text-decoration-skip:objects;font-weight:700}.hover.svelte-huc68a.svelte-huc68a:focus{outline:2px solid #4db7d0;outline-offset:4px}.hover.svelte-huc68a .inner.svelte-huc68a{clip-path:inset(0 0 -20% 0);pointer-events:none}.hover.svelte-huc68a .inner.svelte-huc68a:after{content:"";position:absolute;width:2000px;height:100%;bottom:0;left:0;transform:translate(0, 85%);background-image:url("~/assets/wavy--red.svg");background-repeat:repeat-x;background-size:3.5rem;animation:svelte-huc68a-move 8s linear infinite paused;will-change:transform;pointer-events:none}.hover.svelte-huc68a:hover .inner.svelte-huc68a:after{animation-play-state:running}.hover.red.svelte-huc68a.svelte-huc68a{color:#ea6180}.hover.red.svelte-huc68a .inner.svelte-huc68a:after{background-image:url("~/assets/wavy--red.svg")}.hover.yellow.svelte-huc68a.svelte-huc68a{color:#f8d68f}.hover.yellow.svelte-huc68a .inner.svelte-huc68a:after{background-image:url("~/assets/wavy--yellow.svg")}.hover.green.svelte-huc68a.svelte-huc68a{color:#6dc999}.hover.green.svelte-huc68a .inner.svelte-huc68a:after{background-image:url("~/assets/wavy--green.svg")}.hover.blue.svelte-huc68a.svelte-huc68a{color:#4db7d0}.hover.blue.svelte-huc68a .inner.svelte-huc68a:after{background-image:url("~/assets/wavy--blue.svg")}',
  map: '{"version":3,"file":"HoverLink.svelte","sources":["HoverLink.svelte"],"sourcesContent":["<script>\\n  import { createEventDispatcher } from \\"svelte\\";\\n  import { isMobile, isKeyboardUser } from \\"~/lib/stores.js\\";\\n\\n  // Props\\n  export let href = \\"\\";\\n  export let target = \\"_self\\";\\n  export let colorClass = \\"\\";\\n  export let dataPopoverKey = \\"\\";\\n  export let linkName = \\"\\";\\n  export let tag = \\"span\\";\\n\\n  const dispatch = createEventDispatcher();\\n\\n  function handleClick(event) {\\n    if ($isMobile || $isKeyboardUser) {\\n      event.preventDefault();\\n    }\\n    dispatch(\\"hover\\", { event, key: dataPopoverKey, href, linkName });\\n  }\\n\\n  function handleKeyDown(event) {\\n    if (event.key === \\"Enter\\") {\\n      handleClick(event);\\n    }\\n  }\\n\\n  function debounce(func, delay) {\\n    let timer;\\n    return function (...args) {\\n      clearTimeout(timer);\\n      timer = setTimeout(() => func.apply(this, args), delay);\\n    };\\n  }\\n\\n  const handleMouse = debounce((event) => {\\n    if (!$isKeyboardUser && (event.type === \\"mouseenter\\" || event.type === \\"mousemove\\")) {\\n      dispatch(\\"hover\\", { event, key: dataPopoverKey, href, linkName });\\n    } else if (!$isKeyboardUser && event.type === \\"mouseleave\\") {\\n      dispatch(\\"hover\\", { event, key: dataPopoverKey, close: true });\\n    }\\n  }, 10);\\n<\/script>\\n\\n<svelte:element\\n  this={tag === \\"a\\" ? \\"a\\" : \\"span\\"}\\n  class=\\"hover {colorClass}\\"\\n  href={tag === \\"a\\" ? href : undefined}\\n  target={tag === \\"a\\" ? target : undefined}\\n  data-popover-key={dataPopoverKey}\\n  tabindex=\\"0\\"\\n  on:click={handleClick}\\n  on:keydown={handleKeyDown}\\n  on:focus={handleMouse}\\n  on:blur={handleMouse}\\n  on:mouseenter={handleMouse}\\n  on:mouseleave={handleMouse}\\n  on:mousemove={handleMouse}\\n  role={tag === \\"a\\" ? undefined : \\"button\\"}>\\n  <span class=\\"inner\\">\\n    <slot />\\n  </span>\\n</svelte:element>\\n\\n<style lang=\\"scss\\">@keyframes move {\\n  from {\\n    transform: translate(0, 85%);\\n  }\\n  to {\\n    transform: translate(-1000px, 85%);\\n  }\\n}\\nspan.hover {\\n  cursor: pointer;\\n}\\n@media screen and (min-width: 700px) {\\n  span.hover {\\n    cursor: crosshair;\\n  }\\n}\\n\\n.hover {\\n  color: #ea6180;\\n  display: inline-block;\\n  vertical-align: bottom;\\n  position: relative;\\n  text-decoration: none;\\n  -webkit-text-decoration-skip: objects;\\n  font-weight: 700;\\n}\\n.hover:focus {\\n  outline: 2px solid #4db7d0;\\n  outline-offset: 4px;\\n}\\n.hover .inner {\\n  clip-path: inset(0 0 -20% 0);\\n  pointer-events: none;\\n}\\n.hover .inner:after {\\n  content: \\"\\";\\n  position: absolute;\\n  width: 2000px;\\n  height: 100%;\\n  bottom: 0;\\n  left: 0;\\n  transform: translate(0, 85%);\\n  background-image: url(\\"~/assets/wavy--red.svg\\");\\n  background-repeat: repeat-x;\\n  background-size: 3.5rem;\\n  animation: move 8s linear infinite paused;\\n  will-change: transform;\\n  pointer-events: none;\\n}\\n.hover:hover .inner:after {\\n  animation-play-state: running;\\n}\\n\\n.hover.red {\\n  color: #ea6180;\\n}\\n.hover.red .inner:after {\\n  background-image: url(\\"~/assets/wavy--red.svg\\");\\n}\\n\\n.hover.yellow {\\n  color: #f8d68f;\\n}\\n.hover.yellow .inner:after {\\n  background-image: url(\\"~/assets/wavy--yellow.svg\\");\\n}\\n\\n.hover.green {\\n  color: #6dc999;\\n}\\n.hover.green .inner:after {\\n  background-image: url(\\"~/assets/wavy--green.svg\\");\\n}\\n\\n.hover.blue {\\n  color: #4db7d0;\\n}\\n.hover.blue .inner:after {\\n  background-image: url(\\"~/assets/wavy--blue.svg\\");\\n}</style>\\n"],"names":[],"mappings":"AAgEmB,WAAW,kBAAK,CACjC,IAAK,CACH,SAAS,CAAE,UAAU,CAAC,CAAC,CAAC,GAAG,CAC7B,CACA,EAAG,CACD,SAAS,CAAE,UAAU,OAAO,CAAC,CAAC,GAAG,CACnC,CACF,CACA,IAAI,kCAAO,CACT,MAAM,CAAE,OACV,CACA,OAAO,MAAM,CAAC,GAAG,CAAC,YAAY,KAAK,CAAE,CACnC,IAAI,kCAAO,CACT,MAAM,CAAE,SACV,CACF,CAEA,kCAAO,CACL,KAAK,CAAE,OAAO,CACd,OAAO,CAAE,YAAY,CACrB,cAAc,CAAE,MAAM,CACtB,QAAQ,CAAE,QAAQ,CAClB,eAAe,CAAE,IAAI,CACrB,4BAA4B,CAAE,OAAO,CACrC,WAAW,CAAE,GACf,CACA,kCAAM,MAAO,CACX,OAAO,CAAE,GAAG,CAAC,KAAK,CAAC,OAAO,CAC1B,cAAc,CAAE,GAClB,CACA,oBAAM,CAAC,oBAAO,CACZ,SAAS,CAAE,MAAM,CAAC,CAAC,CAAC,CAAC,IAAI,CAAC,CAAC,CAAC,CAC5B,cAAc,CAAE,IAClB,CACA,oBAAM,CAAC,oBAAM,MAAO,CAClB,OAAO,CAAE,EAAE,CACX,QAAQ,CAAE,QAAQ,CAClB,KAAK,CAAE,MAAM,CACb,MAAM,CAAE,IAAI,CACZ,MAAM,CAAE,CAAC,CACT,IAAI,CAAE,CAAC,CACP,SAAS,CAAE,UAAU,CAAC,CAAC,CAAC,GAAG,CAAC,CAC5B,gBAAgB,CAAE,6BAA6B,CAC/C,iBAAiB,CAAE,QAAQ,CAC3B,eAAe,CAAE,MAAM,CACvB,SAAS,CAAE,kBAAI,CAAC,EAAE,CAAC,MAAM,CAAC,QAAQ,CAAC,MAAM,CACzC,WAAW,CAAE,SAAS,CACtB,cAAc,CAAE,IAClB,CACA,oBAAM,MAAM,CAAC,oBAAM,MAAO,CACxB,oBAAoB,CAAE,OACxB,CAEA,MAAM,gCAAK,CACT,KAAK,CAAE,OACT,CACA,MAAM,kBAAI,CAAC,oBAAM,MAAO,CACtB,gBAAgB,CAAE,6BACpB,CAEA,MAAM,mCAAQ,CACZ,KAAK,CAAE,OACT,CACA,MAAM,qBAAO,CAAC,oBAAM,MAAO,CACzB,gBAAgB,CAAE,gCACpB,CAEA,MAAM,kCAAO,CACX,KAAK,CAAE,OACT,CACA,MAAM,oBAAM,CAAC,oBAAM,MAAO,CACxB,gBAAgB,CAAE,+BACpB,CAEA,MAAM,iCAAM,CACV,KAAK,CAAE,OACT,CACA,MAAM,mBAAK,CAAC,oBAAM,MAAO,CACvB,gBAAgB,CAAE,8BACpB"}'
};
const HoverLink = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_isKeyboardUser;
  let $$unsubscribe_isMobile;
  $$unsubscribe_isKeyboardUser = subscribe(isKeyboardUser, (value) => value);
  $$unsubscribe_isMobile = subscribe(isMobile, (value) => value);
  let { href = "" } = $$props;
  let { target = "_self" } = $$props;
  let { colorClass = "" } = $$props;
  let { dataPopoverKey = "" } = $$props;
  let { linkName = "" } = $$props;
  let { tag = "span" } = $$props;
  createEventDispatcher();
  if ($$props.href === void 0 && $$bindings.href && href !== void 0) $$bindings.href(href);
  if ($$props.target === void 0 && $$bindings.target && target !== void 0) $$bindings.target(target);
  if ($$props.colorClass === void 0 && $$bindings.colorClass && colorClass !== void 0) $$bindings.colorClass(colorClass);
  if ($$props.dataPopoverKey === void 0 && $$bindings.dataPopoverKey && dataPopoverKey !== void 0) $$bindings.dataPopoverKey(dataPopoverKey);
  if ($$props.linkName === void 0 && $$bindings.linkName && linkName !== void 0) $$bindings.linkName(linkName);
  if ($$props.tag === void 0 && $$bindings.tag && tag !== void 0) $$bindings.tag(tag);
  $$result.css.add(css$1);
  $$unsubscribe_isKeyboardUser();
  $$unsubscribe_isMobile();
  return `${((tag$1) => {
    return tag$1 ? `<${tag === "a" ? "a" : "span"} class="${"hover " + escape(colorClass, true) + " svelte-huc68a"}"${add_attribute("href", tag === "a" ? href : void 0, 0)}${add_attribute("target", tag === "a" ? target : void 0, 0)}${add_attribute("data-popover-key", dataPopoverKey, 0)} tabindex="0"${add_attribute("role", tag === "a" ? void 0 : "button", 0)}>${is_void(tag$1) ? "" : `<span class="inner svelte-huc68a">${slots.default ? slots.default({}) : ``}</span> `}${is_void(tag$1) ? "" : `</${tag$1}>`}` : "";
  })(tag === "a" ? "a" : "span")}`;
});
const css = {
  code: "#fadeWrap.svelte-3vo172{opacity:0;transition:opacity 5s}#fadeWrap.active.svelte-3vo172{opacity:1}#bgText.svelte-3vo172{font-size:3.3rem;width:100vw;height:100%;position:absolute;background-color:#000;color:#f4f0e8;padding:9rem 2rem;z-index:1;background-size:cover;top:0;right:0;bottom:0;left:0;transition:opacity 0.5s, background-color 0.5s, color 0.5s;cursor:default;user-select:none;-webkit-user-select:none;-webkit-touch-callout:none}@media screen and (min-width: 600px){#bgText.svelte-3vo172{column-count:2;padding:3.5rem}}p.svelte-3vo172{margin-top:0;margin-bottom:1.25rem}@media screen and (max-width: 599px){p.svelte-3vo172{line-height:1.5}}@media screen and (min-width: 700px){p.svelte-3vo172{margin-bottom:1.5rem}}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script>\\n  import { onMount, onDestroy } from \\"svelte\\";\\n  import Fingers from \\"~/components/Fingers.svelte\\";\\n  import Popover from \\"~/components/Popover.svelte\\";\\n  import PopoverMobile from \\"~/components/PopoverMobile.svelte\\";\\n  import HoverLink from \\"~/components/HoverLink.svelte\\";\\n  import { isMobile, isKeyboardUser, popoverVisible } from \\"~/lib/stores.js\\";\\n\\n  // States\\n  let ready = true;\\n\\n  let base64 = \\"bWlrZXlAY2FzYWxhaW5hLmNvbQ==\\";\\n  let decodedEmail = atob(base64);\\n\\n  // Popover states\\n  let popoverContent = \\"\\";\\n  let mouseX = 0;\\n  let mouseY = 0;\\n  let popoverColorClass = \\"\\";\\n  let popoverLink = \\"\\";\\n  let popoverLinkName = \\"\\";\\n  let focusTrigger = null;\\n\\n  // Content mapping for hover targets\\n  const hoverContent = {\\n    pointed: \\"<p>This is a play on all the <span class='no-wrap'>👉 pointing fingers</span>, which is hopefully obvious, but I’m explaining it here to introduce that <span class='desktopOnly'>hovering on</span><span class='mobileOnly'>tapping</span> stuff shows other stuff.</p>\\",\\n    mikey: \\"<img src='img/mikey.jpg' /><p class='caption'>Me, pretending to be a model</p>\\",\\n    creative: \\"<p>Was never really sure how to feel about using “creative” as a noun, but I guess it’s become so widespread, if you can’t beat em, join em.</p>\\",\\n    amsterdam: \\"<img src='img/mdam.jpg' /><p class='caption'>Actually, I live in Monnickendam, a small fisherman’s village 10 minutes north of Amsterdam, but saying “living and working in Amsterdam” sounds better so I’m sticking with it.</p>\\",\\n    wet: \\"<img src='img/wet.jpg' /><p class='caption'>This must look familiar, right? World's simplest way to send files. I led the team that built all the big, beautiful, interactive, creative backgrounds.</p>\\",\\n    craft: \\"<img src='img/craft.jpg' /><p class='caption'>Apple Award-winning collaborative document app.</p>\\",\\n    lr: \\"<img src='img/lr.jpg' /><p class='caption'>loop/recur was a Bay Area-based app dev and design shop back in the early days of apps. We built stuff for Gamestop, Disney, Planned Parenthood, and lots more.</p>\\",\\n    ptr: \\"<img src='img/ptr.jpg' /><p class='caption'>“Pull to Refresh” was a tech/comedy podcast back in 2012, before everybody and their mom had one.</p>\\",\\n    letsheal: \\"<img src='img/letsheal.jpg' /><p class='caption'>LetsHeal is a non-profit initiative by adman turned pro-social advocate Mark Woerde.</p>\\",\\n    ns: \\"<img src='img/ns.jpg' /><p class='caption'>You can click to see my favorite video we did, but we've also got 4 full length LPs to check out where ever streaming is streamed.</p>\\",\\n    tfi: \\"<img src='img/tfi.jpg' /><p class='caption'>200 year old insitution with his giant marble Ben Franklin greeting you on the way in. I got to perform on stage, blowing up stuff and high fiving kids.</p>\\",\\n    meevee: \\"<img src='img/meevee.jpg' /><p class='caption'>Combining my shared love of tech, music, and education to bring something new to life.</p>\\",\\n    more: \\"<p>Fine, go ahead and click to see a little intro video.</p>\\",\\n    point: \\"<p>This is pretty much the exact same “point” pun I made at the beginning. Sorry.</p>\\",\\n    email: \\"<p>I legit love getting email. Seriously, send me something, don't be shy!</p>\\",\\n  };\\n\\n  function handlePopoverEvent(event) {\\n    const { key, event: mouseEvent, href, linkName } = event.detail;\\n    focusTrigger = mouseEvent.target;\\n\\n    // Set content and styling for the popover\\n    popoverContent = hoverContent[key] || \\"<p>No content available.</p>\\";\\n    popoverColorClass = Array.from(mouseEvent.target.classList).find((cls) => cls === \\"red\\" || cls === \\"blue\\" || cls === \\"green\\" || cls === \\"yellow\\") || \\"\\";\\n    popoverLink = href;\\n    popoverLinkName = linkName;\\n\\n    // Handling different types of events to show/hide the popover\\n    if (mouseEvent.type === \\"mouseenter\\" || mouseEvent.type === \\"mousemove\\" || (mouseEvent.type === \\"click\\" && ($isMobile || $isKeyboardUser))) {\\n      // Show the popover for mouse hover or click\\n      $popoverVisible = true;\\n      mouseX = mouseEvent.pageX + 15 || 0;\\n      mouseY = mouseEvent.pageY + 15 || 0;\\n    } else if (mouseEvent.type === \\"mouseleave\\") {\\n      // Hide the popover when the mouse leaves\\n      $popoverVisible = false;\\n    }\\n  }\\n\\n  function closePopover() {\\n    popoverLink = \\"\\";\\n    popoverLinkName = \\"\\";\\n    $popoverVisible = false;\\n\\n    if (focusTrigger) {\\n      focusTrigger.focus();\\n    }\\n  }\\n\\n  onMount(() => {\\n    if (typeof window !== \\"undefined\\") {\\n      const handleEscape = (event) => {\\n        if (event.key === \\"Escape\\") {\\n          closePopover();\\n        }\\n      };\\n      window.addEventListener(\\"keydown\\", handleEscape);\\n\\n      return () => {\\n        window.removeEventListener(\\"keydown\\", handleEscape);\\n      };\\n    }\\n  });\\n<\/script>\\n\\n<div id=\\"fadeWrap\\" class={ready ? \\"active\\" : \\"\\"}>\\n  <Fingers>\\n    <div id=\\"bgText\\">\\n      <div>\\n        <p>\\n          I’m not sure who\\n          <HoverLink tag=\\"span\\" colorClass=\\"red\\" dataPopoverKey=\\"pointed\\" on:hover={handlePopoverEvent}>pointed</HoverLink>\\n          you here, but I’m glad you found the way.\\n        </p>\\n        <p>\\n          Hi, I’m\\n          <HoverLink tag=\\"span\\" colorClass=\\"blue\\" dataPopoverKey=\\"mikey\\" on:hover={handlePopoverEvent}>Mikey</HoverLink>, a multi-disciplinary\\n          <HoverLink tag=\\"span\\" colorClass=\\"green\\" dataPopoverKey=\\"creative\\" on:hover={handlePopoverEvent}>creative</HoverLink>, living and working in\\n          <HoverLink tag=\\"span\\" colorClass=\\"yellow\\" dataPopoverKey=\\"amsterdam\\" on:hover={handlePopoverEvent}>Amsterdam</HoverLink>. I’ve led creative teams as a director at\\n          <HoverLink tag=\\"a\\" href=\\"https://wetransfer.com\\" linkName=\\"Send some files w/ WeTransfer\\" target=\\"_blank\\" colorClass=\\"red\\" dataPopoverKey=\\"wet\\" on:hover={handlePopoverEvent}>WeTransfer</HoverLink> and\\n          <HoverLink tag=\\"a\\" href=\\"https://www.craft.do\\" linkName=\\"Check out Craft\\" target=\\"_blank\\" colorClass=\\"blue\\" dataPopoverKey=\\"craft\\" on:hover={handlePopoverEvent}>Craft</HoverLink>, designed and coded apps with\\n          <HoverLink tag=\\"a\\" href=\\"https://looprecur.com\\" linkName=\\"Check out loop/recur\\" target=\\"_blank\\" colorClass=\\"green\\" dataPopoverKey=\\"lr\\" on:hover={handlePopoverEvent}>loop/recur</HoverLink>, built countless websites, hosted a\\n          <HoverLink tag=\\"span\\" colorClass=\\"yellow\\" dataPopoverKey=\\"ptr\\" on:hover={handlePopoverEvent}>podcast</HoverLink>, edited books for\\n          <HoverLink tag=\\"a\\" href=\\"https://letsheal.org\\" linkName=\\"Check out LetsHeal.org\\" target=\\"_blank\\" colorClass=\\"red\\" dataPopoverKey=\\"letsheal\\" on:hover={handlePopoverEvent}>LetsHeal</HoverLink>, wrote, performed, and recorded with my band\\n          <HoverLink tag=\\"a\\" href=\\"https://www.youtube.com/watch?v=eUuXFB4T23o\\" linkName=\\"Watch a Naive Set video\\" target=\\"_blank\\" colorClass=\\"blue\\" dataPopoverKey=\\"ns\\" on:hover={handlePopoverEvent}>Naive Set</HoverLink>, and educated thousands with the\\n          <span style=\\"white-space: nowrap\\"> <HoverLink tag=\\"a\\" href=\\"https://tfi.edu\\" linkName=\\"Checkout tfi.edu\\" target=\\"_blank\\" colorClass=\\"green\\" dataPopoverKey=\\"tfi\\" on:hover={handlePopoverEvent}>Franklin Institute</HoverLink>.</span>\\n        </p>\\n        <p style=\\"break-before: column;\\">\\n          I’m currently working on something called\\n          <HoverLink tag=\\"a\\" href=\\"https://meev.ee\\" linkName=\\"Check out Meevee\\" target=\\"_blank\\" colorClass=\\"yellow\\" dataPopoverKey=\\"meevee\\" on:hover={handlePopoverEvent}>Meevee</HoverLink>, which I think will help parents and kids use screen time for good. But\\n          <HoverLink tag=\\"a\\" href=\\"https://www.veed.io/view/7e44bab8-c991-489b-b0ff-06faf524e51e\\" linkName=\\"Watch the video\\" target=\\"_blank\\" colorClass=\\"red\\" dataPopoverKey=\\"more\\" on:hover={handlePopoverEvent}>more</HoverLink> on that coming soon!\\n        </p>\\n        <p>\\n          Not sure what else to say at this\\n          <HoverLink tag=\\"span\\" colorClass=\\"green\\" dataPopoverKey=\\"point\\" on:hover={handlePopoverEvent}>point</HoverLink>. But yeah, thanks for reading this far! Feel free to reach out and say hello. My email address is\\n          <span class=\\"no-wrap\\">\\n            <HoverLink tag=\\"a\\" href=\\"mailto:{decodedEmail}\\" linkName=\\"Email me!\\" colorClass=\\"blue\\" dataPopoverKey=\\"email\\" on:hover={handlePopoverEvent}>\\n              {decodedEmail}\\n            </HoverLink>\\n          </span>.\\n        </p>\\n      </div>\\n    </div>\\n    {#if $popoverVisible && ($isMobile || $isKeyboardUser)}\\n      <!-- Only show PopoverMobile if mobile or keyboard interaction -->\\n      <PopoverMobile content={popoverContent} colorClass={popoverColorClass} href={popoverLink} linkName={popoverLinkName} on:close={closePopover} />\\n    {/if}\\n\\n    {#if $popoverVisible && !$isMobile && !$isKeyboardUser}\\n      <!-- Show regular Popover only for mouse interaction on non-mobile -->\\n      <Popover content={popoverContent} x={mouseX} y={mouseY} colorClass={popoverColorClass} on:close={closePopover} />\\n    {/if}\\n  </Fingers>\\n</div>\\n\\n<style lang=\\"scss\\">#fadeWrap {\\n  opacity: 0;\\n  transition: opacity 5s;\\n}\\n#fadeWrap.active {\\n  opacity: 1;\\n}\\n\\n#bgText {\\n  font-size: 3.3rem;\\n  width: 100vw;\\n  height: 100%;\\n  position: absolute;\\n  background-color: #000;\\n  color: #f4f0e8;\\n  padding: 9rem 2rem;\\n  z-index: 1;\\n  background-size: cover;\\n  top: 0;\\n  right: 0;\\n  bottom: 0;\\n  left: 0;\\n  transition: opacity 0.5s, background-color 0.5s, color 0.5s;\\n  cursor: default;\\n  user-select: none;\\n  -webkit-user-select: none;\\n  -webkit-touch-callout: none;\\n}\\n@media screen and (min-width: 600px) {\\n  #bgText {\\n    column-count: 2;\\n    padding: 3.5rem;\\n  }\\n}\\n\\np {\\n  margin-top: 0;\\n  margin-bottom: 1.25rem;\\n  /* Max-width subtracts 1px from the breakpoint */\\n}\\n@media screen and (max-width: 599px) {\\n  p {\\n    line-height: 1.5;\\n  }\\n}\\n@media screen and (min-width: 700px) {\\n  p {\\n    margin-bottom: 1.5rem;\\n  }\\n}</style>\\n"],"names":[],"mappings":"AA4ImB,uBAAU,CAC3B,OAAO,CAAE,CAAC,CACV,UAAU,CAAE,OAAO,CAAC,EACtB,CACA,SAAS,qBAAQ,CACf,OAAO,CAAE,CACX,CAEA,qBAAQ,CACN,SAAS,CAAE,MAAM,CACjB,KAAK,CAAE,KAAK,CACZ,MAAM,CAAE,IAAI,CACZ,QAAQ,CAAE,QAAQ,CAClB,gBAAgB,CAAE,IAAI,CACtB,KAAK,CAAE,OAAO,CACd,OAAO,CAAE,IAAI,CAAC,IAAI,CAClB,OAAO,CAAE,CAAC,CACV,eAAe,CAAE,KAAK,CACtB,GAAG,CAAE,CAAC,CACN,KAAK,CAAE,CAAC,CACR,MAAM,CAAE,CAAC,CACT,IAAI,CAAE,CAAC,CACP,UAAU,CAAE,OAAO,CAAC,IAAI,CAAC,CAAC,gBAAgB,CAAC,IAAI,CAAC,CAAC,KAAK,CAAC,IAAI,CAC3D,MAAM,CAAE,OAAO,CACf,WAAW,CAAE,IAAI,CACjB,mBAAmB,CAAE,IAAI,CACzB,qBAAqB,CAAE,IACzB,CACA,OAAO,MAAM,CAAC,GAAG,CAAC,YAAY,KAAK,CAAE,CACnC,qBAAQ,CACN,YAAY,CAAE,CAAC,CACf,OAAO,CAAE,MACX,CACF,CAEA,eAAE,CACA,UAAU,CAAE,CAAC,CACb,aAAa,CAAE,OAEjB,CACA,OAAO,MAAM,CAAC,GAAG,CAAC,YAAY,KAAK,CAAE,CACnC,eAAE,CACA,WAAW,CAAE,GACf,CACF,CACA,OAAO,MAAM,CAAC,GAAG,CAAC,YAAY,KAAK,CAAE,CACnC,eAAE,CACA,aAAa,CAAE,MACjB,CACF"}`
};
let base64 = "bWlrZXlAY2FzYWxhaW5hLmNvbQ==";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $popoverVisible, $$unsubscribe_popoverVisible;
  let $isKeyboardUser, $$unsubscribe_isKeyboardUser;
  let $isMobile, $$unsubscribe_isMobile;
  $$unsubscribe_popoverVisible = subscribe(popoverVisible, (value) => $popoverVisible = value);
  $$unsubscribe_isKeyboardUser = subscribe(isKeyboardUser, (value) => $isKeyboardUser = value);
  $$unsubscribe_isMobile = subscribe(isMobile, (value) => $isMobile = value);
  let decodedEmail = atob(base64);
  let popoverContent = "";
  let mouseX = 0;
  let mouseY = 0;
  let popoverColorClass = "";
  let popoverLink = "";
  let popoverLinkName = "";
  $$result.css.add(css);
  $$unsubscribe_popoverVisible();
  $$unsubscribe_isKeyboardUser();
  $$unsubscribe_isMobile();
  return `<div id="fadeWrap" class="${escape(null_to_empty("active"), true) + " svelte-3vo172"}">${validate_component(Fingers, "Fingers").$$render($$result, {}, {}, {
    default: () => {
      return `<div id="bgText" class="svelte-3vo172"><div><p class="svelte-3vo172">I’m not sure who
          ${validate_component(HoverLink, "HoverLink").$$render(
        $$result,
        {
          tag: "span",
          colorClass: "red",
          dataPopoverKey: "pointed"
        },
        {},
        {
          default: () => {
            return `pointed`;
          }
        }
      )}
          you here, but I’m glad you found the way.</p> <p class="svelte-3vo172">Hi, I’m
          ${validate_component(HoverLink, "HoverLink").$$render(
        $$result,
        {
          tag: "span",
          colorClass: "blue",
          dataPopoverKey: "mikey"
        },
        {},
        {
          default: () => {
            return `Mikey`;
          }
        }
      )}, a multi-disciplinary
          ${validate_component(HoverLink, "HoverLink").$$render(
        $$result,
        {
          tag: "span",
          colorClass: "green",
          dataPopoverKey: "creative"
        },
        {},
        {
          default: () => {
            return `creative`;
          }
        }
      )}, living and working in
          ${validate_component(HoverLink, "HoverLink").$$render(
        $$result,
        {
          tag: "span",
          colorClass: "yellow",
          dataPopoverKey: "amsterdam"
        },
        {},
        {
          default: () => {
            return `Amsterdam`;
          }
        }
      )}. I’ve led creative teams as a director at
          ${validate_component(HoverLink, "HoverLink").$$render(
        $$result,
        {
          tag: "a",
          href: "https://wetransfer.com",
          linkName: "Send some files w/ WeTransfer",
          target: "_blank",
          colorClass: "red",
          dataPopoverKey: "wet"
        },
        {},
        {
          default: () => {
            return `WeTransfer`;
          }
        }
      )} and
          ${validate_component(HoverLink, "HoverLink").$$render(
        $$result,
        {
          tag: "a",
          href: "https://www.craft.do",
          linkName: "Check out Craft",
          target: "_blank",
          colorClass: "blue",
          dataPopoverKey: "craft"
        },
        {},
        {
          default: () => {
            return `Craft`;
          }
        }
      )}, designed and coded apps with
          ${validate_component(HoverLink, "HoverLink").$$render(
        $$result,
        {
          tag: "a",
          href: "https://looprecur.com",
          linkName: "Check out loop/recur",
          target: "_blank",
          colorClass: "green",
          dataPopoverKey: "lr"
        },
        {},
        {
          default: () => {
            return `loop/recur`;
          }
        }
      )}, built countless websites, hosted a
          ${validate_component(HoverLink, "HoverLink").$$render(
        $$result,
        {
          tag: "span",
          colorClass: "yellow",
          dataPopoverKey: "ptr"
        },
        {},
        {
          default: () => {
            return `podcast`;
          }
        }
      )}, edited books for
          ${validate_component(HoverLink, "HoverLink").$$render(
        $$result,
        {
          tag: "a",
          href: "https://letsheal.org",
          linkName: "Check out LetsHeal.org",
          target: "_blank",
          colorClass: "red",
          dataPopoverKey: "letsheal"
        },
        {},
        {
          default: () => {
            return `LetsHeal`;
          }
        }
      )}, wrote, performed, and recorded with my band
          ${validate_component(HoverLink, "HoverLink").$$render(
        $$result,
        {
          tag: "a",
          href: "https://www.youtube.com/watch?v=eUuXFB4T23o",
          linkName: "Watch a Naive Set video",
          target: "_blank",
          colorClass: "blue",
          dataPopoverKey: "ns"
        },
        {},
        {
          default: () => {
            return `Naive Set`;
          }
        }
      )}, and educated thousands with the
          <span style="white-space: nowrap">${validate_component(HoverLink, "HoverLink").$$render(
        $$result,
        {
          tag: "a",
          href: "https://tfi.edu",
          linkName: "Checkout tfi.edu",
          target: "_blank",
          colorClass: "green",
          dataPopoverKey: "tfi"
        },
        {},
        {
          default: () => {
            return `Franklin Institute`;
          }
        }
      )}.</span></p> <p style="break-before: column;" class="svelte-3vo172">I’m currently working on something called
          ${validate_component(HoverLink, "HoverLink").$$render(
        $$result,
        {
          tag: "a",
          href: "https://meev.ee",
          linkName: "Check out Meevee",
          target: "_blank",
          colorClass: "yellow",
          dataPopoverKey: "meevee"
        },
        {},
        {
          default: () => {
            return `Meevee`;
          }
        }
      )}, which I think will help parents and kids use screen time for good. But
          ${validate_component(HoverLink, "HoverLink").$$render(
        $$result,
        {
          tag: "a",
          href: "https://www.veed.io/view/7e44bab8-c991-489b-b0ff-06faf524e51e",
          linkName: "Watch the video",
          target: "_blank",
          colorClass: "red",
          dataPopoverKey: "more"
        },
        {},
        {
          default: () => {
            return `more`;
          }
        }
      )} on that coming soon!</p> <p class="svelte-3vo172">Not sure what else to say at this
          ${validate_component(HoverLink, "HoverLink").$$render(
        $$result,
        {
          tag: "span",
          colorClass: "green",
          dataPopoverKey: "point"
        },
        {},
        {
          default: () => {
            return `point`;
          }
        }
      )}. But yeah, thanks for reading this far! Feel free to reach out and say hello. My email address is
          <span class="no-wrap">${validate_component(HoverLink, "HoverLink").$$render(
        $$result,
        {
          tag: "a",
          href: "mailto:" + decodedEmail,
          linkName: "Email me!",
          colorClass: "blue",
          dataPopoverKey: "email"
        },
        {},
        {
          default: () => {
            return `${escape(decodedEmail)}`;
          }
        }
      )} </span>.</p></div></div> ${$popoverVisible && ($isMobile || $isKeyboardUser) ? ` ${validate_component(PopoverMobile, "PopoverMobile").$$render(
        $$result,
        {
          content: popoverContent,
          colorClass: popoverColorClass,
          href: popoverLink,
          linkName: popoverLinkName
        },
        {},
        {}
      )}` : ``} ${$popoverVisible && !$isMobile && !$isKeyboardUser ? ` ${validate_component(Popover, "Popover").$$render(
        $$result,
        {
          content: popoverContent,
          x: mouseX,
          y: mouseY,
          colorClass: popoverColorClass
        },
        {},
        {}
      )}` : ``}`;
    }
  })} </div>`;
});
export {
  Page as default
};
