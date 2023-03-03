#!/usr/bin/env node

import { getConfigPath, spawn } from './util.js'

spawn('lint-staged', ['--config', getConfigPath('@bubkoo/lint-staged-config')])
