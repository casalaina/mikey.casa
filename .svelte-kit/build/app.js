import { respond } from '@sveltejs/kit/ssr';
import root from './generated/root.svelte';
import { set_paths } from './runtime/paths.js';
import { set_prerendering } from './runtime/env.js';
import * as user_hooks from "./hooks.js";

const template = ({ head, body }) => "<!DOCTYPE html>\n<html lang=\"en\">\n\n<head>\n  " + head + "\n</head>\n\n<body>\n  <div id=\"svelte\">" + body + "</div>\n</body>\n\n</html>";

let options = null;

// allow paths to be overridden in svelte-kit preview
// and in prerendering
export function init(settings) {
	set_paths(settings.paths);
	set_prerendering(settings.prerendering || false);

	options = {
		amp: false,
		dev: false,
		entry: {
			file: "/./_app/start-726f18c4.js",
			css: ["/./_app/assets/start-a8cd1609.css"],
			js: ["/./_app/start-726f18c4.js","/./_app/chunks/vendor-4369daa9.js","/./_app/chunks/preload-helper-9f12a5fd.js","/./_app/chunks/singletons-bb9012b7.js"]
		},
		fetched: undefined,
		floc: false,
		get_component_path: id => "/./_app/" + entry_lookup[id],
		get_stack: error => String(error), // for security
		handle_error: error => {
			console.error(error.stack);
			error.stack = options.get_stack(error);
		},
		hooks: get_hooks(user_hooks),
		hydrate: true,
		initiator: undefined,
		load_component,
		manifest,
		paths: settings.paths,
		read: settings.read,
		root,
		router: true,
		ssr: true,
		target: "#svelte",
		template,
		trailing_slash: "never"
	};
}

const d = decodeURIComponent;
const empty = () => ({});

const manifest = {
	assets: [{"file":"favicon/android-chrome-192x192.png","size":16365,"type":"image/png"},{"file":"favicon/android-chrome-512x512.png","size":102260,"type":"image/png"},{"file":"favicon/apple-touch-icon.png","size":11120,"type":"image/png"},{"file":"favicon/favicon-16x16.png","size":1088,"type":"image/png"},{"file":"favicon/favicon-32x32.png","size":1641,"type":"image/png"},{"file":"favicon/favicon.ico","size":15086,"type":"image/vnd.microsoft.icon"},{"file":"favicon/mstile-150x150.png","size":9404,"type":"image/png"},{"file":"favicon/safari-pinned-tab.svg","size":3314,"type":"image/svg+xml"},{"file":"favicon/thumbnail.jpg","size":41194,"type":"image/jpeg"},{"file":"robots.txt","size":67,"type":"text/plain"}],
	layout: ".svelte-kit/build/components/layout.svelte",
	error: ".svelte-kit/build/components/error.svelte",
	routes: [
		{
						type: 'page',
						pattern: /^\/$/,
						params: empty,
						a: [".svelte-kit/build/components/layout.svelte", "src/routes/index.svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/laina\/?$/,
						params: empty,
						a: [".svelte-kit/build/components/layout.svelte", "src/routes/laina.svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					}
	]
};

// this looks redundant, but the indirection allows us to access
// named imports without triggering Rollup's missing import detection
const get_hooks = hooks => ({
	getSession: hooks.getSession || (() => ({})),
	handle: hooks.handle || (({ request, resolve }) => resolve(request))
});

const module_lookup = {
	".svelte-kit/build/components/layout.svelte": () => import("./components/layout.svelte"),".svelte-kit/build/components/error.svelte": () => import("./components/error.svelte"),"src/routes/index.svelte": () => import("../../src/routes/index.svelte"),"src/routes/laina.svelte": () => import("../../src/routes/laina.svelte")
};

const metadata_lookup = {".svelte-kit/build/components/layout.svelte":{"entry":"/./_app/layout.svelte-8617d258.js","css":[],"js":["/./_app/layout.svelte-8617d258.js","/./_app/chunks/vendor-4369daa9.js"],"styles":null},".svelte-kit/build/components/error.svelte":{"entry":"/./_app/error.svelte-3e4a6e00.js","css":[],"js":["/./_app/error.svelte-3e4a6e00.js","/./_app/chunks/vendor-4369daa9.js"],"styles":null},"src/routes/index.svelte":{"entry":"/./_app/pages/index.svelte-9e2fa639.js","css":[],"js":["/./_app/pages/index.svelte-9e2fa639.js","/./_app/chunks/vendor-4369daa9.js","/./_app/chunks/singletons-bb9012b7.js"],"styles":null},"src/routes/laina.svelte":{"entry":"/./_app/pages/laina.svelte-0e2d0618.js","css":["/./_app/assets/pages/laina.svelte-78e058ad.css"],"js":["/./_app/pages/laina.svelte-0e2d0618.js","/./_app/chunks/preload-helper-9f12a5fd.js","/./_app/chunks/vendor-4369daa9.js"],"styles":null}};

async function load_component(file) {
	return {
		module: await module_lookup[file](),
		...metadata_lookup[file]
	};
}

init({ paths: {"base":"","assets":"/."} });

export function render(request, {
	prerender
} = {}) {
	const host = request.headers["host"];
	return respond({ ...request, host }, options, { prerender });
}