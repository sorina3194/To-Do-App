export class ToDoItem {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.isDone = false;
  }

  createHTML(onDelete) {
    const toDoItem = document.createElement("div");
    toDoItem.setAttribute('class', 'card')
    toDoItem.setAttribute('id', 'toDoItem');

    const titleElement = document.createElement("h2");
    titleElement.innerHTML = this.title;
    toDoItem.appendChild(titleElement);

    const descriptionElement = document.createElement("p");
    descriptionElement.innerHTML = `DESCRIPTION: ${this.description}`;

    const dueDate = document.createElement("p");
    dueDate.innerHTML = `DUE DATE: ${this.dueDate}`;

    const priority = document.createElement("p");
    priority.innerHTML = `PRIORITY : ${this.priority}`;

    toDoItem.appendChild(descriptionElement);
    toDoItem.appendChild(dueDate);
    toDoItem.appendChild(priority);

    const deleteButton = document.createElement('i')
    deleteButton.setAttribute('class', "fa-solid fa-trash fa-sm")
    toDoItem.appendChild(deleteButton)


    deleteButton.addEventListener('click', () => {
      toDoItem.remove()
      onDelete()
    })

    const editButton = document.createElement('i')
    editButton.setAttribute('class', 'fa-solid fa-pen-to-square')
    toDoItem.appendChild(editButton)

    const saveButton = document.createElement('i')
    saveButton.setAttribute('class','fa-solid fa-square-check')
    saveButton.style.display = "none"
    toDoItem.appendChild(saveButton)

    editButton.addEventListener('click', () => {
      toDoItem.contentEditable = true;
      saveButton.style.display = "block"
      saveButton.addEventListener('click', () => {
        this.title= titleElement.innerHTML
        this.description = descriptionElement.innerHTML.replace('DESCRIPTION: ', "")
        this.dueDate = dueDate.innerHTML.replace('DUE DATE: ', "")
        this.priority = priority.innerHTML.replace('PRIORITY: ')
        saveButton.style.display="none"
      })

    })

    const toDoContainer = document.getElementById("to-dos");
    toDoContainer.appendChild(toDoItem);

  }

  markAsDone() {
    this.isDone = true;
  }

}
