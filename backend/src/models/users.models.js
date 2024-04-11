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
        return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    },

    createUser: async (userData) => {

        const hashedPassword = await bcrypt.hash(userData.password, 10);

        const data = {
            // id: userData.id,
            firstname: userData.firstname,
            lastname: userData.lastname,
            email: userData.email,
            password: hashedPassword,
            role: userData.role
        };

        const docRef = await db.collection("Users").add(data);

        return { userId: docRef.id, message: 'User Created' };
    },

    loginUser: async (loginData) => {
        const { email, password } = loginData;

        const userSnapshot = await db.collection("Users").where("email", "==", email).get();
        if (userSnapshot.empty) {
            throw new Error("User not found");
        }

        const userDoc = userSnapshot.docs[0];
        const userData = userDoc.data();
        const userId = userDoc.id;

        const passwordMatch = await bcrypt.compare(password, userData.password);
        if (!passwordMatch) {
            throw new Error("Incorrect password");
        }

        return { userData, userId };
    },

    updateUser: async (updateData) => {
        const { id, firstname, lastname, email, password, role } = updateData;

        const newData = {};

        if (firstname !== undefined) newData.firstname = firstname;
        if (lastname !== undefined) newData.lastname = lastname;
        if (email !== undefined) newData.email = email;
        if (password !== undefined) newData.password = await bcrypt.hash(password, 10);
        if (role !== undefined) newData.role = role;

        if (Object.keys(newData).length === 0) {
            throw new Error('No fields to update');
        }

        await db.collection("Users").doc(id).update(newData);

        return { message: 'User Updated' };
    },

    deleteUser: async (userId) => {
        const userRef = db.collection("Users").doc(userId);

        const userDoc = await userRef.get();
        if (!userDoc.exists) {
            throw new Error("User not found");
        }

        await userRef.delete();

        return { message: 'User Deleted' };
    }
};

module.exports = User;