const uuidv5 = require('uuid/v5');
const s_instance = require('uuid/v4')();

module.exports = s_suffix => uuidv5(`https://github.com/blake-regalia/elitouch.bttpreset/${s_instance}/${s_suffix}`, uuidv5.URL).toUpperCase();
