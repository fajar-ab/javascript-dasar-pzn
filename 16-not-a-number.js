
// NaN (Not a Number)

console.log(`${parseInt("salah")}`)
console.log(`${parseFloat("1.1text")}`)

// Number() tidak akan mentolelir kesalahan pada data 
console.log(`${Number("1.1text")}`)
console.log(`${Number("1x")}`)
console.log(`${Number("buka angka")}`)

const a = Number("salah")
const b = 100;
const c = a + b

console.log(`${c}`)

// function isNaN() mengecek apakah sebuah number itu NaN atau bukan
const num = Number("salah");
console.log(isNaN(num))