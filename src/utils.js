import fs from 'fs';
import path from 'path';

export const getPath = (pathStr) => path.resolve(process.cwd(), pathStr);
export const getData = (path) => fs.readFileSync(getPath(path), 'utf8');

export const generateTab = (countSpace) => '  '.repeat(countSpace);