# rollup-config

> Shared rollup config for my projects.

## Install

```sh
npm install --save-dev rollup typescript @bubkoo/rollup-config
```
## Usage

`rollup.config.js`

```js
import config from '@bubkoo/rollup-config'

export default config({
  output: [
    {
      name: 'name',
      format: 'umd',
      file: 'dist/name.js',
      sourcemap: true,
    },
  ],
})

```
