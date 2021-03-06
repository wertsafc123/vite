// @ts-check
import preactRefresh from '@prefresh/vite'

/**
 * https://vitejs.dev/config/
 * @type { import('vite').UserConfig }
 */
const config = {
  esbuild: {
    jsxFactory: 'h',
    jsxFragment: 'Fragment',
    jsxInject: `import { h, Fragment } from 'preact'`
  },
  plugins: [preactRefresh()]
}

export default config
