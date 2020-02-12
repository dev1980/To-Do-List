/* eslint-disable no-param-reassign */
const TodoDom = (() => {
  function renderTodo(currProject, element) {
    element.innerHTML = '';
    currProject.todoList.forEach((todo, index) => {
      const uiString = `<tr data-todo="${index}">
      <td>${todo.title}</td>
      <td>${todo.description}</td>
      <td>${todo.priority}</td>
      <td>${todo.dueDate}</td>
      <td><input type="checkbox" name="${todo.title}" unchecked></td>
      <td><a href="#" class="btn btn-small delete" >X</a></td>
    </tr>`;
      if (todo.title !== '' && todo.description !== '') {
        element.innerHTML += uiString;
      }
    });
  }
  return { renderTodo };
});

export default TodoDom;
