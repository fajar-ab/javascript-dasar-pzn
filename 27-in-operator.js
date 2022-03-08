
// operator in diguganakan untuk mengecek apkah sebuah
// property ada di object atau tidak

const person = {
    firstName: 'fajar',
    lastName: 'fadilah'
}

let result = 'firstName' in person
console.log(result)

result = 'fullName' in person
console.log(result)

let a = [1,2,3]

result = 2 in a
console.log(result)

result = 4 in a
console.log(result)

// In Operator Undefined/Null Property
const person2 = {
    lastName: undefined
}

result = 'lastName' in person2
// walaupun nilai property atau index nya undefined atau null, maka tetap akan dianggap ada
console.log(result);