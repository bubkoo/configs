# semantic-release-config

> [**semantic-release**](https://github.com/semantic-release/semantic-release) shareable configuration for npm & GitHub

## Plugins

This [shareable configuration](https://github.com/jedmao/semantic-release-npm-github-config/blob/master/.releaserc.json) uses the following plugins:

- [`@semantic-release/commit-analyzer`](https://github.com/semantic-release/commit-analyzer)
- [`@semantic-release/release-notes-generator`](https://github.com/semantic-release/release-notes-generator)
- [`@semantic-release/npm`](https://github.com/semantic-release/npm)
- [`@semantic-release/github`](https://github.com/semantic-release/github)
- [`@semantic-release/git`](https://github.com/semantic-release/git)

## Summary

- Provides an informative [git](https://github.com/semantic-release/git) commit message for the release commit that does not trigger continuous integration and conforms to the [conventional commits specification](https://www.conventionalcommits.org/) (e.g., "chore(release): 1.2.3 [skip ci]\n\nnotes").
- Creates a tarball that gets uploaded with each [GitHub release](https://github.com/semantic-release/github).
- Publishes the same tarball to [npm](https://github.com/semantic-release/npm).
- Commits the version change in `package.json`.
- Creates or updates a [changelog](https://github.com/semantic-release/changelog) file.

## Install

```bash
$ npm install --save-dev semantic-release @bubkoo/semantic-release-config
```

## Usage

The shareable config can be configured in the [**semantic-release** configuration file](https://github.com/semantic-release/semantic-release/blob/master/docs/usage/configuration.md#configuration) with default configuration:
```json
{
  "extends": "@bubkoo/semantic-release-config"
}
```

We can also specify plugin options in `.releaserc.js` file:
```js
var config = require('@bubkoo/semantic-release-config/config');
module.exports = config({
  commitAnalyzer: {...},
  releaseNotesGenerator: {...},
  changelog: {...},
  npm: {...},
  github: {...},
  git: {...},
})
```
