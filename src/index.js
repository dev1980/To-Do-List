import './style/style.css';
import { Todo } from './script/todo';
import { Project } from './script/project';

let todoProject = JSON.parse(window.localStorage.getItem('projects'));
if (todoProject == null) {
  todoProject = [];
}

function updateLocalStorage(array) {
  window.localStorage.setItem('projects', JSON.stringify(array));
}

let currentProject = todoProject[todoProject.length - 1];

const addProject = document.getElementById('add-project');
const projectName = document.getElementById('projectName');
const projectList = document.getElementById('projectList');
const submitProject = document.getElementById('submit');
const createTodo = document.getElementById('create-todo');

function addProjectForm() {
  console.log('add project clicked');
  const projectForm = document.getElementById('projectForm');
  const projectBtn = projectForm.style.display;
  if (projectBtn == 'none') {
    projectForm.style.display = 'block';
  } else {
    projectForm.style.display = 'none';
  }
}

function getProjectName() {
  if (projectName.value != '') {
    const project = document.createElement('div');
    project.setAttribute('data-index', (todoProject.length - 1) + 1);
    project.textContent = projectName.value;
    const projectObj = new Project(projectName.value);
    todoProject.push(projectObj);
    updateLocalStorage(todoProject);
    projectList.appendChild(project);
    todoProject[parseInt(project.getAttribute('data-index'))];
    currentProject = getProject(parseInt(project.getAttribute('data-index')));
  }
  console.log(todoProject.length);
}

function getProject(project = null) {
  if (project === null) {
    return currentProject;
  }
  return todoProject[project];
}

addProject.addEventListener('click', addProjectForm);
submitProject.addEventListener('click', getProjectName);
createTodo.addEventListener('click', () => {
  const todo = new Todo('Shopping', 'Buying grocries', '10-02-2020', 'medium');
  if (getProject() != undefined) {
    console.log(getProject().todoList);
    getProject().todoList.push(todo);
  }
});

projectList.addEventListener('click', (e) => {
  const currentProj = e.target;
  todoProject[parseInt(currentProj.getAttribute('data-index'))];
  currentProject = getProject(parseInt(currentProj.getAttribute('data-index')));
});

console.log('Message for webpack');
