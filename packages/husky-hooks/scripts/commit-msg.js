#!/usr/bin/env node

import { getConfigPath, spawn } from './util.js'

spawn('commitlint', [
  '--edit',
  process.argv[2],
  '--config',
  getConfigPath('@bubkoo/commitlint-config'),
])
