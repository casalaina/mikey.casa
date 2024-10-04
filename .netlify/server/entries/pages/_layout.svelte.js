import { c as create_ssr_component, a as subscribe } from "../../chunks/ssr.js";
import { i as isIOS, a as isMobile } from "../../chunks/stores.js";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_isIOS;
  let $$unsubscribe_isMobile;
  $$unsubscribe_isIOS = subscribe(isIOS, (value) => value);
  $$unsubscribe_isMobile = subscribe(isMobile, (value) => value);
  $$unsubscribe_isIOS();
  $$unsubscribe_isMobile();
  return ` ${``}`;
});
export {
  Layout as default
};
