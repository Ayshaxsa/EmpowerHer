import { createNavbar } from './navbar.js';
import { createFooter } from './footer.js';

// Add Navbar at the top
document.body.prepend(createNavbar());

// Add Footer at the bottom
document.body.appendChild(createFooter());

// Add some content to Home page
const main = document.createElement('main');
main.innerHTML = `
    <h1>Welcome to the Todo App</h1>
    <p>Use the navigation above to signup, login, and view your todos.</p>
`;
document.body.insertBefore(main, document.body.querySelector('footer'));
