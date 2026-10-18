// Stack (Primitive), Heap (Non- Primitive)

let yName = "VanshMalik"

let anotherName = yName
anotherName = "vanshMalik2"

console.log(anotherName);

console.log(yName);

let user = {
    email:"m1234@gmail.com",
    upi: "user@upi"

}

let userTwo = user

userTwo.upi = "user2@upi"

console.log(userTwo.upi);
console.log(user.upi);