//npm install validator
//npm uninstall validator
//npm i -g nodemon (untuk menginstall secara global berfungsi untuk melihat perubahan pada terminal tanpa harus mengetikan node.. terus menerus)
//syntax jalaninnya : nodemon (nama file), contoh: nodemon app
//install secara global tidak akan bekerja saat aplikasi di deploy
//utk install secara lokal (per projek) npm uninstall -g nodemon => npm install --save-dev nodemon
//cara jalaninnya : script start diganti jadi nodemon namafile.js trs diterminal tinggal tulis 'npm start"
//npm init -y (jika ingin cepaat menginisialisasi)

const validator = require('validator');
// console.log(validator.isEmail('jeansabrina@gmail.com'));
// console.log(validator.isMobilePhone('+6281234567', 'id-ID'));
// console.log(validator.isNumeric('6281234567'));
