import { renderers } from './renderers.mjs';
import { manifest } from './manifest_D6blGdzq.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_Bo52jrba.mjs');
const _page1 = () => import('./chunks/ask_kWuhNF3T.mjs');
const _page2 = () => import('./chunks/upload_DEN_8Zhn.mjs');
const _page3 = () => import('./chunks/index_B-JV81wG.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/api/ask.ts", _page1],
    ["src/pages/api/upload.ts", _page2],
    ["src/pages/index.astro", _page3]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "e86049d6-3417-4283-8a5f-266e17a2e4b1"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
