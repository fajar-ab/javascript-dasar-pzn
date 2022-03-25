
// anonymouse function di variabe

let say = function (name) {
    console.log(`Hello, ${name}`)
}

say('fajar fadilah')


// anonymouse function di parameter

function giveMeName(callback) {
    callback('fajar fadilah')
}

giveMeName(function (name) {
    console.log(`Hello ${name}`)
})