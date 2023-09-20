let task_inpt = document.getElementById('task_inpt');
let add_btn = document.getElementById('add_btn');
let tasks = document.getElementById('tasks');

task_inpt.focus();

let data = JSON.parse(localStorage.getItem("data")) || [];
let lastId = data.length > 0 ? data[data.length - 1].id : 0;

let inputed_task = () => {
    tasks.innerHTML = data.map((x) => {
        return `<hr><div id="${x.id}" class="flex justify-between"><p>${x.task}</p> <button data-id="${x.id}" class="bi bi-trash3-fill text-red-600 delete-btn"></button></div><br>`;
    }).join("");
}

const deleteTask = (id) => {
    data = data.filter((task) => task.id !== id);
    localStorage.setItem("data", JSON.stringify(data));
    inputed_task();
};

add_btn.addEventListener('click', () => {
    let task = {
        id: lastId + 1,
        task: task_inpt.value
    }

    if (task_inpt.value !== "") {
        data.push(task);
        localStorage.setItem("data", JSON.stringify(data)); 
        lastId++;
    } else {
        alert("Please Enter Task");
    }

    inputed_task();
    task_inpt.value = "";
    task_inpt.focus();
});

tasks.addEventListener('click', (event) => {
    if (event.target.classList.contains('delete-btn')) {
        const taskId = parseInt(event.target.getAttribute('data-id'));
        deleteTask(taskId);
    }
});

inputed_task();
