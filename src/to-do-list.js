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
