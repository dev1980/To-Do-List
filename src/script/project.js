export class Project {
  constructor(name) {
    this._name = name;
    this.todoList = [];
  }

  get name() {
    return this._name;
  }
  
  addToDo(item){
    this.todoList.push(item);
  }
showList(){
    return this.todoList;
}

}
