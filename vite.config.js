import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import macrosPlugin from "vite-plugin-babel-macros";
import relay from "vite-plugin-relay";
import * as path from 'path';
// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        alias: {
            'src': path.resolve(__dirname, './src')
        },
    },
    plugins: [macrosPlugin(), react({
            jsxRuntime: 'classic',
            babel: {
                plugins: [
                    "@babel/plugin-syntax-dynamic-import",
                    "@babel/plugin-proposal-class-properties",
                    "@babel/plugin-proposal-optional-chaining",
                    "@babel/plugin-proposal-nullish-coalescing-operator",
                ],
            },
        }), relay]
});
//# sourceMappingURL=vite.config.js.map