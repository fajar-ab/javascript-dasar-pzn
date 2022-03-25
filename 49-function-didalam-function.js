

function outer() {

    function inner() {
        console.log('inner')
    }

    inner()
    inner()
}

outer()
// inner() // ERROR tidak bisa mengakses inner function