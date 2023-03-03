import crossSpawn from 'cross-spawn'
import { createRequire } from 'module'
import { npmRunPathEnv } from 'npm-run-path'
import path from 'path'
import pidtree from 'pidtree'
import { fileURLToPath } from 'url'

/**
 * Kills the new process and its sub processes.
 */
function kill_posix() {
  pidtree(this.pid, { root: true }, (err, pids) => {
    if (err) {
      return
    }

    // eslint-disable-next-line no-restricted-syntax
    for (const pid of pids) {
      try {
        process.kill(pid)
      } catch (e) {
        // ignore
      }
    }
  })

  return true
}

/**
 * Kills the new process and its sub processes forcibly.
 */
function kill_win32() {
  crossSpawn('taskkill', ['/F', '/T', '/PID', this.pid])
}

const kill = process.platform === 'win32' ? kill_posix : kill_win32

/**
 * Launches a new process with the given command.
 * This is almost same as `child_process.spawn`.
 *
 * This returns a `ChildProcess` instance.
 * `kill` method of the instance kills the new process and its sub processes.
 *
 * @param {string} command - The command to run.
 * @param {string[]} args - List of string arguments.
 * @param {object} options - Options.
 * @returns {ChildProcess} A ChildProcess instance of new process.
 */
export function spawn(command, args, options) {
  const filename = fileURLToPath(import.meta.url)
  const cwd = path.resolve(path.dirname(filename), '../')
  const child = crossSpawn(command, args, {
    stdio: 'inherit',
    env: npmRunPathEnv({ cwd }),
    ...options,
  })
  child.kill = kill
  return child
}

export function getConfigPath(module) {
  const require = createRequire(import.meta.url)
  return require.resolve(module)
}