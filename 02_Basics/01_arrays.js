// array

const myarr = [0,10,20,30,40,]

// array is simple contigous memory location that enables storing a collection of mutiple items under a single variable

// javascript array are resizeable
// arrays are zero - indexed 
// javascript array-copy opertions create shallow copies.

// shallow copy  -- a shallow copy of an object is a copy whose properties share the same references (point to the same underlying values)

//Deep copies -- A deep copy of an object is a copy whose properties do not share the ssame references

// console.log(myarr[0])
// console.log(myarr[1])

const myHeros = ["Iron Man","Thor"]

// const myArr2 = new Array(1,2,3,4)

// Array methods

// myArr2.push(6)
// myArr2.push(3)
// myArr2.pop()

// myArr2.unshift(9)
// myArr2.shift()

// console.log(myArr2.includes(1))
// console.log(myArr2.indexOf(3))

// const newArr = myArr2.join()

// console.log(myArr2)
// console.log(newArr)

// slice, splice
const myArr2 = new Array(1,2,3,4)

console.log("A", myArr2); //A [ 1, 2, 3, 4 ]


const myn1 = myArr2.slice(1,3) //Returns a copy of a section of an array. For both start and end, a negative index can be used to indicate an offset from the end of the array. For example, -2 refers to the second to last element of the array.

console.log(myn1) //[ 2, 3 ]
console.log("B",myArr2) //B [ 1, 2, 3, 4 ]


const myn2 = myArr2.splice(1,3)//Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
console.log("B",myArr2)
console.log(myn2);