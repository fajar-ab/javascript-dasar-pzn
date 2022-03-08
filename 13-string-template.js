
//  mensubtitusi data dari luar String ke dalam String, seperti mengambil data variable

const nama = "Fajar Fadilah"
let template = `Name: ${nama}`

console.log(template)

// expression di string template
const value = 80

template = `Name: ${nama}, lulus: ${value > 75}`
console.log(template)
