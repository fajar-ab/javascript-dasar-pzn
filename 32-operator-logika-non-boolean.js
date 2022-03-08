// operator and
console.log(0 || '')

console.log('hello' || '')
console.log('' || [])
console.log('0' || 'NOL')
console.log(0 || 'NOL')
console.log(null || 'NULL')
console.log(undefined || 'UNDEFINE')

let person = {
    firstName: 'fajar',
    lastName: 'fadilah' 
}

let cek = person.firstName ? true : false;
console.log(`type: ${cek}, velue: ${person.firstName}`)

let nama = person.firstName || person.lastName;
console.log(nama)

// operator and
console.log('satu' && 'dua')
console.log('' && [])
console.log('0' && 'NOL')
console.log(0 && 'NOL')
console.log(null && 'NULL')
console.log(undefined && 'UNDEFINE')
