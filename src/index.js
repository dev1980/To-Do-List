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
  if (projectBtn === 'none') {
    projectForm.style.display = 'block';
  } else {
    projectForm.style.display = 'none';
  }
}

function getProjectName() {
  if (projectName.value !== '') {
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

function renderTodo(currProject) {
  tbody.innerHTML = '';
  currProject.todoList.forEach((todo) => {
    const uiString = `<tr>
    <td>${todo.title}</td>
    <td>${todo.description}</td>
    <td>${todo.priority}</td>
    <td>${todo.duedate}</td>
    <td>X</td>
  </tr>`;
    tbody.innerHTML += uiString;
  });
}

const todoItem = () => {
  const title = document.getElementById('title');
  const description = document.getElementById('description');
  const priority = document.getElementById('priority');
  const duedate = document.getElementById('duedate');
  const todo = new Todo(title.value, description.value, priority.value, duedate.value);
  if (getProject() !== undefined) {
    getProject().todoList.push(todo);
    updateLocalStorage(todoProject);
  }
  renderTodo(currentProject);
};


addProject.addEventListener('click', addProjectForm);
submitProject.addEventListener('click', getProjectName);
createTodo.addEventListener('click', todoItem);

projectList.addEventListener('click', (e) => {
  const currentProj = e.target;
  todoProject[parseInt(currentProj.getAttribute('data-index'))];
  currentProject = getProject(parseInt(currentProj.getAttribute('data-index')));
  console.log(`${currentProject} ${parseInt(currentProj.getAttribute('data-index'))}`);
  renderTodo(currentProject);
});

document.addEventListener('DOMContentLoaded', displayProjectList);
// document.onload = displayProjectList();

console.log('Message for webpack');
