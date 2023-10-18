import { ToDoList } from "./to-do-list";
import './attributes/style.css'

const myToDoList = new ToDoList("My Daily Tasks").createHTML()




// const item = myToDoList.createToDoItem("Sleep","i want to sleep well tonight", "17.10.2023", "HIGH")
// item.createHTML()

// createHTML() {
//   const itemContainer = document.createElement("div");
//   itemContainer.setAttribute('id', 'todo-item');

//   const titleElement = document.createElement("h2");
//   titleElement.innerHTML = this.title;

//   const descriptionElement = document.createElement("p");
//   descriptionElement.innerHTML = this.description;

//   // You can add more elements for due date, priority, etc.

//   itemContainer.appendChild(titleElement);
//   itemContainer.appendChild(descriptionElement);

//   // Append the item container to the "lists" container
//   const toDoContainer = document.getElementById("to-dos");
//   toDoContainer.appendChild(itemContainer);
// }
