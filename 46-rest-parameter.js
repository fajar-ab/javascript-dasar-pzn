
// pembuatan rest parameter di function
function sum(nama, ...data) {
    let total = 0
    for (const v of data) {
        total += v
    }

    console.log(`Total ${nama} adalah ${total}`)
}

sum('jeruk', 1,2,3,4,5)
sum('mangga', 10)

// spread syntax
sum('angur', ...[20,10,30])
sum('ranbutan', ...[11, 22, 33, 44])


// arguments object
function oldSum() {
    let total = 0
    for (const item of arguments) {
        total += item
    }
    console.log(`Total is ${total}`)
}

oldSum(1,2,3,4,5,6,7,8,9)