import chalk from 'chalk'
import fs from 'node:fs'
import path from 'node:path'
import { readJson } from './read-json'

export function initConfig(
  filename: string,
  content: string,
  filenames?: string[],
  packageJsonKey?: string,
) {
  if (process.env.CI !== undefined) {
    console.log(chalk.grey('CI environment, skipping.'))
    process.exit(0)
  }

  const cwd = process.env.INIT_CWD || process.cwd()

  // eslint-disable-next-line no-param-reassign
  filenames = filenames || []
  if (!filenames.includes(filename)) {
    filenames.push(filename)
  }

  for (const filename of filenames) {
    const file = path.join(cwd, filename)
    if (fs.existsSync(file)) {
      console.log(
        chalk.grey(`Config file "${filename}" already exists, skipping.`),
      )
      process.exit(0)
    }
  }

  if (packageJsonKey) {
    const packageJsonFile = path.join(cwd, 'package.json')
    const packageJson = readJson<any>(packageJsonFile)
    if (packageJson[packageJsonKey]) {
      console.log(
        chalk.grey(
          `Config with key "${packageJsonKey}" already exists in package.json, skipping.`,
        ),
      )
      process.exit(0)
    }
  }

  const file = path.join(cwd, filename)
  fs.writeFileSync(file, content)
  console.log(chalk.green(`Config file "${filename}" created.`))
}
