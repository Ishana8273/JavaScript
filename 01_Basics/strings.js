const name = "Vansh Malik"
const age = 23

//console.log(name + age + " years")

console.log(`My name is ${name} and my age is ${age} years`)

//  const gameName = new String('Vansh-Malik')
//  String {'Vansh-Malik'}
// 0
// : 
// "V"
// 1
// : 
// "a"
// 2
// : 
// "n"
// 3
// : 
// "s"
// 4
// : 
// "h"
// 5
// : 
// "-"
// 6
// : 
// "M"
// 7
// : 
// "a"
// 8
// : 
// "l"
// 9
// : 
// "i"
// 10
// : 
// "k"
// length
// : 
// 11
// [[Prototype]]
// : 
// String
// anchor
// : 
// ƒ anchor()
// at
// : 
// ƒ at()
// big
// : 
// ƒ big()
// blink
// : 
// ƒ blink()
// bold
// : 
// ƒ bold()
// charAt
// : 
// ƒ charAt()
// charCodeAt
// : 
// ƒ charCodeAt()
// codePointAt
// : 
// ƒ codePointAt()
// concat
// : 
// ƒ concat()
// constructor
// : 
// ƒ String()
// endsWith
// : 
// ƒ endsWith()
// fixed
// : 
// ƒ fixed()
// fontcolor
// : 
// ƒ fontcolor()
// fontsize
// : 
// ƒ fontsize()
// includes
// : 
// ƒ includes()
// indexOf
// : 
// ƒ indexOf()
// isWellFormed
// : 
// ƒ isWellFormed()
// italics
// : 
// ƒ italics()
// lastIndexOf
// : 
// ƒ lastIndexOf()
// length
// : 
// 0
// link
// : 
// ƒ link()
// localeCompare
// : 
// ƒ localeCompare()
// match
// : 
// ƒ match()
// matchAll
// : 
// ƒ matchAll()
// normalize
// : 
// ƒ normalize()
// padEnd
// : 
// ƒ padEnd()
// padStart
// : 
// ƒ padStart()
// repeat
// : 
// ƒ repeat()
// replace
// : 
// ƒ replace()
// replaceAll
// : 
// ƒ replaceAll()
// search
// : 
// ƒ search()
// slice
// : 
// ƒ slice()
// small
// : 
// ƒ small()
// split
// : 
// ƒ split()
// startsWith
// : 
// ƒ startsWith()
// strike
// : 
// ƒ strike()
// sub
// : 
// ƒ sub()
// substr
// : 
// ƒ substr()
// substring
// : 
// ƒ substring()
// sup
// : 
// ƒ sup()
// toLocaleLowerCase
// : 
// ƒ toLocaleLowerCase()
// toLocaleUpperCase
// : 
// ƒ toLocaleUpperCase()
// toLowerCase
// : 
// ƒ toLowerCase()
// toString
// : 
// ƒ toString()
// toUpperCase
// : 
// ƒ toUpperCase()
// toWellFormed
// : 
// ƒ toWellFormed()
// trim
// : 
// ƒ trim()
// trimEnd
// : 
// ƒ trimEnd()
// trimLeft
// : 
// ƒ trimStart()
// trimRight
// : 
// ƒ trimEnd()
// trimStart
// : 
// ƒ trimStart()
// valueOf
// : 
// ƒ valueOf()
// Symbol(Symbol.iterator)
// : 
// ƒ [Symbol.iterator]()
// [[Prototype]]
// : 
// Object
// [[PrimitiveValue]]
// : 
// ""
// [[PrimitiveValue]]
// : 
// "Vansh-Malik"

 const gameName = new String('Vansh-Malik')

//  console.log(gameName[0])

//  console.log(gameName.__proto__)

//  console.log(gameName.length);
//   console.log(gameName.toUpperCase());
 
console.log(gameName.charAt(3));
console.log(gameName.indexOf('a'));

const newString = gameName.substring(0,5)
console.log(newString);

const anotherString = gameName.slice(-5,11)
console.log((anotherString));


const myString = "  vansh   "
console.log(myString);
console.log(myString.trim());

const url = "https://vanshmalikk.com/lovelpreet%20Vansh Malik"

console.log(url.replace("%20"," "));
console.log(url.replace("%20"," "));

console.log(url.includes('lovelpreet'));

console.log(gameName.split('-'));