
// membuat default parameter
function register(nama, jenisKelamin = "TIDAK TAU") {
    console.log(nama)
    console.log(jenisKelamin)
}

register('Fajar', 'PERIA')
register('Fadilah')
register('Harun', undefined)