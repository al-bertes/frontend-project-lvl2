#!/usr/bin/env node

import { Command } from 'commander';
import gendiff from '../src/gendiff.js';
import stylish from '../src/stylish.js';
import fs from 'fs';
import path from 'path';


const getPath = (pathStr) => path.resolve(process.cwd(), pathStr);

const getData = (path) => JSON.parse(fs.readFileSync(getPath(path), 'utf8'));


const program = new Command();

program
  .version('0.1', '-v, --vers', 'output the current version')
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format [type] ', 'output format')
  .arguments('<filepath1>  <filepath2>')
  .action((filepath1, filepath2) => {
    console.log(stylish(gendiff(getData(filepath1), getData(filepath2))), program.opts().format);
  });
program.parse();