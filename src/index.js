import './style/style.css';
import './script/todo';
import './script/project';

const addProject = document.getElementById('add-project');

function addProjectForm() {
  const projectForm = document.getElementById('projectForm');
  if (projectForm.style.display === 'none') {
    projectForm.style.display = 'block';
  } else {
    projectForm.style.display = 'none';
  }
}

addProject.addEventListener('click', addProjectForm);

console.log('Message for webpack');
