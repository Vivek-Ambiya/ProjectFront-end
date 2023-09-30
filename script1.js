document.addEventListener("DOMContentLoaded", function() {
    const taskInput = document.getElementById("taskInput");
    const addTaskButton = document.getElementById("addTask");
    const taskList = document.getElementById("taskList");

    // Function to add a new task
    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            const listItem = document.createElement("li");
            listItem.innerHTML = `
                ${taskText}
                <button class="delete-btn">Delete</button>
            `;
            taskList.appendChild(listItem);
            taskInput.value = "";

            // Add event listener to the delete button
            const deleteButton = listItem.querySelector(".delete-btn");
            deleteButton.addEventListener("click", function() {
                listItem.remove();
            });
        }
    }

    // Event listener for adding a new task
    addTaskButton.addEventListener("click", addTask);

    // Event listener for adding a new task when Enter key is pressed
    taskInput.addEventListener("keyup", function(event) {
        if (event.key === "Enter") {
            addTask();
        }
    });
});
