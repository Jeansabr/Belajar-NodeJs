// console.log('hello Jean')

//local module
function cetakNama(nama) {
    return `Halo, nama saya ${nama}`;
}

const PI = 3.14;

const mahasiswa = {
    nama : 'Jean Sabrina',
    umur : 19,
    cetakMhs () {
        return `Halo, nama saya ${this.nama} dan saya ${this.umur} tahun.`;
    },
};

class Orang {
    constructor() {
        console.log('Objek orang telah dibuat!');
    }
}

//module : core modules, npm module, local module
//3 metode untuk mengeksport local module (yang terakhir paling simpel) :

// module.exports.cetakNama = cetakNama;
// module.exports.PI = PI;
// module.exports.mahasiswa = mahasiswa;
// module.exports.Orang= Orang;

module.exports = {
    cetakNama : cetakNama,
    PI : PI,
    mahasiswa : mahasiswa,
    Orang : Orang,
};

//module.exports = {cetakNama, PI, mahasiswa, Orang};