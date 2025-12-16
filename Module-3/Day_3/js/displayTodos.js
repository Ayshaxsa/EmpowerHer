export function displayTodos(data) {
    const todoList = document.getElementById('todo-list');
    todoList.innerHTML = '';

    data.forEach(todo => {
        const li = document.createElement('li');
        li.textContent = `${todo.title} ${todo.completed ? '✅' : '❌'}`;
        todoList.appendChild(li);
    });
}
