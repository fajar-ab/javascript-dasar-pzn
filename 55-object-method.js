

const person = {
    nama: 'fajar fadilah',
    hello: function (nama) {
        console.log(`hello, ${nama}`)
    }
}

person.hello(person.nama)


function buatNim(tahun, jurusan, urutan) {
    console.log(`${tahun}${jurusan}${urutan}`)
}

const mahasiswa = {
    nama: undefined,
    nim: buatNim
}

mahasiswa.nama = 'harun arrasyid'
mahasiswa.nim(2019, 01, 00012)
