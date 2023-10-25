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

    toDoList.addEventListener('click', () => this.displayItems())
  }

  displayItems() {
    const itemsFolder= document.getElementById('to-dos')
    itemsFolder.innerHTML = ""

    const buttonsContainer= document.getElementById('buttons-container')
    buttonsContainer.innerHTML = ""

    const addItemButton = document.createElement('button')
    addItemButton.setAttribute('id', 'add-item-button')
    addItemButton.innerHTML = "Add To Do"
    buttonsContainer.appendChild(addItemButton)

    addItemButton.addEventListener('click', () => {
      const title = prompt('Title:');
      const description = prompt('Description');
      const dueDate = prompt('Due Date:');
      const priority = prompt('Priority:');
      const item = this.createToDoItem(title,description,dueDate,priority)
      const itemsFolder= document.getElementById('to-dos')
      itemsFolder.innerHTML = ""
      this.items.forEach((item, index) => {
        const onDelete = () => this.deleteToDoItem(index)
        item.createHTML(onDelete)
      })
    })

    const deleteList = document.createElement('button')
    deleteList.setAttribute('id', 'delete-list')
    deleteList.innerHTML = "Delete List"
    buttonsContainer.appendChild(deleteList)

    deleteList.addEventListener('click', () => {
      listsContainer.removeChild(toDoList);
      itemsFolder.innerHTML = "";
      this.deleteToDoList();
    });

    this.items.forEach((item, index) => {
      const onDelete = () => this.deleteToDoItem(index)
      item.createHTML(onDelete)
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

  deleteToDoList() {
    this.items = [];
    const buttonsContainer= document.getElementById('buttons-container')
    buttonsContainer.innerHTML = ""
  }
}
