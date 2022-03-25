

function createAdder(value) {
    const owner = 'fajar'

    function add(param) {
        console.log(owner)
        return value + param
    }

    return add
}

const addTwo = createAdder(3)
// function addTwo(param) {
//     console.log('fajar')
//     return 3 + param
// }

console.log(addTwo(10))
console.log(addTwo(20))
console.log(addTwo(30))