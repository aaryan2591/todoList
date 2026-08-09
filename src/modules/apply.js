class todo{
    constructor(title,dueDate,priority,description,completed = false){
        this.title = title;
        this.dueDate = dueDate;
        this.priority = priority;
        this.description = description;
        this.completed = completed;
    }
}

function buildTodoForm(headerText, submitText, existingTask, onSubmit) {
    const newDialog = document.createElement("dialog");
    const myform = document.createElement("form");

    const head = document.createElement("header");
    head.textContent = headerText;

    const intitle = document.createElement("div");
    intitle.innerHTML = `
        <label for="title">Title:</label>
        <input type = "text" id = "title" required>
    `;
    const indate = document.createElement("div");
    indate.innerHTML = `
        <label for="duedate">Due Date:</label>
        <input type = "date" id = "duedate" required>
    `;
    const inpriority = document.createElement("div");
    inpriority.innerHTML = `
        <label for="priority">Priority:</label>
        <select id = "priority" name = "priority">
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
        </select>
    `;
    const indescription = document.createElement("div");
    indescription.innerHTML = `
        <label for="description">Description: </label>
        <input type="text" id="description">
    `;
    const btnrow = document.createElement("div");
    btnrow.innerHTML = `
        <button type="submit" id="submit">${submitText}</button>
        <button type="button" id="cancel">Cancel</button>
    `;

    myform.appendChild(head);
    myform.appendChild(intitle);
    myform.appendChild(indate);
    myform.appendChild(inpriority);
    myform.appendChild(indescription);
    myform.appendChild(btnrow);
    newDialog.appendChild(myform);
    document.body.appendChild(newDialog);

    if (existingTask) {
        myform.querySelector("#title").value = existingTask.title;
        myform.querySelector("#duedate").value = existingTask.dueDate;
        myform.querySelector("#priority").value = existingTask.priority;
        myform.querySelector("#description").value = existingTask.description;
    }

    const cancelbtn = btnrow.querySelector("#cancel");
    cancelbtn.addEventListener('click', () => {
        newDialog.close();
        newDialog.remove();
    });

    myform.addEventListener("submit", (e) => {
        e.preventDefault();
        const title = myform.querySelector("#title").value;
        const dueDate = myform.querySelector("#duedate").value;
        const priority = myform.querySelector("#priority").value;
        const description = myform.querySelector("#description").value;

        if (typeof onSubmit === "function") {
            onSubmit({ title, dueDate, priority, description });
        }

        newDialog.close();
        newDialog.remove();
    });

    newDialog.showModal();
}

export function newTodo(onSubmit) {
    buildTodoForm("Add task", "Create task", null, (data) => {
        const task = new todo(data.title, data.dueDate, data.priority, data.description);
        onSubmit(task);
    });
}

export function editTodo(existingTask, onSubmit) {
    buildTodoForm("Edit task", "Save changes", existingTask, (data) => {
        existingTask.title = data.title;
        existingTask.dueDate = data.dueDate;
        existingTask.priority = data.priority;
        existingTask.description = data.description;
        onSubmit(existingTask);
    });
}