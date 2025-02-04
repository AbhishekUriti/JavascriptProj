function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();

    if (taskText === "") return; // Prevent empty tasks

    let taskList = document.getElementById("taskList");

    // Create new task item
    let li = document.createElement("li");
    li.innerHTML = `
        <span onclick="toggleComplete(this)">${taskText}</span>
        <button onclick="removeTask(this)">❌</button>
    `;

    taskList.appendChild(li);
    taskInput.value = ""; // Clear input
}

// Toggle task completion
function toggleComplete(task) {
    task.parentElement.classList.toggle("completed");
}

// Remove task
function removeTask(task) {
    task.parentElement.remove();
}
