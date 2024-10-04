export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","eureka.mp3","favicon/android-chrome-192x192.png","favicon/android-chrome-512x512.png","favicon/apple-touch-icon.png","favicon/browserconfig.xml","favicon/favicon-16x16.png","favicon/favicon-32x32.png","favicon/favicon.ico","favicon/mstile-150x150.png","favicon/safari-pinned-tab.svg","favicon/site.webmanifest","favicon/thumbnail.jpg","fonts/ApfelGrotezk-Brukt.woff2","fonts/ApfelGrotezk-Fett.woff2","fonts/ApfelGrotezk-Mittel.woff2","fonts/ApfelGrotezk-Regular.woff2","fonts/ApfelGrotezk-Satt.woff2","img/craft.jpg","img/letsheal.jpg","img/lr.jpg","img/mdam.jpg","img/meevee.jpg","img/mikey.jpg","img/ns.jpg","img/ptr.jpg","img/tfi.jpg","img/wet.jpg","robots.txt"]),
	mimeTypes: {".mp3":"audio/mpeg",".png":"image/png",".xml":"text/xml",".svg":"image/svg+xml",".webmanifest":"application/manifest+json",".jpg":"image/jpeg",".woff2":"font/woff2",".txt":"text/plain"},
	_: {
		client: {"start":"_app/immutable/entry/start.BtfjQKcW.js","app":"_app/immutable/entry/app.foTJE4rA.js","imports":["_app/immutable/entry/start.BtfjQKcW.js","_app/immutable/chunks/entry.Dr3WffHr.js","_app/immutable/chunks/scheduler.53O4NPpc.js","_app/immutable/chunks/index.DnmPPUaC.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/entry/app.foTJE4rA.js","_app/immutable/chunks/scheduler.53O4NPpc.js","_app/immutable/chunks/index.BBLcUCsp.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/banana",
				pattern: /^\/banana\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/laina",
				pattern: /^\/laina\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
