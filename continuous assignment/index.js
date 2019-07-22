var a = { n: 1 };
var b = a;
a.x = a = { n: 2 };
// 从右到左赋值，a.x中.等级比=高，仍保留对a的引用
// https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/93#issuecomment-482389152/

console.log(a);
console.log(b);