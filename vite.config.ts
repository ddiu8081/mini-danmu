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
      shortcuts: [
        ['btn', 'rounded no-underline px-4 py-2'],
        ['pxy', 'px-4 py-2'],
      ],
    }),
  ],
  build: {
    target: 'esnext',
  },
})
