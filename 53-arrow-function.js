
// membuat arrow function
// const sayHello = (nama) => {
//     const say = `Hello ${nama}`
//     console.log(say)
// }

// arrow function tanpa block

const sayHello = (nama) => console.log(`Hello ${nama}`)

sayHello('fajar fadilah')


// arrow function dengan return value

// const sum = (first, second) => {
//     return first + second
// }

const sum = (first, second) => first + second

console.log(sum(10, 10))


// arrow function sebagai parameter

function giveMeName(callback) {
    callback('fajar fadilah')
}

giveMeName((nama) => console.log(`my name is ${nama}`))