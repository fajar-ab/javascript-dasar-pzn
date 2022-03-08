/**

    false           Boolean false
    0, -0           Number 0 dan -0 dianggap false
    “”, ‘’, ``      Semua string kosong dianggap false
    null            null dianggap false
    undefined       undefined dianggap false
    NaN             Not a Number dianggap false
*/

// flasy
let falsy = false;

falsy = 0
falsy = -0
falsy = ""
falsy = undefined
falsy = null

let cek = falsy ? true : false;
console.log(`type: ${typeof falsy}, velue: ${falsy}`)
console.log(cek)

// truchty

falsy = 2
falsy = -1
falsy = "kosong"
falsy = []

cek = falsy ? true : false
console.log(`ype: ${typeof falsy}, velue: ${falsy}`)
console.log(cek)