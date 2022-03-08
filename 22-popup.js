
// Alert digunakan untuk memberi peringatan berupa popup text di browse
// alert("Selamat Belajar Javascrip Dasar")

// Prompt digunakan untuk meminta input string dari pengguna browser dalam bentuk popup input text
// const name = prompt('siapa nama anda?')
// alert(`Hello ${name}`)

// Sedangkan confirm digunakan untuk meminta input boolean dari pengguna browser dalam bentuk popup input pilihan
const masuk = confirm("apakah anda ingin masuk")

if (masuk) {
    const nama = prompt('siapakah nama anda?')
    alert(`nama anda adalah ${nama}`)
} else {
    alert('bye bye')
}