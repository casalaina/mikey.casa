import { r as redirect } from "../../chunks/index.js";
function load() {
  throw redirect(302, "/laina");
}
export {
  load
};
