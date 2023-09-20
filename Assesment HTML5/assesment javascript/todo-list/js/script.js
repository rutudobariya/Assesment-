document.addEventListener("DOMContentLoaded", function () {
    const todoList = document.getElementById("todo-list");
    const newTodoInput = document.getElementById("new-todo");
    const addBtn = document.getElementById("add-btn");
  
    addBtn.addEventListener("click", function () {
      const todoText = newTodoInput.value.trim();
      if (todoText !== "") {
        addTodoItem(todoText);
        newTodoInput.value = "";
      }
    });
  
    newTodoInput.addEventListener("keypress", function (event) {
      if (event.key === "Enter") {
        addBtn.click();
      }
    });
  
    function addTodoItem(text) {
      const li = document.createElement("li");
      li.innerText = text;
      todoList.appendChild(li);
    }
  });
  