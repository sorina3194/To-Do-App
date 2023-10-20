import { ToDoList } from "./to-do-list";
import './attributes/style.css'

const myToDoList = new ToDoList('HOME')
const myToDoList2 = new ToDoList('TODAY')

const item = myToDoList.createToDoItem("Sleep","i want to sleep well tonight", "17.10")
const item2 = myToDoList.createToDoItem("Code", "create to do list", "19,10")
const item3 = myToDoList.createToDoItem("Cod", "create to do list", "19,10")

myToDoList.createHTML()
myToDoList2.createHTML()

const addButton = document.getElementById('add-button')

addButton.addEventListener('click', () => {
  const title = prompt('Title:')
  const list = new ToDoList(title)
  list.createHTML()
})
