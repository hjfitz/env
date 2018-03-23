import { readFileSync } from 'fs';
const debug = require('debug')('local-env-var');

// load DIRTY regex
const re: RegExp = new RegExp(/^\s*([\w\-\.]+)\s*=\s*([\w\-\.\s\:\/\?\=]*)/);

let lines: string[] = [];

// attempt to read file. if it doesn't exist, fail silently
try {
  const vars: Buffer = readFileSync('.env');
  lines = vars.toString().trim().split('\n');
} catch (ex) {}

// begin parsing each entry
lines.forEach((line: string) => {
  debug(line);
  // allow for # or // to denote a comment
  const isComment: boolean = line.charAt(0) === '#' || line.charAt(0) === ';';
  // if it's of the form var=val or not a comment, parse
  if (!isComment) {
    // extract the goods from each
    const split: string[] = line.trim().split('=');
    if (split && split.length >= 2) {
      const [key, ...value] = split;
      // set process.env.key to the value - removing any whitespace
      // ensure there are no empty keys set
      if (!key || !value[0]) return;
      debug(`Adding ${key} to process.env`);
      process.env[key] = value.join('=').trim();
    }
  }
});
