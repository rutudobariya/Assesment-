document.addEventListener("DOMContentLoaded", function() {
    const addTodoButton = document.getElementById("addTodoBtn");
    const newTodoInput = document.getElementById("newTodo");
    const todoList = document.getElementById("todoList");

    addTodoButton.addEventListener("click", function() {
        const todoText = newTodoInput.value.trim();
        if (todoText !== "") {
            const todoItem = createTodoItem(todoText);
            todoList.appendChild(todoItem);
            newTodoInput.value = "";
        }
    });

    function createTodoItem(text) {
        const listItem = document.createElement("li");
        listItem.className = "list-group-item d-flex justify-content-between align-items-center";

        const todoText = document.createTextNode(text);
        listItem.appendChild(todoText);

        const deleteButton = document.createElement("button");
        deleteButton.className = "btn btn-danger btn-sm";
        deleteButton.innerHTML = "Delete";
        deleteButton.addEventListener("click", function() {
            listItem.remove();
        });

        listItem.appendChild(deleteButton);
        return listItem;
    }
});