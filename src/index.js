import Todo from './script/todo';
import Project from './script/project';
import TodoDom from './script/todo-dom';
import './style/app.scss';

let todoProject = JSON.parse(window.localStorage.getItem('projects'));
if (todoProject == null) {
  todoProject = [];
  const todo1 = new Todo('Shopping', 'Buying groceries', 'medium', '02-12-2020');
  const project1 = new Project('Default Project');
  project1.setTodoList(todo1);
  todoProject.push(project1);
}

function updateLocalStorage(array) {
  window.localStorage.setItem('projects', JSON.stringify(array));
}

const todoDom = new TodoDom();

let currentProject = todoProject[todoProject.length - 1];

const addProject = document.getElementById('add-project');
const projectName = document.getElementById('projectName');
const projectList = document.getElementById('projectList');
const submitProject = document.getElementById('submit');
const createTodo = document.getElementById('create-todo');
const projectTitle = document.getElementById('project-title');
const tbody = document.getElementById('tbody');
const projectForm = document.getElementById('projectForm');
projectForm.style.display = 'none';

function addProjectForm() {
  if (projectForm.style.display === 'none') {
    projectForm.style.display = 'block';
  } else {
    projectForm.style.display = 'none';
  }
}

function getProject(project = null) {
  if (project === null) {
    return currentProject;
  }
  return todoProject[project];
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
    currentProject = getProject(parseInt(project.getAttribute('data-index'), 10));
    projectName.value = '';
  }
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
    title.value = '';
    description.value = '';
  }
  if (currentProject !== undefined) {
    projectTitle.textContent = currentProject.name;
    todoDom.renderTodo(currentProject, tbody);
  }
};

function displayProjectList() {
  projectList.innerHTML = '';
  todoProject.forEach((element, index) => {
    const div = document.createElement('div');
    div.setAttribute('data-index', index);
    div.textContent = element.name;
    projectList.appendChild(div);
  });
  todoItem();
}

function deleteProject(el) {
  if (el.classList.contains('delete')) {
    el.parentElement.parentElement.remove();
    const project = currentProject;
    const todoData = el.getAttribute('data-todo');
    project.todoList.splice(todoData, 1);
    updateLocalStorage(todoProject);
    displayProjectList();
  }
}


addProject.addEventListener('click', addProjectForm);
submitProject.addEventListener('click', getProjectName);
createTodo.addEventListener('click', todoItem);

projectList.addEventListener('click', (e) => {
  const currentProj = e.target;
  currentProject = getProject(parseInt(currentProj.getAttribute('data-index'), 10));
  projectTitle.textContent = currentProject.name;
  todoDom.renderTodo(currentProject, tbody);
});

document.addEventListener('DOMContentLoaded', displayProjectList);

document.querySelector('.table').addEventListener('click', (e) => {
  deleteProject(e.target);
});
