export class ToDoItem {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.isDone = false;
  }

  createHTML(onDelete) {
    const toDoItem = document.createElement("div");
    toDoItem.setAttribute('id', 'toDoItem');

    const titleElement = document.createElement("h2");
    titleElement.innerHTML = this.title;

    const descriptionElement = document.createElement("p");
    descriptionElement.innerHTML = this.description;

    const dueDate = document.createElement("p");
    dueDate.innerHTML = `due the: ${this.dueDate}`;

    const priority = document.createElement("p");
    priority.innerHTML = this.priority;

    const deleteButton = document.createElement('i')
    deleteButton.setAttribute('class', "fa-solid fa-trash fa-sm")
    toDoItem.appendChild(deleteButton)
    deleteButton.addEventListener('click', () => {
      toDoItem.remove()
      onDelete()
    })

    toDoItem.appendChild(titleElement);
    toDoItem.appendChild(descriptionElement);
    toDoItem.appendChild(dueDate);


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
