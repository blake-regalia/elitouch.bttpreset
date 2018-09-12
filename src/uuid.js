const uuidv5 = require('uuid/v5');

module.exports = s_suffix => uuidv5(`https://github.com/blake-regalia/elitouch.bttpreset/${s_suffix}`, uuidv5.URL).toUpperCase();
