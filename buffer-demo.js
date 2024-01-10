var buff1 = Buffer.from('123456789');
var buff2 = Buffer.from('HELLO');

buff2.copy(buff1,2);
console.log(buff1.toString());
console.log(Buffer.concat([buff1, buff2]).toString());
console.log(buff1.equals(buff2));

buff1 = Buffer.from('a');
buff2 = Buffer.from('b');

console.log(Buffer.compare(buff1, buff2));
console.log(Buffer.compare(buff2, buff1));