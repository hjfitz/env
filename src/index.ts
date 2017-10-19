import * as fs from 'fs';
import * as path from 'path';

const load = () => {
  const filename: string = path.join(__dirname, '.env');
  const vars: string = fs.readFileSync(filename).toString();
  const lines: string[] = vars.split('\n');
  // assume that the user correctly writes their .env
  lines.forEach(line => {
    // handle comments
    const isComment: boolean = line.charAt(0) === '#' || line.substring(0, 2) === '//';
    // check if the line is of the form foo=bar
    const re: RegExp = new RegExp(/^\s*([^\n]+)=*([^\n]+)/g);
    const hasCorrectForm: boolean = re.test(line);
    if (hasCorrectForm || !isComment) {
      // TODO: parse this better - user may have a url with a '='
      const [key, value] = line.split('=');
      // set process.env.key to the value - removing any whitespace
      if (value) process.env[key] = value.replace(/\s/, '');
    }
  });
};

export default load;