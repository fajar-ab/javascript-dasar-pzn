
// membuat tipe data objects
const siswa = {}

// menambah atau mengubah
siswa['nama'] = 'fajar fadilah'
siswa['alamat'] = 'indonesia'
siswa['umur'] = 21

console.table(siswa)

// hapus
// delete siswa['umur']
// console.table(siswa)

const siswa2 = {
    'nama lengkap': 'fajar fadilah',
    alamat: 'indonesia',
    umur: 21
}

console.table(siswa2)

// mengakses atribut property
console.log('\nsiswa 1')
console.info(`nama : ${siswa.nama}`)
console.info(`nama : ${siswa.alamat}`)
console.info(`nama : ${siswa.umur}`)

console.log('\nsiswa 2')
console.info(`nama : ${siswa2['nama lengkap']}`)
console.info(`nama : ${siswa2['alamat']}`)
console.info(`nama : ${siswa2['umur']}`)