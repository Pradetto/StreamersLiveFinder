/* eslint-disable import/no-extraneous-dependencies */
/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/setupTests.ts'],
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        background: resolve(__dirname, 'src/background/background.ts'),
        contentScriptTwitch: resolve(__dirname, 'src/contentScripts/contentScriptTwitch.ts'),
        contentScriptYoutube: resolve(__dirname, 'src/contentScripts/contentScriptYoutube.ts'),
      },
      output: {
        entryFileNames: `[name].js`,
        chunkFileNames: `[name].js`,
        assetFileNames: `[name].[ext]`,
      },
    },
  },
});




// /* eslint-disable import/no-extraneous-dependencies */
// /// <reference types="vitest" />
// /// <reference types="vite/client" />

// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';
// import { resolve } from 'path';

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   test: {
//     globals: true,
//     environment: 'jsdom',
//     setupFiles: ['./src/setupTests.ts'],
//   },
//   build: {
//     rollupOptions: {
//       input: {
//         main: resolve(__dirname, 'index.html'),
//         background: resolve(__dirname, 'src/background/background.ts'),
//         contentScript: resolve(__dirname, 'src/contentScripts/contentScript.ts'),
//         // popup: resolve(__dirname, 'popup.html'),
//         // options: resolve(__dirname, 'options.html'),
//       },
//     },
//   },
// });
