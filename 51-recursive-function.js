

// faktorial tanpa rekursive
function faktorial(value) {
    let hasil = 1;

    for(let i = 1; i <= value; i++) {
        hasil *= i;
    }

    return hasil
}

console.log(faktorial(10))


// faktorial dengan recursive
function recursiveFaktorial(value) {
    if (value === 1) {
        return 1;
    } else {
        return value * recursiveFaktorial(value - 1)
    }
}

console.log(recursiveFaktorial(10))