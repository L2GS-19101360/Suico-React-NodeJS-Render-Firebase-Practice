const axios = require('axios');
const getUserById = require('../functions/async');

jest.mock('axios');

describe('Testing getUserById function', () => {
    test('fetches user data by document id using string from the backend server', async () => {
        const userId = "EZEbWOLpKjOrHQsnmSjD";
        const userData = { firstname: "Homer" };

        axios.get.mockResolvedValue({ data: userData });

        const result = await getUserById(userId);

        expect(result).toEqual(userData);
        expect(axios.get).toHaveBeenCalledWith(
            `https://suico-react-nodejs-render-firebase-hj4t.onrender.com/api/users/${userId}`
        );
    });

    test('fetches user data by wrong document id from the backend server', async () => {
        const userId = "joGIy0gWbCvszsAG2zLV";
        const userData = { firstname: "Homer" };

        axios.get.mockResolvedValue({ data: userData });

        const result = await getUserById(userId);

        expect(result).toEqual(userData);
        expect(axios.get).toHaveBeenCalledWith(
            `https://suico-react-nodejs-render-firebase-hj4t.onrender.com/api/users/${userId}`
        );
    });

    test('fetches user data by document id but wrong data from the backend server', async () => {
        const userId = "EZEbWOLpKjOrHQsnmSjD";
        const userData = { firstname: "Peter" };

        axios.get.mockResolvedValue({ data: userData });

        const result = await getUserById(userId);

        expect(result).toEqual(userData);
        expect(axios.get).toHaveBeenCalledWith(
            `https://suico-react-nodejs-render-firebase-hj4t.onrender.com/api/users/${userId}`
        );
    });

    test('fetches user data by document id using number from the backend server', async () => {
        const userId = 1;
        const userData = { firstname: "Homer" };

        await expect(getUserById(userId)).rejects.toThrow("Invalid User ID");
    });

    test('fetches user data by document id using character from the backend server', async () => {
        const userId = '1';
        const userData = { firstname: "Homer" };

        await expect(getUserById(userId)).rejects.toThrow("Invalid User ID");
    });
});