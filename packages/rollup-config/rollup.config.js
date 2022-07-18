import { terser } from 'rollup-plugin-terser'
import replace from '@rollup/plugin-replace'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import filesize from 'rollup-plugin-filesize'
import typescript from '@rollup/plugin-typescript'
import visualizer from 'rollup-plugin-visualizer'

export default ({
  plugins = [],
  visualize = false,
  output = [],
  typescriptOptions,
  resolveOptions,
  commonjsOptions,
  replaceOptions,
  terserOptions,
  filesizeOptions,
  ...others
}) => {
  if (visualize) {
    const outputs = Array.isArray(output) ? output : [output]
    outputs.forEach(({ file }) => {
      const filename = `${file}.html`
      plugins.push(visualizer({ sourcemap: true, filename }))
      console.log(`Bundle visualization generated in '${filename}'`)
    })
  }

  return {
    output,
    input: './src/index.ts',
    plugins: [
      typescript({ ...typescriptOptions, declaration: false }),
      resolve(resolveOptions),
      commonjs(commonjsOptions),
      replace({
        ...replaceOptions,
        preventAssignment: true,
        'process.env.NODE_ENV': JSON.stringify('production'),
      }),
      terser(terserOptions),
      filesize(filesizeOptions),
      ...plugins,
    ],
    ...others,
  }
}
