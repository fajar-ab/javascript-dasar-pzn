
function sum(nama, ...data) {
    let total = 0
    for (const v of data) {
        total += v
    }

    console.log(`Total ${nama} adalah ${total}`)
}

sum('jeruk', 1,2,3,4,5)
sum('mangga', 10)
sum('angur', 20,10,30)