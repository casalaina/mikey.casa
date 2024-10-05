import { writable } from "svelte/store";

export const isMobile = writable(false);
export const isIOS = writable(false);
export const isKeyboardUser = writable(false);

export const popoverState = writable({
  visible: false,
  content: '',
  x: 0,
  y: 0,
  colorClass: '',
  link: '',
  linkName: '',
  focusTrigger: null,
});

// Add this line to export fingersVisible
export const fingersVisible = writable(true);

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

// Initial check
updateIsMobile();
updateIsIOS();

// Reassess on resize
if (typeof window !== "undefined") {
  window.addEventListener("resize", updateIsMobile);
}

// Detect keyboard usage
if (typeof window !== "undefined") {
  window.addEventListener("keydown", (event) => {
    if (event.key === "Tab") {
      isKeyboardUser.set(true);
    }
  });

  window.addEventListener("mousedown", () => {
    isKeyboardUser.set(false);
  });
}