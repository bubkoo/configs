import { readFileSync } from 'node:fs'

export function readJson<T>(file: string) {
  const raw = readFileSync(file, { encoding: 'utf8' })
  return JSON.parse(raw) as T
}
