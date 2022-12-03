import { defineConfig } from 'vite'
import solidPlugin from 'vite-plugin-solid'
import Unocss from 'unocss/vite'

import { presetUno } from 'unocss/preset-uno'
import presetAttributify from '@unocss/preset-attributify'

export default defineConfig({
  plugins: [
    solidPlugin(),
    Unocss({
      presets: [
        presetUno(),
        presetAttributify(),
      ],
    }),
  ],
  build: {
    target: 'esnext',
  },
})
