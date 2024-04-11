const axios = require('axios');

async function getUserById(userId) {
    if (typeof userId !== 'string' || !isNaN(Number(userId))) {
        throw new Error("Invalid User ID");
    }

    const response = await axios.get(
        `https://suico-react-nodejs-render-firebase-hj4t.onrender.com/api/users/${userId}`
    );
    return response.data;
}

module.exports = getUserById