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
    toDoList.setAttribute('id', 'toDoList');
    toDoList.innerHTML = this.title;
    // Append the item container to the "lists" container
    const listsContainer = document.getElementById("lists");
    listsContainer.appendChild(toDoList);
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
