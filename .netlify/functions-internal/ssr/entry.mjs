import { renderers } from './renderers.mjs';
import { manifest } from './manifest_glI9ef_P.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_DqGsgfs-.mjs');
const _page1 = () => import('./chunks/ask_er9inPl_.mjs');
const _page2 = () => import('./chunks/upload_C39CPyB8.mjs');
const _page3 = () => import('./chunks/index_BjrCGqVG.mjs');
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
    "middlewareSecret": "6642d7fb-46f5-4e40-a9b4-eef5a708e6ff"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };