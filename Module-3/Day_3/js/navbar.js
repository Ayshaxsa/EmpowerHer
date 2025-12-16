export function createNavbar() {
    const nav = document.createElement('nav');
    nav.innerHTML = `
        <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="signup.html">Signup</a></li>
            <li><a href="login.html">Login</a></li>
            <li><a href="todos.html">Todos</a></li>
        </ul>
    `;
    return nav;
}
