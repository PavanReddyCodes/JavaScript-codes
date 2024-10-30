const taskInput = document.getElementById("task-input");
const addTaskBtn = document.getElementById("add-task");
const taskList = document.getElementById("task-list");

addTaskBtn.addEventListener("click", addTask);

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        const li = document.createElement("li");
        li.classList.add("task");

        li.innerHTML = `
            <span>${taskText}</span>
            <span class="delete-btn">✖</span>
        `;
        
        li.querySelector(".delete-btn").addEventListener("click", () => {
            li.remove();
        });

    
        li.addEventListener("click", () => {
            li.classList.toggle("completed");
        });

        taskList.appendChild(li);
        taskInput.value = "";
    }
}
