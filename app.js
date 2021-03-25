const validator = require('validator');


const emails = ['cat', 'twitter.com','tomorrow@gmail.com','14752','nodejs@dream.fr' ];

for (let i = 0; i < emails.length; i++){
    const resultat = validator.isEmail(emails[i])?"ok": 'no';
    console.log(`${emails[i]}: ${resultat}`);
}