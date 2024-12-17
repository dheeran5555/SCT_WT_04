// Add a new task when the button is clicked
document.getElementById("addTaskBtn").addEventListener("click", addTask);

function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();
    const taskDate = document.getElementById("taskDate").value;

    if (taskText === "") return;  // Don't add empty tasks

    const li = document.createElement("li");

    // Task text element
    const taskTextElement = document.createElement("span");
    taskTextElement.textContent = taskText;

    // Task date element
    const dateElement = document.createElement("span");
    dateElement.className = "date";
    dateElement.textContent = taskDate ? `Due: ${taskDate}` : "No date set";

    // Delete button for each task
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete-btn";
    deleteBtn.addEventListener("click", () => {
        li.remove();
    });

    // Append the task text, date, and delete button to the list item
    li.appendChild(taskTextElement);
    li.appendChild(dateElement);
    li.appendChild(deleteBtn);

    // Append the task item to the task list
    document.getElementById("taskList").appendChild(li);

    // Clear input fields
    taskInput.value = "";
    document.getElementById("taskDate").value = "";
}
