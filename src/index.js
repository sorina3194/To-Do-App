import { ToDoList } from "./to-do-list";
import './attributes/style.css'
import { addList, getLists } from "./storage";

const addListButton = document.getElementById('add-list-button')

addListButton.addEventListener('click', () => {
  const title = prompt('Title:');
  const list = new ToDoList(title, []);
  list.createHTML();
  addList(title, []);
})

window.addEventListener('load', () => {
  const data = getLists();
  data.forEach((list) => {
    const toDoList = new ToDoList(list.title);
    if (list.items) {
      list.items.forEach((item) => {
        toDoList.createToDoItem(item.title, item.description, item.dueDate, item.priority)
      });
    }
    toDoList.createHTML();
  });
});
