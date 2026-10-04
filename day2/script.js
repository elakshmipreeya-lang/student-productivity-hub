const button = document.getElementById("addTaskButton");

button.addEventListener("click", function () {
    const taskList = document.getElementById("taskList");

    const newTask = document.createElement("li");

    newTask.textContent = "Learn JavaScript";

    taskList.appendChild(newTask);
});