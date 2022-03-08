
const person = {};
let country;

if (person.address !== undefined && person.address !== null) {
    country = person.address.country
}

console.log(country)

// optional
let country2 = person?.address?.country;
console.log(country2)