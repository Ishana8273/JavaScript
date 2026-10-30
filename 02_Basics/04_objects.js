// const tinderUser = new Object();
const tinderUser = {}

tinderUser.id = '123abc'
tinderUser.name = "sammy"
tinderUser.isLoggedIn = true

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "vansh",
            lastname: "malik"
        }
    }
}
//  console.log(regularUser);//{
//   email: 'some@gmail.com',
//   fullname: { userfullname: { firstname: 'vansh', lastname: 'malik' } }
// }

// console.log(regularUser.fullname); //{ userfullname: { firstname: 'vansh', lastname: 'malik' } }

// console.log(regularUser.fullname.userfullname);//{ firstname: 'vansh', lastname: 'malik' }

// console.log(regularUser.fullname.userfullname.firstname);//vansh

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}
const obj4 = {5:"a",6:"b"}

// const obj3 = {obj1,obj2}
// console.log(obj3);  // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

const obj3 = Object.assign({},obj1,obj2,obj4) //Copy the values of all of the enumerable own properties from one or more source objects to a target object. Returns the target object.

//console.log(obj3); //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

const obj6 = {...obj1,...obj2,...obj4}  //Spread operator             //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }

// console.log(obj6);

const users = [
    {
        id:1,
        email:"mb@gmail.com"
    },
    {
        id:2,
        email:"vb@gmail.com"
    }
    
]

users[1].id
console.log(tinderUser); //{ id: '123abc', name: 'sammy', isLoggedIn: true }

console.log(Object.keys(tinderUser));//Returns the names of the enumerable string properties and methods of an object.                
 //[ 'id', 'name', 'isLoggedIn' ]

console.log(Object.values(tinderUser));//Returns an array of values of the enumerable own properties of an object         
//[ '123abc', 'sammy', true ]

console.log(Object.entries(tinderUser));//Returns an array of key/values of the enumerable own properties of an object
//[ [ 'id', '123abc' ], [ 'name', 'sammy' ], [ 'isLoggedIn', true ] ]

console.log(tinderUser.hasOwnProperty('isLogged')); // Determines whether an object has a property with the specified name
