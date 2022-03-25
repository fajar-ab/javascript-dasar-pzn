

// contoh function generator sederhana
function* createName() {
    yield 'fajar'
    yield 'fadilah'
    yield 'harun'
    yield 'arrasyid'
}

const names = createName()

for (const name of names) {
    console.log(name)
}

console.log(`\n`)

// function generator kompleks

// lazy 
function* buatGanjil(value) {
    for(let i = 1; i <= value; i++) {
        if (i % 2 === 1) {
            console.info(`yield ${i}`)
            yield i
        }
    }
}

const nilaiGanjil = buatGanjil(10)

console.log(nilaiGanjil.next().value)
console.log(nilaiGanjil.next().value)
console.log(nilaiGanjil.next().value)

// for (const ganjil of nilaiGanjil) {
//     console.log(ganjil)
// }

console.log(`\n`)

// eager 
function buatGanjilArray(value) {
    const result = []
    for(let i = 1; i <= value; i++) {
        if (i % 2 === 1) {
            console.info(`yield ${i}`)
            result.push(i)
        }
    }
    return result
}

const angkaGanjil = buatGanjilArray(10)

for (const ganjil of angkaGanjil) {
    console.log(ganjil)
}