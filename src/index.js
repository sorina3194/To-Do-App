import { ToDoList } from "./to-do-list";
import './attributes/style.css'

const myToDoList = new ToDoList('HOME')
const myToDoList2 = new ToDoList('TODAY')

const item = myToDoList.createToDoItem("Sleep","i want to sleep well tonight", "17.10","high")
const item2 = myToDoList.createToDoItem("Code", "create to do list", "19.10", "high")
const item3 = myToDoList.createToDoItem("Cod", "create to do list", "19.10", "high")

myToDoList.createHTML()
myToDoList2.createHTML()

const addListButton = document.getElementById('add-list-button')

addListButton.addEventListener('click', () => {
  const title = prompt('Title:')
  const list = new ToDoList(title)
  list.createHTML()
})

const addItemButton = document.getElementById('add-item-button')

addItemButton.addEventListener('click', () => {
  const title = prompt('Title:');
  const description = prompt('Description');
  const dueDate = prompt('Due Date:');
  const priority = prompt('Priority:');
  const item = myToDoList2.createToDoItem(title,description,dueDate,priority)
})
