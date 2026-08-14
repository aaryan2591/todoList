import { newTodo } from "./modules/apply.js";
import { createDefaultProjects, newProject } from "./modules/projects.js";
import { createLayout, display, projectList } from "./modules/DOM.js";
import { saveProjects, loadProjects } from "./modules/storage.js";
import "./styles.css";

const projects = loadProjects() ?? createDefaultProjects();
let activeProjectId = projects[0].id;

const root = document.querySelector("#app");
const { addTaskBtn, addProjectBtn, sidebar, container } = createLayout(root);

function refresh() {
  const activeProject = projects.find((p) => p.id === activeProjectId);
  projectList(projects, activeProjectId, sidebar, (id) => {
    activeProjectId = id;
    refresh();
  });
  display(activeProject, container, refresh);
  saveProjects(projects);
}

addTaskBtn.addEventListener("click", () => {
  newTodo((task) => {
    const project = projects.find((p) => p.id === activeProjectId);
    project.todos.push(task);
    refresh();
  });
});

addProjectBtn.addEventListener("click", () => {
  newProject((project) => {
    projects.push(project);
    activeProjectId = project.id;
    refresh();
  });
});

refresh();
