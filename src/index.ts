import * as fs from 'fs';
import * as path from 'path';

const load = () => {
  const filename: string = path.join(__dirname, '.env');
  const vars: string = fs.readFileSync(filename).toString();
  const lines: string[] = vars.split('\n');
  // assume that the user correctly writes their .env
  lines.forEach(line => {
    if (line.match(/^\s*([^\n]+)=*([^\n]+)/g)) {
      const [key, value] = line.split('=');
      if (value) process.env[key] = value.replace(/\s/, '');
    }
  });
};

export default load;