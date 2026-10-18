//  Primitive 

//  7 Types : String, Number, BigInt, Boolean, Undefined, Null, Symbol    

const score = 100
const scoreValue = 100.3

const isloggedin = true
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id===anotherId)

const bignumber = 123456788769876543n


// Refernce (Non-Primitive)

// Array, Objects, functions

const heros  = ["Shaktiman","Naagraj","Doga"];
let myObj ={
    name: "vansh",
    age: 22,

}

const myFunction = function(){
    console.log("Hello World")
}

myFunction()

console.log(typeof myFunction)