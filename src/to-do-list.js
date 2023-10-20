import { ToDoItem } from "./to-do-item.js";

export class ToDoList {
  constructor(title) {
    this.title = title;
    this.items = [];
  }

  createToDoItem(title, description, dueDate, priority) {
    const newItem = new ToDoItem(title, description, dueDate, priority);
    this.items.push(newItem);
    return newItem
  }

  createHTML() {
    const toDoList = document.createElement("button");
    toDoList.setAttribute('class', 'toDoList');
    toDoList.innerHTML = this.title;

    const listsContainer = document.getElementById("lists");
    listsContainer.appendChild(toDoList);

    toDoList.addEventListener('click', () => {
      const itemsFolder= document.getElementById('to-dos')
      itemsFolder.innerHTML = ""
      this.items.forEach(item => {
        item.createHTML()
      })
    })
  }

  markItemAdDone(index) {
    if (index >= 0 && index < this.items.length) {
      this.items[index].markAsDone();
    }
  }

  deleteToDoItem(index) {
    if (index >= 0 && index < this.items.length) {
      this.items.splice(index, 1);
    }
  }
}
