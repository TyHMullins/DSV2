
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/DSV2/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/DSV2"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 497, hash: '266632d43e8f17ec33c908e1d6e907d794d6b7a19565433908b5c90bfb176244', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1010, hash: '6c66340cfba0d3046178b790fa4812d96a314f73ffd6a48938cacae28a1ee812', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 20838, hash: '836328ba335ee4fe9fd6309e68be36ec395b660269cc230a037da0262836e904', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
