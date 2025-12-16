import { createNavbar, createFooter } from './navbar.js';

document.body.prepend(createNavbar());
document.body.appendChild(createFooter());

const form = document.getElementById('login-form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        localStorage.setItem('loggedInUser', JSON.stringify(user));
        window.location.href = 'todos.html';
    } else {
        alert('Invalid credentials');
    }
});
