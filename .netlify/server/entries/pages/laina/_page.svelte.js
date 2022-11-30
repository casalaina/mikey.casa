import { c as create_ssr_component, e as escape, f as null_to_empty, d as add_attribute, v as validate_component } from "../../../chunks/index.js";
const Fingers_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "#outer.hideFingers.svelte-1rh9vxw #bgText{background-color:white;color:#444}#outer.hideFingers.svelte-1rh9vxw #light{opacity:0;box-shadow:0;box-shadow:inset 0 0 100px 100px rgba(248, 214, 143, 0.9), 0 0 200vw 200vw rgba(248, 214, 143, 0.9)}#outer.hideFingers.svelte-1rh9vxw #fingerWrap{opacity:0;transition:none}#outer.hideFingers.svelte-1rh9vxw a.green{color:#48bb7f}#outer.hideFingers.svelte-1rh9vxw a.yellow{color:#f2b32f}#outer.hideFingers.svelte-1rh9vxw a.blue{color:#4db7d0}.toggleFingers.svelte-1rh9vxw.svelte-1rh9vxw{position:fixed;font-size:1.33rem;top:0.25rem;left:0.25rem;height:4rem;width:4rem;display:flex;justify-content:center;align-items:center;z-index:9;border-radius:50%;box-shadow:2px 5px 30px rgba(255, 255, 255, 0.3);transition:transform 0.5s, box-shadow 0.5s}.toggleFingers.svelte-1rh9vxw button.svelte-1rh9vxw{width:100%;height:100%;border-radius:50%;border:none;stroke:none;background-color:#000}@media(min-width: 1040px){.toggleFingers.svelte-1rh9vxw button.svelte-1rh9vxw{font-size:2rem}}.toggleFingers.show.svelte-1rh9vxw.svelte-1rh9vxw{box-shadow:2px 5px 10px rgba(0, 0, 0, 0.3)}.toggleFingers.show.svelte-1rh9vxw button.svelte-1rh9vxw{transform:rotate(60deg);transition:transform 0.5s}.toggleFingers.show.svelte-1rh9vxw.svelte-1rh9vxw:hover{transform:translate(0px, 1px);box-shadow:2px 2px 10px rgba(0, 0, 0, 0.3)}.toggleFingers.hide.svelte-1rh9vxw.svelte-1rh9vxw:hover{transform:translate(0px, 1px);box-shadow:2px 2px 10px rgba(255, 255, 255, 0.3)}#inner.svelte-1rh9vxw.svelte-1rh9vxw{margin:0;width:100vw;height:100vh;top:0;left:0;height:calc(var(--vh, 1vh) * 100);position:fixed;background-color:#000000;font-size:2em;overflow:hidden;font-family:urbane, sans-serif;font-weight:500;font-style:normal;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-backface-visibility:hidden;backface-visibility:hidden}#light.svelte-1rh9vxw.svelte-1rh9vxw{position:absolute;z-index:2;pointer-events:none;background-color:transparent;box-shadow:inset 0 0 100px 100px rgba(0, 0, 0, 0.9), 0 0 200vw 200vw rgba(0, 0, 0, 0.9);width:500px;height:500px;opacity:1;transition:opacity 0.5s, box-shadow 0.5s;will-change:transform}#fingerWrap{position:absolute;z-index:4;cursor:pointer;font-size:32px;opacity:1;transition:opacity 0.5s}",
  map: null
};
const Fingers = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let fingerWrap;
  let light;
  $$result.css.add(css$1);
  return `
<div id="${"outer"}" class="${escape(null_to_empty(""), true) + " svelte-1rh9vxw"}"><div id="${"inner"}" class="${"svelte-1rh9vxw"}"><div class="${escape(null_to_empty("toggleFingers hide"), true) + " svelte-1rh9vxw"}"><button${add_attribute(
    "aria-label",
    "Hide the fingers, show the content",
    0
  )} class="${"svelte-1rh9vxw"}">${`\u{1F4A1}`}</button></div>
		<div id="${"light"}" class="${"svelte-1rh9vxw"}"${add_attribute("this", light, 0)}></div>
		${slots.default ? slots.default({}) : ``}

		<div id="${"fingerWrap"}" aria-label="${"An emoji based-interactive where finger pointing emojis follow the cursor"}"${add_attribute("this", fingerWrap, 0)}></div></div>
</div>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: '@import url("https://use.typekit.net/hsg3vzl.css");.svelte-eagf8g.svelte-eagf8g{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}html{overflow:hidden;position:fixed;font-size:1.05vh;background-color:black;width:100vw;height:100vh}@media(min-width: 600px){html{font-size:1.25vw}}@media(min-width: 825px){html{font-size:1.1vw}}@media(min-width: 1040px){html{font-size:0.85vw}}#fadeWrap.svelte-eagf8g.svelte-eagf8g{opacity:0;transition:opacity 5s}#fadeWrap.active.svelte-eagf8g.svelte-eagf8g{opacity:1}#bgText.svelte-eagf8g.svelte-eagf8g{width:100vw;height:100%;position:absolute;font-size:1.1em;background-color:#000;color:#888;padding:3rem 3.5rem;z-index:1;background-size:cover;top:0;right:0;bottom:0;left:0;transition:opacity 0.5s, background-color 0.5s, color 0.5s;cursor:default;user-select:none;-webkit-user-select:none;-webkit-touch-callout:none}@media(min-width: 600px){#bgText.svelte-eagf8g.svelte-eagf8g{column-count:2;padding:10%}}@media(min-width: 1040px){#bgText.svelte-eagf8g.svelte-eagf8g{column-count:3}}p{margin-top:0;margin-bottom:1.25rem}@media(max-width: 599px){p{line-height:1.5}}@media(min-width: 825px){p{margin-bottom:1.5rem}}a.svelte-eagf8g.svelte-eagf8g{color:#ea6180;background-repeat:repeat;background-position-x:0;background-position-y:0;background-size:auto auto;background-repeat:repeat-x;background-size:1.5rem 0.5rem;background-position:0.2rem 1.2rem;animation:svelte-eagf8g-move 30s linear infinite;-webkit-animation:svelte-eagf8g-move 15s linear infinite;animation-play-state:paused;text-decoration:none;background-color:transparent;-webkit-text-decoration-skip:objects;background-image:url("$lib/wavy--red.svg");transition:color 0.5s}a.svelte-eagf8g.svelte-eagf8g:hover{animation-play-state:running}a.red.svelte-eagf8g.svelte-eagf8g{color:#ea6180;background-image:url("$lib/wavy--red.svg")}a.yellow.svelte-eagf8g.svelte-eagf8g{color:#f8d68f;background-image:url("$lib/wavy--yellow.svg")}a.green.svelte-eagf8g.svelte-eagf8g{color:#6dc999;background-image:url("$lib/wavy--green.svg")}a.blue.svelte-eagf8g.svelte-eagf8g{color:#4db7d0;background-image:url("$lib/wavy--blue.svg")}.line{position:absolute;will-change:transform;pointer-events:none}.line span{position:absolute;z-index:0;opacity:0;user-select:none;cursor:pointer}.line.f0 span{opacity:0}.line.f0 span:nth-of-type(1){opacity:1}.line.f1 span{opacity:0}.line.f1 span:nth-of-type(2){opacity:1}.line.f2 span{opacity:0}.line.f2 span:nth-of-type(3){opacity:1}.line.f3 span{opacity:0}.line.f3 span:nth-of-type(4){opacity:1}.line.f4 span{opacity:0}.line.f4 span:nth-of-type(5){opacity:1}@keyframes svelte-eagf8g-move{from{background-position:2px 1.2em}to{background-position:500px 1.2em}}#mobileOverlay.svelte-eagf8g.svelte-eagf8g{position:fixed;top:0;right:0;bottom:0;left:0;z-index:5;background-color:rgba(0, 0, 0, 0.8)}#mobilePopUp.svelte-eagf8g.svelte-eagf8g{position:absolute;width:100%;height:100%;position:absolute;z-index:6;pointer-events:none}#mobilePopUp.svelte-eagf8g .inner.svelte-eagf8g{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);padding:1.5rem;background-color:white;border:0.2rem solid #ea6180;box-shadow:0 10px 20px rgba(0, 0, 0, 0.5);width:80%;height:auto;padding-bottom:2rem;pointer-events:none}#mobilePopUp.svelte-eagf8g .inner a.svelte-eagf8g{pointer-events:all}#mobilePopUp.svelte-eagf8g .emoji.svelte-eagf8g{font-size:10rem;width:100%;text-align:center;display:inline-block}#mobilePopUp.svelte-eagf8g .close.svelte-eagf8g{position:absolute;right:5px;top:5px;width:32px;height:32px;opacity:0.3;transform:scale(0.8)}#mobilePopUp.svelte-eagf8g .close.svelte-eagf8g:before,#mobilePopUp.svelte-eagf8g .close.svelte-eagf8g:after{position:absolute;left:15px;content:" ";height:33px;width:2px;background-color:#333}#mobilePopUp.svelte-eagf8g .close.svelte-eagf8g:before{transform:rotate(45deg)}#mobilePopUp.svelte-eagf8g .close.svelte-eagf8g:after{transform:rotate(-45deg)}',
  map: null
};
let base64 = "bWlrZXlAY2FzYWxhaW5hLmNvbQ==";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let bgText;
  let decodedEmail = atob(base64);
  $$result.css.add(css);
  return `
