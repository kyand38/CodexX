const login = async (userInfo) => {
    try {
        // Send a POST request to '/api/auth/login' with user login information in JSON format
        const response = await fetch('/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userInfo)
        });
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(`Error: ${errorData.message}`);
        }
        const data = await response.json();
        return data;
    }
    catch (err) {
        console.error('Error from user login:', err);
        return Promise.reject('Could not fetch user info');
    }
};
export const signup = async (formData) => {
    try {
        const response = await fetch('/api/auth/new', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(`Signup failed: ${errorData.message}`);
        }
        return await response.json();
    }
    catch (err) {
        console.error('Error from user signup:', err);
        return Promise.reject('Could not complete signup');
    }
};
export { login };
