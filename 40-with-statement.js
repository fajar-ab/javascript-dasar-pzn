
// tanpa with statement

const mahasiswa = {
    nim: 2019010012,
    nama: 'fajar fadilah',
    semester: 6,
    ipk: 3.9,
    jurusan: 'sistem informasi'
}

console.log(mahasiswa.nim)
console.log(mahasiswa.nama)
console.log(mahasiswa.semester)
console.log(mahasiswa.ipk)
console.log(mahasiswa.jurusan)

console.log()
// menggunakan with statement

with (mahasiswa) {
    console.log(nim)
    console.log(nama)
    console.log(semester)
    console.log(ipk)
    console.log(jurusan)
}