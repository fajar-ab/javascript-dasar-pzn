
// function di variable

function sayHello(name) {
    console.log(`Hello ${name}`)
}

let say = sayHello

sayHello('fajar fadilah')
say('fajar fadilah')


// function di parameter

function giveMeName(callback) {
    callback('fajar')
}

giveMeName(sayHello)
giveMeName(say)