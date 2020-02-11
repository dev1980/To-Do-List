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
const tbody = document.getElementById('tbody');
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

function displayProjectList() {
  console.log(todoProject.length);
  projectList.innerHTML = '';
  todoProject.forEach((element, index) => {
    const div = document.createElement('div');
    div.setAttribute('data-index', index);
    div.textContent = element.name;
    projectList.appendChild(div);
  });
}

addProject.addEventListener('click', addProjectForm);
submitProject.addEventListener('click', getProjectName);
createTodo.addEventListener('click', () => {
  const todo = new Todo('Shopping', 'Buying grocries', '10-02-2020', 'medium');
  if (getProject() != undefined) {
    console.log(getProject().todoList);
    getProject().todoList.push(todo);
    updateLocalStorage(todoProject);
  }
});

projectList.addEventListener('click', (e) => {
  const currentProj = e.target;
  todoProject[parseInt(currentProj.getAttribute('data-index'))];
  currentProject = getProject(parseInt(currentProj.getAttribute('data-index')));
  console.log(`${currentProject} ${parseInt(currentProj.getAttribute('data-index'))}`);
  currentProject.todoList.forEach(todo => {
    let uiString = `<tr>
    <td>${todo.title}</td>
    <td>${todo.description}</td>
    <td>${todo.title}/td>
    <td>${todo.title}</td>
    <td>X</td>
  </tr>`
  tbody.innerHTML += uiString;
  })
});

document.addEventListener('DOMContentLoaded', displayProjectList);
// document.onload = displayProjectList();

console.log('Message for webpack');
