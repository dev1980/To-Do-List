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

const addProject = document.getElementById('add-project');
const projectName = document.getElementById('projectName');
const projectList = document.getElementById('projectList');
const submitProject = document.getElementById('submit');

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
  }
  console.log(todoProject.length);
}

addProject.addEventListener('click', addProjectForm);
submitProject.addEventListener('click', getProjectName);

projectList.addEventListener('click', (e) => {
  const currentProject = e.target;
  console.log(todoProject[parseInt(currentProject.getAttribute('data-index'))].name);
  todoProject[parseInt(currentProject.getAttribute('data-index'))];
});

console.log('Message for webpack');
