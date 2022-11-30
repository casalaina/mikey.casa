import { c as create_ssr_component, b as subscribe, e as escape, d as add_attribute, v as validate_component } from "../../chunks/index.js";
import { p as page } from "../../chunks/stores.js";
import { e as env } from "../../chunks/env-public.js";
const GoogleAnalytics = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let gId = env.PUBLIC_GOOGLE_ANALYTICS_ID;
  {
    {
      if (typeof gtag !== "undefined") {
        gtag("config", gId, {
          page_title: document.title,
          page_path: $page.url.pathname
        });
      }
    }
  }
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-6ows3v_START --><script async src="${"https://www.googletagmanager.com/gtag/js?id=" + escape(gId, true)}"><\/script><script${add_attribute("gid", gId, 0)}>window.dataLayer = window.dataLayer || [];

		function gtag() {
			dataLayer.push(arguments);
		}

		gtag('js', new Date());
		gtag('config', document.currentScript.getAttribute('gId'));
	<\/script><!-- HEAD_svelte-6ows3v_END -->`, ""}`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-1rq76f0_START --><meta charset="${"UTF-8"}"><meta name="${"viewport"}" content="${"width=device-width, initial-scale=1, user-scalable=no"}">${$$result.title = `<title>Mikey Casalaina</title>`, ""}${$$result.title = `<title>Mikey Casalaina (mikey.casa/laina)</title>`, ""}<meta name="${"title"}" content="${"Mikey Casalaina (mikey.casa/laina)"}"><meta name="${"description"}" content="${"Personal website of Mikey Casalaina, and an interactive version of the Cascading Pointing Hand Emoji Copypasta"}"><meta property="${"og:type"}" content="${"website"}"><meta property="${"og:url"}" content="${"https://mikey.casa/laina"}"><meta property="${"og:title"}" content="${"Mikey Casalaina (mikey.casa/laina)"}"><meta property="${"og:description"}" content="${"Personal website of Mikey Casalaina, and an interactive version of the Cascading Pointing Hand Emoji Copypasta"}"><meta property="${"og:image"}" content="${"https://mikey.casa/favicon/thumbnail.jpg"}"><meta property="${"twitter:card"}" content="${"summary_large_image"}"><meta property="${"twitter:url"}" content="${"https://mikey.casa/laina"}"><meta property="${"twitter:title"}" content="${"Mikey Casalaina (mikey.casa/laina)"}"><meta property="${"twitter:description"}" content="${"Personal website of Mikey Casalaina, and an interactive version of the Cascading Pointing Hand Emoji Copypasta"}"><meta property="${"twitter:image"}" content="${"https://mikey.casa/favicon/thumbnail.jpg"}"><link rel="${"apple-touch-icon"}" sizes="${"180x180"}" href="${"../../favicon/apple-touch-icon.png"}"><link rel="${"icon"}" type="${"image/png"}" sizes="${"32x32"}" href="${"../../favicon/favicon-32x32.png"}"><link rel="${"icon"}" type="${"image/png"}" sizes="${"16x16"}" href="${"../../favicon/favicon-16x16.png"}"><link rel="${"mask-icon"}" href="${"../../favicon/safari-pinned-tab.svg"}" color="${"#000000"}"><link rel="${"shortcut icon"}" href="${"../../favicon/favicon.ico"}"><meta name="${"msapplication-TileColor"}" content="${"#da532c"}"><meta name="${"theme-color"}" content="${"#ffffff"}"><!-- HEAD_svelte-1rq76f0_END -->`, ""}

${validate_component(GoogleAnalytics, "GoogleAnalytics").$$render($$result, {}, {}, {})}

${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};
