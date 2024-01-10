const util = require('util');

const text = 'Welcome to %s certification course, batch %d';
const fullText = util.format(text, 'Node Js', 1);
console.log(fullText);