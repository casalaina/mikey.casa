import { c as create_ssr_component, d as add_attribute } from "../../../chunks/index.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: 'html,body,#wrapper{width:100vw;height:100vh;overflow:hidden;top:0;left:0;padding:0;margin:0}#bg{position:absolute;width:100%;height:100%;background-image:url("$lib/banana.jpg");background-size:cover;background-position:50% 50%}#pinboard{position:absolute;top:50%;left:50%;min-width:177.7777777778vh;width:100vw;height:56.25vw;min-height:100vh;transform:translate(-50%, -50%)}.eye{position:absolute;top:40%;left:48.3%;width:1.6%;height:3%;background-color:white;border-radius:50% 50%;box-shadow:1vw 0.6666666667vh 1vw rgba(0, 0, 0, 0.2)}#eye2{left:50%}.pupil{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);width:33%;height:33%;background-color:black;border-radius:50%}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let pupil;
  let pupil2;
  $$result.css.add(css);
  return `<div id="${"wrapper"}"><div id="${"bg"}"></div>
	<div id="${"pinboard"}"><div class="${"eye"}" id="${"eye1"}"><div class="${"pupil"}"${add_attribute("this", pupil, 0)}></div></div>
		<div class="${"eye"}" id="${"eye2"}"><div class="${"pupil"}"${add_attribute("this", pupil2, 0)}></div></div></div>
</div>`;
});
export {
  Page as default
};
