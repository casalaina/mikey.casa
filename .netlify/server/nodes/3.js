

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/banana/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.D6wn2pdL.js","_app/immutable/chunks/scheduler.53O4NPpc.js","_app/immutable/chunks/index.BBLcUCsp.js"];
export const stylesheets = ["_app/immutable/assets/3.CD13t2ko.css"];
export const fonts = [];