<div id="${"fadeWrap"}" class="${escape(null_to_empty(""), true) + " svelte-eagf8g"}">${validate_component(Fingers, "Fingers").$$render($$result, {}, {}, {
    default: () => {
      return `<div id="${"bgText"}" class="${"svelte-eagf8g"}"${add_attribute("this", bgText, 0)}><div class="${"svelte-eagf8g"}"><p class="${"svelte-eagf8g"}">I\u2019m not sure who pointed you here, but I\u2019m glad you found the way.</p>
				<p class="${"svelte-eagf8g"}">I\u2019m Mikey, a developer, designer, and musician living and working in Amsterdam.</p>
				<p class="${"svelte-eagf8g"}">I&#39;m currently the Creative Engineering Director at <a class="${"yellow svelte-eagf8g"}" target="${"_blank"}" rel="${"noopener noreferrer"}" href="${"https://wetransfer.com/"}">WeTransfer</a>, leading the team that builds interactives and animations. I\u2019ve worked on stuff like
					<a class="${"blue svelte-eagf8g"}" target="${"_blank"}" rel="${"noopener noreferrer"}" href="${"https://colorpush.wetransfer.com"}">this</a>,
					<a class="${"green svelte-eagf8g"}" target="${"_blank"}" rel="${"noopener noreferrer"}" href="${"https://wetransfer.com/wallpaper/11160943"}">this</a>,
					<a class="${"red svelte-eagf8g"}" target="${"_blank"}" rel="${"noopener noreferrer"}" href="${"https://wetransfer.com/wallpaper/11685998"}">this</a>, and
					<a class="${"yellow svelte-eagf8g"}" target="${"_blank"}" rel="${"noopener noreferrer"}" href="${"https://wetransfer.com/wallpaper/18127579"}">a</a>
					<a class="${"blue svelte-eagf8g"}" target="${"_blank"}" rel="${"noopener noreferrer"}" href="${"https://wetransfer.com/wallpaper/12725040"}">ton</a>
					<a class="${"green svelte-eagf8g"}" target="${"_blank"}" rel="${"noopener noreferrer"}" href="${"https://wetransfer.com/wallpaper/19374023"}">more</a>.
				</p>
				<p class="${"svelte-eagf8g"}">Previously, I helped found the dev shop <a class="${"red svelte-eagf8g"}" target="${"_blank"}" rel="${"noopener noreferrer"}" href="${"http://looprecur.com/"}">loop/recur</a>.
				</p>
				<p class="${"svelte-eagf8g"}">I make music with the band <a class="${"yellow svelte-eagf8g"}" target="${"_blank"}" rel="${"noopener noreferrer"}" href="${"http://naiveset.nl/"}">Naive Set</a>. Here\u2019s
					<a class="${"green svelte-eagf8g"}" target="${"_blank"}" rel="${"noopener noreferrer"}" href="${"https://www.youtube.com/watch?v=eUuXFB4T23o"}">a video</a> we did with a giant sweater on guitar. That\u2019s me singing, the bald one in the middle.
				</p>
				<p class="${"svelte-eagf8g"}">Not sure what else to say at this point. See what I did there? Point? But yeah, thanks for
					reading this far! Feel free to reach out and say hello. My email address is <a class="${"blue svelte-eagf8g"}" href="${"mailto:" + escape(decodedEmail, true)}">${escape(decodedEmail)}.</a></p></div></div>
		${``}`;
    }
  })}
</div>`;
});
export {
  Page as default
};
