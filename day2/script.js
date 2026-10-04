const form = document.getElementById("taskForm");
const input = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const taskCount = document.getElementById("taskCount");


form.addEventListener("submit", function(event) {

    event.preventDefault();

    const taskText = input.value.trim();

    if (taskText === "") {
        return;
    }


    // Create the task
    const newTask = document.createElement("li");

    newTask.textContent = taskText;


    // Create delete button
    const deleteButton = document.createElement("button");

    deleteButton.textContent = "Delete";


    // Delete task when button is clicked
    deleteButton.addEventListener("click", function() {

        newTask.remove();

        updateTaskCount();

    });


    // Put delete button inside the task
    newTask.appendChild(deleteButton);


    // Put task inside the task list
    taskList.appendChild(newTask);


    // Clear input
    input.value = "";


    // Update counter
    updateTaskCount();

});


function updateTaskCount() {

    const numberOfTasks = taskList.children.length;

    taskCount.textContent = numberOfTasks;

}