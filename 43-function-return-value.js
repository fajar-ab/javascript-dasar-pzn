
// membuat function dengan parameeter dan return value
function sayHello(firstName, lastName) {
    const say = `Hello, ${firstName} ${lastName}`
    return say
}

// memanggil function dan menangkap valuenya
const result = sayHello('fajar', 'fadilah');
console.log(result)

// function return value lebih dari satu
function getFinalScore(value) {
    if (value >= 90) {
        return 'A'
    } else if (value >= 80) {
        return 'B'
    } else if (value >= 70) {
        return 'C'
    } else if (value >= 60) {
        return 'D'
    } else {
        return 'E'
    }
}

const grade = getFinalScore(80)
console.log('grade: ' + grade)

// menghentikan eksekusi dengan return
function  isContains(array, searchValue) {
    for (const elemnt of array) {
        if (elemnt == searchValue) {
            return true
        }
    }
    return false
}

console.info(isContains([1,2,3,4,5,6,7,8], 5))