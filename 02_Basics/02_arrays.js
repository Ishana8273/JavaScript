const marvel_heros = ["thor","spider man", "captain america"]
const dc_heros =["superman", "batman", "flash"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros)
// console.log(marvel_heros[3])

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros)

const allNewHeros = [...marvel_heros, ...dc_heros]
//console.log(allNewHeros);


// const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
// console.log(another_array);


// const real_another_array = another_array.flat(Infinity) //Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
// console.log(real_another_array);

console.log(Array.isArray("Vansh"))
console.log(Array.from("Vansh")) //Creates an array from an iterable object.
console.log(Array.from({name:"Vansh"})) //interesting

let s1 = 100
let s2 = 200
let s3 = 300

console.log(Array.of(s1,s2,s3)); //Returns a new array from a set of elements.

