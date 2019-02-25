var he = require('he');

module.exports = function sanitizeString(str) {
    return he.encode(str);
}
