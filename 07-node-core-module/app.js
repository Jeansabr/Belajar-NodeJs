// ************************************CATATAN GENERAL*************************************
//core module --> lts (cara pakainya lihat di dokoumentasi(docs) nodejs)/
//module file system = untuk menuliskan sesuatu ke direktori dan membaca file di direktori/
//Asynchronus = non blocking
//mengcopy kebawah dengan cepat alt + shift + bawah
//ctrl + backtick untuk buka tutup terminal

// ************************************module file system (fs)*************************************

//const fs = require('fs');
//di dalam fs module terdapat banyak method, cara tau ada method apa aja:/
//console.log(fs);

// **********************************menuliskan string ke file (synchronous)******************************

// const fs = require('fs');
// fs.writeFileSync(data/'test.txt', 'Hello World secara synchronous');
// fs.writeFileSync(namaFolder/'test.txt', 'Hello World secara synchronous');/
//untuk menampung eror:/
// try {
//     fs.writeFileSync(data/'test.txt', 'Hello World secara synchronous');
// } catch(e) {
//     console.log(e);
// }

// ***************************menuliskan string ke file (Asynchronous)********************************

// const fs = require('fs');
// fs.writeFile(data/'test.txt', 'Hello world secara Asynchronus baru', (err) => {
//    if (err) throw err;
//    console.log('File berhasil diubah') 
// });

// ******************************membaca dan menampilkan isi file secara synchronous********************************

// const fs = require('fs');
// const data = fs.readFileSync(data/'test.txt');
// console.log(data.toString());

// ********************************membaca dan menampilkan isi file secara asynchronous**********************************

// const fs = require('fs');
// fs.readFile(data/'test.txt', (err, data) => {
//     if (err) throw err;
//     console.log(data.toString());
// });

// ******************************module read line (1 pertanyaan)**************************************

//read line => untuk membaca apa yang kita tuliskn di command prompt/
// const readline = require('readline');
// const rl = readline.createInterface({
//     input: process.stdin,
//     output:process.stdout
// });


//readline untuk 1 pertanyaan :/
// rl.question('what is you name?', (answer) => {
//     console.log(`thank you ${answer}`);
//     rl.close();
// });

// ****************************************Modul read line 2 pertanyaan********************************************

// const readline = require('readline');
// const rl = readline.createInterface({
//     input: process.stdin,
//     output:process.stdout
// });

// read line untuk pertanyaan lebih dari 1 :/
// rl.question('what is you name?', (nama) => {
//     rl.question('How old are you?', (umur) => {
//         console.log(`nama : ${nama}, umur : ${umur}`);
//         rl.close();
//     });
// });

// *******************************Menaruh jawaban user ke file txt (dari readline)****************************************

//const fs = require('fs');
//const readline = require('readline');
//const rl = readline.createInterface({
//    input: process.stdin,
//    output:process.stdout
// });

//read line untuk pertanyaan lebih dari 1 :/
// rl.question('what is you name?', (nama) => {
//     rl.question('How old are you?', (umur) => {
//         const keluaran = `nama : ${nama}, umur : ${umur}`;
//         console.log(keluaran);
//         rl.close();
//menaruh jawaban user ke file txt: /
//         fs.writeFile('data/contact.txt', keluaran, (err) => {
//             if (err) throw err;
//             console.log('File berhasil diubah') 
//          });
//     });
// });

// *******************************Menaruh jawaban user ke file json (dari readline)******************************************


// string ke json => parse
// json ke string => json stringify
const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output:process.stdout
});

rl.question('what is you name?', (nama) => {
        rl.question('How old are you?', (umur) => {
            console.log(`nama : ${nama}, umur : ${umur}`);
            console.log('Terima kasih sudah memasukkan data');
            const contact = {nama, umur};
            const file = fs.readFileSync('data/contacts.json', 'utf8');
            const contacts = JSON.parse(file);
            rl.close();


            contacts.push(contact);

            //untuk menuliskan data ke file json
            fs.writeFileSync('data/contacts.json', JSON.stringify(contacts))

           });
    });
    

    







