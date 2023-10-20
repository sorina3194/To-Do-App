import { ToDoList } from "./to-do-list";
import './attributes/style.css'

const myToDoList = new ToDoList('HOME')
const myToDoList2 = new ToDoList('TODAY')

const item = myToDoList.createToDoItem("Sleep","i want to sleep well tonight", "17.10.2023", "HIGH")
const item2 = myToDoList2.createToDoItem("Code", "create to do list", 19,10,2023, "high")

myToDoList.createHTML()
myToDoList2.createHTML()
