"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var re = new RegExp(/^\s*([\w\-\.]+)\s*=\s*([\w\-\.\s\:\/\?\=]*)/);
var load = function (filename, verbose) {
    // get an absolute link to the filename
    // const absFile: string = path.join(__dirname, filename);
    if (filename === void 0) { filename = '.env'; }
    // read the file and cast to string
    var vars;
    try {
        vars = fs.readFileSync(filename).toString();
    }
    catch (e) {
        if (verbose)
            console.log('Error, env file not found! Refusing to load.');
        return false;
    }
    // split in to lines of key=value
    var lines = vars.split('\n');
    // assume that the user correctly writes their .env
    lines.forEach(function (line) {
        // handle comments
        var isComment = line.charAt(0) === '#' || line.substring(0, 2) === '//';
        // check if the line is of the form foo=bar
        var hasCorrectForm = re.test(line);
        if ((hasCorrectForm || !isComment) && line) {
            // extract the goods from each
            var split = re.exec(line);
            if (split && split.length >= 3) {
                var _a = re.exec(line), useless = _a[0], key = _a[1], value = _a[2];
                // set process.env.key to the value - removing any whitespace
                if (key && value) {
                    var trimmed = value.trim();
                    process.env[key] = trimmed;
                }
            }
        }
    });
};
module.exports = load;
//# sourceMappingURL=index.js.map