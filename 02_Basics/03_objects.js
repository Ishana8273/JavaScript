// objects declared by 2 types - literals and constructor

// singleton -- only using constructor
// Object.create

// object literals 

const mySym = Symbol("key1")

const JsUser = {
    name: "vansh",
    "full name" : "Vansh Malik",
   [mySym]: "mykey1", // way to initialised symbol
    age: 18,
    location: "Muzaffarnagar",
    email: "vansh@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Tuesday"]
} 

// console.log(JsUser.email);
// console.log(JsUser[email]); //ReferenceError: email is not defined 
//it allowed string

console.log(JsUser["email"]);
// console.log(JsUser["full name"]); // Here you will not use . bcoz of initialisation is in string

// console.log(JsUser[mySym]); // way to access

JsUser.email = "vansh.12e@gmail.com"
// console.log(JsUser.email)

//Object.freeze(JsUser)  //Prevents the modification of existing property attributes and values, and prevents the addition of new properties.
JsUser.email = "vansh@microsoft.com"

// console.log(JsUser)

JsUser.greeting = function(){
    console.log(`Hello JS User , ${this["full name"]}`);
    
}
JsUser.greetingTwo = function(){
    console.log("Hello JS User",);
    
}

//console.log(JsUser.greeting); //[Function (anonymous)]

console.log(JsUser.greetingTwo()); //Hello JS User
//undefined
console.log(JsUser.greeting());


