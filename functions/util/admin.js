const admin = require('firebase-admin');

admin.initializeApp({
    // credential: admin.credential.cert(require('../../key/admin.json')),
    storageBucket: "gs://swirlfeed-609dd.appspot.com"
});

const db = admin.firestore();

module.exports = {admin, db};