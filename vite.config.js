import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import Unocss from 'unocss/vite';
import presetUno from '@unocss/preset-uno';

export default defineConfig({
  plugins: [
    solidPlugin(),
    Unocss({
      shortcuts: [
        {
          btn: 'font-medium px-4 py-2 bg-neutral-600',
        },
      ],
      presets: [
        presetUno(),
      ],
    }),
  ],
  build: {
    target: 'esnext',
    polyfillDynamicImport: false,
  },
});
