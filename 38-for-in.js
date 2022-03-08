
// untuk object
const person = {
    firstName: 'fajar',
    lastName: 'fadilah',
    clan: 'jawa'
}

for (const property in person) {
    console.log(`property ${property} : ${person[property]}`)
}

console.log()

// untuk array
const names = ['fajar', 'fadilah', 'jawa']

for (const index in names) {
    console.log(`index ${index} : ${names[index]}`)
}