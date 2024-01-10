const url = require('url');
const addr = 'http://localhost:8080/default.html?page=1';

const parsedUrl = url.parse(addr,true);
console.log(parsedUrl.host);
console.log(parsedUrl.port);
console.log(parsedUrl.hostname);
console.log(parsedUrl.pathname);
console.log(parsedUrl.search);