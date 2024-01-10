const path = require('path');
const pathUrl = 'home/users/Desktop/edureka/nodejs/module/mycode.js';

console.log(path.basename(pathUrl));
console.log(path.dirname(pathUrl));
console.log(path.extname(pathUrl));
console.log(path.isAbsolute(pathUrl));

