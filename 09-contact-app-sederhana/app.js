
//********************************************AKAN TERJADI CALL BACK HELL JIKA KITA TAMBAH PERTANYAAN*********************************************************
// rl.question('what is your name?', (nama) => {
//         rl.question('How old are you?', (umur) => {
//             rl.question('What is your email?', (email) => {
//                 console.log(`nama : ${nama}, umur : ${umur}`);
//                 console.log('Terima kasih sudah memasukkan data');
//                 const contact = {nama, umur, email};
//                 const file = fs.readFileSync('data/contacts.json', 'utf8');
//                 const contacts = JSON.parse(file);
//                 rl.close();


//                 contacts.push(contact);

//                 //untuk menuliskan data ke file json
//                 fs.writeFileSync('data/contacts.json', JSON.stringify(contacts))
//         });
//     });
// });

//***********************************SOLUSI (menggunakan async await)******************************************************8 */
// const pertanyaan1 = () => {
//     return new Promise((resolve, reject) => {
//         rl.question('what is your name?', (nama) => {
//             resolve(nama);
//          });
//     });
// };

// const pertanyaan2 = () => {
//     return new Promise((resolve, reject) => {
//         rl.question('what is your age?', (umur) => {
//             resolve(umur);
//          });
//     });
// };

// const pertanyaan3 = () => {
//     return new Promise((resolve, reject) => {
//         rl.question('what is your email?', (email) => {
//             resolve(email);
//          });
//     });
// };

// const main = async () => {
//     const nama = await pertanyaan1();
//     const umur = await pertanyaan2();
//     const email = await pertanyaan3();

//     const contact = {nama, umur, email};
//     const file = fs.readFileSync('data/contacts.json', 'utf8');
//     const contacts = JSON.parse(file);
//     contacts.push(contact);
//     //untuk menuliskan data ke file json
//     fs.writeFileSync('data/contacts.json', JSON.stringify(contacts))
//     rl.close();
// };

// main();

//*****************************************ASYNC AWAIT (lebih rapih vers)**************************************************/

const contacts = require('./contacts');
const main = async () => {
    const nama = await contacts.pertanyaan('What is your name?');
    const umur = await contacts.pertanyaan('How old are you?');
    const email = await contacts.pertanyaan('What is your email?');

    contacts.simpanContact(nama, umur, email);
};

main();


