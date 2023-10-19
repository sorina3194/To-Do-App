export class ToDoItem {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.isDone = false;
  }
  createHTML() {
    const toDoItem = document.createElement("div");
    toDoItem.setAttribute('id', 'toDoItem');

    const titleElement = document.createElement("h2");
    titleElement.innerHTML = this.title;

    const descriptionElement = document.createElement("p");
    descriptionElement.innerHTML = this.description;

    // You can add more elements for due date, priority, etc.

    toDoItem.appendChild(titleElement);
    toDoItem.appendChild(descriptionElement);

    // Append the item container to the "lists" container
    const toDoContainer = document.getElementById("to-dos");
    toDoContainer.appendChild(toDoItem);
  }

  markAsDone() {
    this.isDone = true;
  }

  updateTitle(newTitle) {
    this.title = newTitle;
  }

  updateDescription(newDescription) {
    this.description = newDescription;
  }

  updateDueDate(newDueDate) {
    this.dueDate = newDueDate;
  }

  updatePriority(newPriority) {
    this.priority = newPriority
  }
}
