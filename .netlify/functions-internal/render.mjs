import { init } from '../serverless.js';

export const handler = init({
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon/android-chrome-192x192.png","favicon/android-chrome-512x512.png","favicon/apple-touch-icon.png","favicon/favicon-16x16.png","favicon/favicon-32x32.png","favicon/favicon.ico","favicon/mstile-150x150.png","favicon/safari-pinned-tab.svg","favicon/thumbnail.jpg","robots.txt"]),
	mimeTypes: {".png":"image/png",".ico":"image/vnd.microsoft.icon",".svg":"image/svg+xml",".jpg":"image/jpeg",".txt":"text/plain"},
	_: {
		entry: {"file":"_app/immutable/start-e4a0deca.js","imports":["_app/immutable/start-e4a0deca.js","_app/immutable/chunks/index-6643d1c4.js","_app/immutable/chunks/singletons-b16f9ff0.js","_app/immutable/chunks/control-ba37bfb4.js","_app/immutable/chunks/env-public-6aa99648.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('../server/nodes/0.js'),
			() => import('../server/nodes/1.js'),
			() => import('../server/nodes/2.js'),
			() => import('../server/nodes/3.js'),
			() => import('../server/nodes/4.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			},
			{
				id: "/banana",
				pattern: /^\/banana\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			},
			{
				id: "/laina",
				pattern: /^\/laina\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 4 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
});
