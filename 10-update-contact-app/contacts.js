const fs = require('fs');
const validator = require('validator');

const dirPath = './data';
if(!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath);
}

const dataPath = './data/contacts.json'
if(!fs.existsSync(dataPath)) {
    fs.writeFileSync(dataPath, '[]', 'utf-8');
}

const loadContact = () => {
    const file = fs.readFileSync('data/contacts.json', 'utf8');
    const contacts = JSON.parse(file);
    return contacts;
}

const simpanContact = (nama, email, noHP) => {
    const contact = {nama, email, noHP};
    // const file = fs.readFileSync('data/contacts.json', 'utf8');
    // const contacts = JSON.parse(file);
    const contacts = loadContact();

    const duplikat = contacts.find((contact) => contact.nama === nama);
    if (duplikat) {
        console.log('contact sudah terdaftar, gunakan nama lain');
        return false;
    }

    if(email) {
        if(!validator.isEmail(email)) {
            console.log('Email tidak valid');
            return false;
        }
    }

    if(!validator.isMobilePhone(noHP, 'id-ID')) {
        console.log('Nomor hp tidak valid');
        return false;
    }

    // console.log(validator.isMobilePhone('+6281234567', 'id-ID'));
    contacts.push(contact);
    //untuk menuliskan data ke file json
    fs.writeFileSync('data/contacts.json', JSON.stringify(contacts))

};

const listContact = () => {
    const contacts = loadContact();
    console.log('Daftar kontak :')
    contacts.forEach((contact, i) => {
        console.log(`${i + 1}. ${contact.nama} - ${contact.noHP}`);
    })
};
 
const detailContact = (nama) => {
    const contacts = loadContact();
    const contact = contacts.find(
        (contact) => contact.nama.toLowerCase() === nama.toLowerCase()
);

if(!contact) {
    console.log(`${nama} tidak ditemukan`)
    return false;
    }

    console.log(contact.nama);
    if (contact.email) {
        console.log(contact.email);
    }
    console.log(contact.noHP);

};

const removeContact = (nama) => {
    const contacts = loadcontact();
}


module.exports = {simpanContact, listContact, detailContact, removeContact};