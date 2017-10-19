"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var path = require("path");
var load = function () {
    var filename = path.join(__dirname, '.env');
    var vars = fs.readFileSync(filename).toString();
    var lines = vars.split('\n');
    // assume that the user correctly writes their .env
    lines.forEach(function (line) {
        if (line.match(/^\s*([^\n]+)=*([^\n]+)/g)) {
            var _a = line.split('='), key = _a[0], value = _a[1];
            if (value)
                process.env[key] = value.replace(/\s/, '');
        }
    });
};
exports.default = load;
//# sourceMappingURL=index.js.map