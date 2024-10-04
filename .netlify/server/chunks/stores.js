import { w as writable } from "./index2.js";
const isMobile = writable(false);
const isIOS = writable(false);
const isKeyboardUser = writable(false);
const popoverVisible = writable(false);
const fingersVisible = writable(true);
function updateIsMobile() {
  if (typeof window !== "undefined") {
    const touchOnly = "ontouchstart" in window && !window.matchMedia("(hover: hover)").matches;
    const narrowWidth = window.innerWidth <= 768;
    isMobile.set(touchOnly || narrowWidth);
  }
}
function updateIsIOS() {
  if (typeof window !== "undefined") {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    isIOS.set(/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream);
  }
}
updateIsMobile();
updateIsIOS();
if (typeof window !== "undefined") {
  window.addEventListener("resize", () => {
    updateIsMobile();
  });
}
if (typeof window !== "undefined") {
  window.addEventListener("keydown", (event) => {
    if (event.key === "Tab") {
      isKeyboardUser.set(true);
    }
  });
}
export {
  isMobile as a,
  isKeyboardUser as b,
  fingersVisible as f,
  isIOS as i,
  popoverVisible as p
};
