import { ToDoList } from "./to-do-list";
// import { FolderList} from "./folder-list";
import './attributes/style.css'

// const myToDoList = new ToDoList('HOME')
// const myToDoList2 = new ToDoList('TODAY')

// const item = myToDoList.createToDoItem("Sleep","i want to sleep well tonight", "17.10","high")
// const item2 = myToDoList.createToDoItem("Code", "create to do list", "19.10", "high")
// const item3 = myToDoList.createToDoItem("kiss cutii", "create to do list", "19.10", "high")

//  myToDoList.createHTML()
// myToDoList2.createHTML()

// localStorage.setItem('data', JSON.stringify(myToDoList))

const addListButton = document.getElementById('add-list-button')
const myList = []

addListButton.addEventListener('click', () => {
  const title = prompt('Title:')
  const list = new ToDoList(title, [])
  list.createHTML()
  myList.push(list)
  localStorage.setItem('data', JSON.stringify(myList))
})

window.addEventListener('load', () => {
  try {
    const strData = localStorage.getItem("data");
    if (strData) {
      const data = JSON.parse(strData);
      data.forEach((list) => {
        const toDoList = new ToDoList(list.title);
        if (list.items) {
          list.items.forEach((item) => {
          toDoList.createToDoItem(item.title, item.description, item.dueDate, item.priority)
          });
        }
      toDoList.createHTML();
      myList.push(toDoList);
      });
    }
  } catch (error) {
    console.error(error)
  }
  // myToDoList.displayItems()
});
