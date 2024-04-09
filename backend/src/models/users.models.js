const admin = require('firebase-admin');
const serviceAccount = require('../../serviceAccountKey.json')
const bcrypt = require('bcrypt');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

const User = {
    getAll: async () => {
        const querySnapshot = await db.collection("Users").get();
        return querySnapshot.docs.map(doc => doc.data());
    },

    createUser: async (userData) => {

        const hashedPassword = await bcrypt.hash(userData.password, 10);

        const data = {
            id: userData.id,
            firstname: userData.firstname,
            lastname: userData.lastname,
            email: userData.email,
            password: hashedPassword,
            role: userData.role
        };

        return db.collection("Users").doc(data.id.toString()).set(data);
    },

    loginUser: async (loginData) => {
        const { email, password } = loginData;

        const userSnapshot = await db.collection("Users").where("email", "==", email).get();
        if (userSnapshot.empty) {
            throw new Error("User not found");
        }

        const userDoc = userSnapshot.docs[0];
        const userData = userDoc.data();

        const passwordMatch = await bcrypt.compare(password, userData.password);
        if (!passwordMatch) {
            throw new Error("Incorrect password");
        }

        return userData;
    }
};

module.exports = User;