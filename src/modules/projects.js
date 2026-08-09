export class Project {
    constructor(name) {
        this.id = crypto.randomUUID();
        this.name = name;
        this.todos = [];
    }
}

export function createDefaultProjects() {
    return [new Project("Chores")];
}

export function newProject(onSubmit) {
    const newDialog = document.createElement("dialog");
    const myform = document.createElement("form");

    const head = document.createElement("header");
    head.textContent = "Add project";

    const inname = document.createElement("div");
    inname.innerHTML = `
        <label for="projectname">Project name:</label>
        <input type="text" id="projectname" required>
    `;

    const btnrow = document.createElement("div");
    btnrow.innerHTML = `
        <button type="submit" id="submit">Create project</button>
        <button type="button" id="cancel">Cancel</button>
    `;

    myform.appendChild(head);
    myform.appendChild(inname);
    myform.appendChild(btnrow);
    newDialog.appendChild(myform);
    document.body.appendChild(newDialog);

    const cancelbtn = btnrow.querySelector("#cancel");
    cancelbtn.addEventListener("click", () => {
        newDialog.close();
        newDialog.remove();
    });

    myform.addEventListener("submit", (e) => {
        e.preventDefault();
        const name = myform.querySelector("#projectname").value;

        const project = new Project(name);
        if (typeof onSubmit === "function") {
            onSubmit(project);
        }

        newDialog.close();
        newDialog.remove();
    });

    newDialog.showModal();
}