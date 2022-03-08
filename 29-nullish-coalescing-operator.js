
let parameter;

// code tanpa nullish coalescing operator
let data = parameter
if (data === undefined || data === null) {
    data = 'nilai default'
}

console.log(data)

// denaga operator nullish
data = parameter;
data = parameter ?? 'nilai default nullish coalecsing operator'
console.log(data)