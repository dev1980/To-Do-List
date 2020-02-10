import './style/style.css';
import './script/todo';
import './script/project';

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
    project.textContent = projectName.value;
    projectList.appendChild(project);
  }
}

addProject.addEventListener('click', addProjectForm);
submitProject.addEventListener('click', getProjectName);

console.log('Message for webpack');
