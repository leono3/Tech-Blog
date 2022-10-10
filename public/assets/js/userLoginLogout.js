// Signin elements
const usernameEl = document.getElementById('username-input');
const passwordEl = document.getElementById('password-input');
const signinBtn = document.getElementById('signin-btn');

signinBtn?.addEventListener('click', async (event) => {
    event.preventDefault();
    console.log('Btn pressed');
    username = usernameEl.value;
    password = passwordEl.value;
    // Check for valid user input
    if (username.trim().length === 0) {
        alert('Invalid Credentials');
        return;
    };
    if (password.trim().length === 0) {
        alert('Invalid Credentials');
        return;
    };

    try {
        // user route for signin
        const response = await fetch('/api/user/signin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username,
                password,
            })
        });

        await response.json();
        if (response.ok) {
            window.location.reload();
        };

    } catch (error) {
        console.log(error);
    }

});

// Signup elements
const newUsernameEl = document.getElementById('newUser-input');
const newPasswordEl = document.getElementById('newPassword-input');
const newPasswordConfirmEl = document.getElementById('password-input-confirm');
const signupBtn = document.getElementById('signup-btn');

signupBtn?.addEventListener('click', async (event) => {
    event.preventDefault();
    username = newUsernameEl.value;
    password = newPasswordEl.value;
    passwordConfirm = newPasswordConfirmEl.value;
    // Check for valid user input
    if (username.trim().length === 0) {
        alert('Invalid Credentials');
        return;
    };
    if (password.trim().length === 0) {
        alert('Invalid Credentials');
        return;
    };
    if (password !== passwordConfirm) {
        alert('Passwords do not match.');
        return;
    }

    try {
        // user route for signin
        const response = await fetch('/api/user/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username,
                password,
            })
        });

        await response.json();
        if (response.ok) {
            window.location.reload();
        };

    } catch (error) {
        console.log(error);
    }

});

// Signout Event
const signoutBtn = document.getElementById('signout-btn');

signoutBtn?.addEventListener('click', async (event) => {

    try {
        await fetch('/api/user/signout');
        window.location.href = '/';
    } catch (error) {
        console.log(error);
    };

});
