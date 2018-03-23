"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
var debug = require('debug')('local-env-var');
// load DIRTY regex
var re = new RegExp(/^\s*([\w\-\.]+)\s*=\s*([\w\-\.\s\:\/\?\=]*)/);
var lines = [];
// attempt to read file. if it doesn't exist, fail silently
try {
    var vars = fs_1.readFileSync('.env');
    lines = vars.toString().trim().split('\n');
} catch (ex) {}
// begin parsing each entry
lines.forEach(function (line) {
    debug(line);
    // allow for # or // to denote a comment
    var isComment = line.charAt(0) === '#' || line.charAt(0) === ';';
    // if it's of the form var=val or not a comment, parse
    if (!isComment) {
        // extract the goods from each
        var split = line.trim().split('=');
        if (split && split.length >= 2) {
            var key = split[0],
                value = split.slice(1);
            // set process.env.key to the value - removing any whitespace
            // ensure there are no empty keys set
            if (!key || !value[0]) return;
            debug("Adding " + key + " to process.env");
            process.env[key] = value.join('=').trim();
        }
    }
});
//# sourceMappingURL=index.js.map
