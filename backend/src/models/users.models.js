const admin = require('firebase-admin');
const serviceAccount = require('../../serviceAccountKey.json')

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

const User = {
    getAll: async () => {
        const querySnapshot = await db.collection("Users").get();
        return querySnapshot.docs.map(doc => doc.data());
    }
};

module.exports = User;