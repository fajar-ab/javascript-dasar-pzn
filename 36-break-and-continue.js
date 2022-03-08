
// break
let counter = 1
while (counter <= 10) {
    console.log(`perulangan ke - ${counter}`);
    counter++

    if (counter == 10)
        break
}

console.log('\n')

// continue
for (let i = 1; i < 100; i++) {
    if (i % 2 == 0) 
        continue
    console.log(`perulangan ganjil ${i}`)
}
