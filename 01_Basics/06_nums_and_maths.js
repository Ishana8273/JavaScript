const score = 400;

const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(1));

const otherNumber = 12.4246
console.log(otherNumber.toPrecision(4));//12.42


const hundreds = 100000
console.log(hundreds.toLocaleString('en-IN'));//1,00,000

const numbers = Number.MAX_SAFE_INTEGER;//9007199254740991
console.log(numbers);