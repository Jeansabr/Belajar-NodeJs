//mengambil argument dari command line
//console.log(process.argv[2]);
const yargs = require('yargs');
const contacts = require('./contacts.js');

// yargs.command(
//     'add', 
//     'menambahkan contact baru', 
//     () => {}, 
//     (argv) => {console.log(argv.nama);
//     }
// );

yargs.command({
    command: 'add',
    describe: 'menambahkan contact baru',
    builder: {
        nama: {
            describe: 'Nama Lengkap',
            demandOption: true,
            type: 'string',
        },
        email: {
            describe:'email',
            demandOption: false,
            type: 'string',
        },
        noHP: {
            describe: 'Nomor Handphone',
            demandOption: true,
            type: 'String',
        },
    },
    handler(argv) {
        contacts.simpanContact(argv.nama, argv.email, argv.noHP);
    },
}).demandCommand();


//menampilkan semua data 
yargs.command({
    command: 'list',
    describe: 'Menampilkan semua contact',
    handler() {
        contacts.listContact();
    }
});

//menampilkan detail data
yargs.command({
    command: 'detail',
    describe: 'Menampilkan detail sebuah contact berdasarkan nama',
    builder: {
        nama: {
            describe: 'Nama lengkap',
            demandOption: true,
            type: 'string',
        },
    },
    handler(argv) {
        contacts.detailContact(argv.nama);
    },
});

//menghapus data
yargs.command({
    command: 'delete',
    describe: 'Menghapus sebuah contact berdasarkan nama',
    builder: {
        nama: {
            describe: 'Nama lengkap',
            demandOption: true,
            type: 'string',
        },
    },
    handler(argv) {
        contacts.removeContact(argv.nama);
    },
});

yargs.parse();