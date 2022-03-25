

// global scope
let counter = 0;

function hitMe() {

    // local scope
    counter++ // kita bisa akses global scope
}

hitMe()
hitMe()

console.log(counter)


function first() {
    // local scope
    let firstVariable = 'First'
}

function second() {
    let secondVariable = 'Second'
}

// console.log(firstVariable) // ! ERROR tidak bisa mengakses local variable
// console.log(secondVariable) // ! ERROR tidak bisa mengakses local variable

// nested function scope

function outside() {
    let firstVariable = 'first'

    function inside() {
        console.log(firstVariable) // bisa mengakses local scope outside function
    }

    inside()
}

outside()