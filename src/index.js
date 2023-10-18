import { ToDoList } from "./to-do-list";
import './attributes/style.css'

const myToDoList = new ToDoList("My Daily Tasks")
console.log(myToDoList)

const item = myToDoList.createToDoItem("Sleep","i want to sleep well tonight", "17.10.2023", "HIGH")
console.log(item)
