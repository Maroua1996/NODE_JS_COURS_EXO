const validator = require('validator');

// process.argv
console.log(process.argv);
const emails = process.argv[2];

for (let i = 0; i < emails.length; i++){
    const resultat = validator.isEmail(emails[i])?"ok": 'no';
    console.log(`${emails[i]}: ${resultat}`);
}