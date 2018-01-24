import { readFileSync as read }from 'fs';

// load DIRTY regex
const re: RegExp = new RegExp(/^\s*([\w\-\.]+)\s*=\s*([\w\-\.\s\:\/\?\=]*)/);
// read .env
let lines: string[] = [];
try {
  const vars: Buffer = read('.env');
  // split in to lines of key=value
  lines = vars.toString().split('\n');
} catch (ex) {}
// go through each line and add them to .env
lines.forEach((line: string) => {
  // allow for # or // to denote a comment
  const isComment: boolean = line.charAt(0) === '#' || line.substring(0, 2) === '//';
  // check if the line is of the form foo=bar
  const hasCorrectForm: boolean = re.test(line);
  // if it's of the form var=val or not a comment, parse
  if (hasCorrectForm || !isComment) {
    // extract the goods from each
    const split: RegExpExecArray = re.exec(line);
    if (split && split.length >= 3) {
      const [unused, key, value] = split;
      // set process.env.key to the value - removing any whitespace
      const trimmed: string = value.trim();
      // ensure there are no empty keys set
      if (trimmed === '') return;
      process.env[key] = trimmed;
    }
  }
});
