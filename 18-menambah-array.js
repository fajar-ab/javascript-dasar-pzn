
// menambah data di array

const name = []
name
name.push("fajar")
name.push("fadilah")
name.push("harun", "arrasyid")

console.table(name)

/*
 operasi array
 ┌───────────────────────┬──────────────────────────────────────────────────────────────┐
 │ array.push(value)     │ Menambah data ke Array                                       │
 │ array.length          │ Untuk mendapatkan panjang Array                              │
 │ array[index]          │ Mendapat data di posisi index                                │
 │ array[index] = value  │ Mengubah data di posisi index                                │
 │ delete array[index]   │ Menghapus data di posisi index, namun index tidak bergeser   │
 └───────────────────────┴──────────────────────────────────────────────────────────────┘
*/

console.info(name[1])

name[1] = "dila";
console.table(name)

delete name[2];
console.table(name)
console.info(name.length)

name[2] = "ubah lagi";
console.table(name)
console.info(name.length)
