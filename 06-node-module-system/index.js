// console.log('hello world')
// const nama = 'Jean Sabrina';
// console.log(`nama saya ${nama}`);

// console.log('hello world')
// require('./coba')

// const coba = require('./coba');
// console.log(coba);

//syntax untuk meangambil modul dari file coba:
const coba = require('./coba');
//syntax untuk menampilkan (tanpa syntax ini gaada output bosqu)

console.log(
    coba.cetakNama('Jean'), 
    coba.PI, 
    coba.mahasiswa.cetakMhs(), 
    new coba.Orang()
);

