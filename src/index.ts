import * as fs from 'fs';
import * as path from 'path';

const re: RegExp = new RegExp(/^\s*([\w\-\.]+)\s*=\s*([\w\-\.]+)\s*/);

const load = (filename = '.env') => {
  // get an absolute link to the filename
  const absFile: string = path.join(__dirname, filename);
  // read the file and cast to string
  const vars: string = fs.readFileSync(absFile).toString();
  // split in to lines of key=value
  const lines: string[] = vars.split('\n');
  // assume that the user correctly writes their .env
  lines.forEach(line => {
    // handle comments
    const isComment: boolean = line.charAt(0) === '#' || line.substring(0, 2) === '//';
    // check if the line is of the form foo=bar
    const hasCorrectForm: boolean = re.test(line);
    if (hasCorrectForm || !isComment) {
      // extract the goods from each
      const [useless, key, value] = re.exec(line);
      // set process.env.key to the value - removing any whitespace
      if (key && value) {
        const trimmed: string = value.replace(/\s/, '');
        process.env[key] = trimmed;
      }
    }
  });
};

export default load;