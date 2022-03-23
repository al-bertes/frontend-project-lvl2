#!/usr/bin/env node

import { Command } from 'commander';

const program = new Command();

program
  .version('0.1', '-v, --vers', 'output the current version')
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format [type] ', 'output format')

program.parse();