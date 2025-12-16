import { createNavbar, createFooter } from './navbar.js';
import { displayTodos } from './displayTodos.js';

document.body.prepend(createNavbar());
document.body.appendChild(createFooter());

// Check login
const user = JSON.parse(localStorage.getItem('loggedInUser'));
if (!user) {
    alert('Please login first');
    window.location.href = 'login.html';
}

// Fetch Todos
fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(data => displayTodos(data))
    .catch(err => console.error('Error fetching todos:', err));
