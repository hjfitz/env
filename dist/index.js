"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
// load DIRTY regex
var re = new RegExp(/^\s*([\w\-\.]+)\s*=\s*([\w\-\.\s\:\/\?\=]*)/);
// read .env
var lines = [];
try {
    var vars = fs_1.readFileSync('.env');
    // split in to lines of key=value
    lines = vars.toString().split('\n');
} catch (ex) {}
// go through each line and add them to .env
lines.forEach(function (line) {
    // allow for # or // to denote a comment
    var isComment = line.charAt(0) === '#' || line.substring(0, 2) === '//';
    // check if the line is of the form foo=bar
    var hasCorrectForm = re.test(line);
    // if it's of the form var=val or not a comment, parse
    if (hasCorrectForm || !isComment) {
        // extract the goods from each
        var split = re.exec(line);
        if (split && split.length >= 3) {
            var unused = split[0],
                key = split[1],
                value = split[2];
            // set process.env.key to the value - removing any whitespace
            var trimmed = value.trim();
            // ensure there are no empty keys set
            if (trimmed === '') return;
            process.env[key] = trimmed;
        }
    }
});
//# sourceMappingURL=index.js.map
