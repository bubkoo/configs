const { terser } = require('rollup-plugin-terser')
const { visualizer } = require('rollup-plugin-visualizer')
const { nodeResolve } = require('@rollup/plugin-node-resolve')
const replace = require('@rollup/plugin-replace')
const commonjs = require('@rollup/plugin-commonjs')
const filesize = require('rollup-plugin-filesize')
const typescript = require('@rollup/plugin-typescript')

module.exports = function ({
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
}) {
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
      nodeResolve(resolveOptions),
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
