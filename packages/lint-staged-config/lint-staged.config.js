module.exports = {
  '*': ['prettier --write --ignore-unknown'],
  '*.js': ['prettier --write'],
  '*.ts?(x)': ['eslint --fix', 'prettier --parser=typescript --write'],
}
