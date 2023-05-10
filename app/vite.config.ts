import path from 'path';
import vuePlugin from '@vitejs/plugin-vue';

import {
    defineConfig,
} from 'vite';

const root = path.resolve('./');
const src = path.resolve('./src');

export default defineConfig({
    root,
    server: {
        port: 6565,
        open: true,
        host: true,
    },
    json: {
        stringify: true,
    },
    resolve: {
        alias: {
            '~': src,
        },
    },
    define: {
        '__VUE_OPTIONS_API__': false,
        '__VUE_PROD_DEVTOOLS__': false,
    },
    worker: {
        format: 'es',
    },
    optimizeDeps: {
        force: true,
    },
    plugins: [
        vuePlugin(),
    ],
});