export class Project {
  constructor(name) {
    this.name = name;
    this.todoList = [];
  }

  getName() {
    return this.name;
  }

  getTodoList() {
    return this.todoList;
  }

  setTodoList(item) {
    return this.todoList.push(item);
  }
}
