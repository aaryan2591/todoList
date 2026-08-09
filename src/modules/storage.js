import { Project } from "./projects.js";

const STORAGE_KEY = "todoapp_projects";

export function saveProjects(projects) {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(projects));
    } catch (e) {
        console.error("Failed to save to localStorage:", e);
    }
}

export function loadProjects() {
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (!raw) return null; // nothing saved yet

        const parsed = JSON.parse(raw);

        return parsed.map((p) => {
            const project = new Project(p.name);
            project.id = p.id;           
            project.todos = p.todos;     
            return project;
        });
    } catch (e) {
        console.error("Failed to load from localStorage:", e);
        return null;
    }
}