const axios = require('axios');
const getUserById = require('../functions/async');

jest.mock('axios');

describe('Testing getUserById function', () => {
    test('fetches user data by document id from the backend server', async () => {
        const userId = "EZEbWOLpKjOrHQsnmSjD";
        const userData = { firstname: "Homer" };

        axios.get.mockResolvedValue({ data: userData }); 

        const result = await getUserById(userId); 

        expect(result).toEqual(userData); 
        expect(axios.get).toHaveBeenCalledWith(
            `https://suico-react-nodejs-render-firebase-hj4t.onrender.com/api/users/${userId}`
        ); 
    });
});