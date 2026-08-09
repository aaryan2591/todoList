import { editTodo } from "./apply.js";

export function createLayout(root) {
    const sidebar = document.createElement("div");
    sidebar.id = "project-list";

    const main = document.createElement("div");
    main.id = "main-content";

    const addProjectBtn = document.createElement("button");
    addProjectBtn.id = "add-project-btn";
    addProjectBtn.textContent = "Add Project";

    const addTaskBtn = document.createElement("button");
    addTaskBtn.id = "add-task-btn";
    addTaskBtn.textContent = "Add Task";

    const container = document.createElement("div");
    container.id = "todo-list";

    main.appendChild(addProjectBtn);
    main.appendChild(addTaskBtn);
    main.appendChild(container);

    root.appendChild(sidebar);
    root.appendChild(main);

    return { addTaskBtn, addProjectBtn, sidebar, container };
}

export function projectList(projects, activeProjectId, sidebarContainer, onSelect) {
    sidebarContainer.innerHTML = "";
    projects.forEach((proj) => {
        const item = document.createElement("div");
        item.textContent = proj.name;
        item.classList.toggle("active", proj.id === activeProjectId);
        item.addEventListener("click", () => onSelect(proj.id));
        sidebarContainer.appendChild(item);
    });
}

export function display(project, container, onChange) {
    container.innerHTML = "";
    project.todos.forEach((task, index) => {
        const card = document.createElement("div");
        card.classList.add("todoCard");
        card.dataset.priority = task.priority;
        card.classList.toggle("completed", task.completed);

        const completeCheckbox = document.createElement("input");
        completeCheckbox.type = "checkbox";
        completeCheckbox.checked = task.completed;
        completeCheckbox.addEventListener("change", () => {
            task.completed = completeCheckbox.checked;
            if (typeof onChange === "function") onChange();
        });

        const info = document.createElement("div");
        info.innerHTML = `
            <h3>${task.title}</h3>
            <p>Due: ${task.dueDate}</p>
            <p>Priority: ${task.priority}</p>
            <p>${task.description}</p>
        `;

        const editBtn = document.createElement("button");
        editBtn.textContent = "Edit";
        editBtn.addEventListener("click", () => {
            editTodo(task, () => {
                if (typeof onChange === "function") onChange();
            });
        });

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.addEventListener("click", () => {
            project.todos.splice(index, 1);
            if (typeof onChange === "function") onChange();
        });

        card.appendChild(completeCheckbox);
        card.appendChild(info);
        card.appendChild(editBtn);
        card.appendChild(deleteBtn);
        container.appendChild(card);
    });
}