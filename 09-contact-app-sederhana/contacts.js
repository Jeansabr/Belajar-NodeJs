const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output:process.stdout
});

const dirPath = './data';
if(!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath);
}

const dataPath = './data/contacts.json'
if(!fs.existsSync(dataPath)) {
    fs.writeFileSync(dataPath, '[]', 'utf-8');
}

const pertanyaan = (pertanyaan) => {
    return new Promise((resolve, reject) => {
        rl.question(pertanyaan, (nama) => {
            resolve(nama);
         });
    });
};

const simpanContact = (nama, umur, email) => {
    const contact = {nama, umur, email};
    const file = fs.readFileSync('data/contacts.json', 'utf8');
    const contacts = JSON.parse(file);
    contacts.push(contact);
    //untuk menuliskan data ke file json
    fs.writeFileSync('data/contacts.json', JSON.stringify(contacts))
    rl.close();
};

module.exports = {pertanyaan, simpanContact};