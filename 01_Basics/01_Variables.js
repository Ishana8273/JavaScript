const accountId = 144553
let accountEmail = "malik@gmail.com"
var accountPassword ="1234567890"
accountCity = "Muzaffarnagar"
let accountState;

// accountId = 2
/*
prefer not to use var
because of issue in block scope and functional scope

*/

console.log(accountId)

accountEmail="vm@vm.com"
accountPassword="567890"
accountCity="pinna"

console.table([accountEmail,accountId,accountPassword,accountCity,accountState])

