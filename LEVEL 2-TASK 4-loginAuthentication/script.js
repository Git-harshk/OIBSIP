function showLoginForm() {
    document.getElementById('registerForm').style.display = 'none';
    document.getElementById('loginForm').style.display = 'block';
    document.getElementById('securedPage').style.display = 'none';
    document.getElementById('message').innerText = '';
}

function showRegisterForm() {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('registerForm').style.display = 'block';
    document.getElementById('securedPage').style.display = 'none';
    document.getElementById('message').innerText = '';
}

function register() {
    const username = document.getElementById('registerUsername').value;
    const password = document.getElementById('registerPassword').value;
    
    if (!username || !password) {
        showMessage('Please enter both username and password.');
        return;
    }

    const users = JSON.parse(localStorage.getItem('users')) || {};
    
    if (users[username]) {
        showMessage('Username already exists!');
        return;
    }

    users[username] = password; // Store the password directly for simplicity
    localStorage.setItem('users', JSON.stringify(users));
    showMessage('Registration successful! Please login.');
    showLoginForm();
}

function login() {
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    const users = JSON.parse(localStorage.getItem('users')) || {};
    
    if (users[username] && users[username] === password) {
        document.getElementById('welcomeUsername').innerText = username;
        document.getElementById('loginForm').style.display = 'none';
        document.getElementById('registerForm').style.display = 'none';
        document.getElementById('securedPage').style.display = 'block';
        document.getElementById('message').innerText = '';
    } else {
        showMessage('Invalid username or password.');
    }
}

function logout() {
    showLoginForm();
    showMessage('You have been logged out!');
}

function showMessage(message) {
    document.getElementById('message').innerText = message;
}
