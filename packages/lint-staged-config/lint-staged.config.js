module.exports = {
  '*': ['prettier --write --ignore-unknown'],
  '*.{js,jsx,ts,tsx}': [['prettier --write'], ['eslint --cache --fix']],
}
