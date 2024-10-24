window.addEventListener("load", () => {
    const form = document.querySelector("#new-task-form");
    const listEl = document.querySelector("#tasks");

    // Create input for new task
    const input = document.createElement("input");
    input.type = "text";
    input.id = "new-task-input";
    input.placeholder = "What do you have planned?";

    // Create submit button
    const submitButton = document.createElement("input");
    submitButton.type = "submit";
    submitButton.id = "new-task-submit";
    submitButton.value = "Add Task";

    // Append input and button to the form
    form.appendChild(input);
    form.appendChild(submitButton);

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const task = input.value;

        if (!task) {
            alert("Please fill out the task");
            return;
        }

        const taskEl = document.createElement("div");
        taskEl.classList.add("task");

        const taskContentEl = document.createElement("div");
        taskContentEl.classList.add("content");

        const taskInputEl = document.createElement("input");
        taskInputEl.classList.add("text");
        taskInputEl.type = "text";
        taskInputEl.value = task;
        taskInputEl.setAttribute("readonly", "readonly");
        taskContentEl.appendChild(taskInputEl);
        taskEl.appendChild(taskContentEl);

        // Create actions
        const actionsEl = document.createElement("div");
        actionsEl.classList.add("actions");

        const editButton = document.createElement("button");
        editButton.classList.add("edit");
        editButton.innerText = "Edit";

        const deleteButton = document.createElement("button");
        deleteButton.classList.add("delete");
        deleteButton.innerText = "Delete";

        actionsEl.appendChild(editButton);
        actionsEl.appendChild(deleteButton);
        taskEl.appendChild(actionsEl);

        listEl.appendChild(taskEl);

        // Clear input
        input.value = '';

        // Edit functionality
        editButton.addEventListener("click", () => {
            if (taskInputEl.hasAttribute("readonly")) {
                taskInputEl.removeAttribute("readonly");
                taskInputEl.focus();
                editButton.innerText = "Save";
            } else {
                taskInputEl.setAttribute("readonly", "readonly");
                editButton.innerText = "Edit";
            }
        });

        // Delete functionality
        deleteButton.addEventListener("click", () => {
            listEl.removeChild(taskEl);
        });
    });
});
