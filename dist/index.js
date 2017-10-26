"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var path = require("path");
var re = new RegExp(/^\s*([\w\-\.]+)\s*=\s*([\w\-\.]+)\s*/);
var load = function (filename) {
    if (filename === void 0) { filename = '.env'; }
    // get an absolute link to the filename
    var absFile = path.join(__dirname, filename);
    // read the file and cast to string
    var vars = fs.readFileSync(absFile).toString();
    // split in to lines of key=value
    var lines = vars.split('\n');
    // assume that the user correctly writes their .env
    lines.forEach(function (line) {
        // handle comments
        var isComment = line.charAt(0) === '#' || line.substring(0, 2) === '//';
        // check if the line is of the form foo=bar
        var hasCorrectForm = re.test(line);
        if (hasCorrectForm || !isComment) {
            // extract the goods from each
            var _a = re.exec(line), useless = _a[0], key = _a[1], value = _a[2];
            // set process.env.key to the value - removing any whitespace
            if (key && value) {
                var trimmed = value.replace(/\s/, '');
                process.env[key] = trimmed;
            }
        }
    });
};
exports.default = load;
//# sourceMappingURL=index.js.map