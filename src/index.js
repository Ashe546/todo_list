import './style.css';
import { component, footer } from './module/html_component';
import addTodos from './module/add_todo';
import drag from './module/drag_drop';
import todos from "./module/todo";
import img from './svg/ui.png';
import img2 from './svg/icons8-delete.svg';

// add todo task
const addTodoList = document.querySelector('#form1');

addTodoList.addEventListener('submit', addTodos);

// render html file
const from = document.querySelector('#form');
const todoLists = document.querySelector('#todo_lists');



todoLists.appendChild(component());
from.appendChild(footer());

const todoDescription = document.querySelectorAll('.todo_description')
const move = document.querySelectorAll('.svg')
const delete_item = document.querySelectorAll('.svg_delete')


//togle b/n delete and edit icon
todoDescription.forEach((n, i) => n.addEventListener('click', () => {
  console.log('clicked')
  delete_item[i].classList.remove('active')
  move[i].classList.add('active')
}));


// remove todo list
const removetodo = (index) => {
  const remove = todos.splice(index, 1);
  console.log(todos)
  return remove || false
}

delete_item.forEach((n, i) => n.addEventListener('click', ()=> {
  console.log('cleked')
  removetodo(i);
}));


const from1 = document.querySelector('#form');

  // edit todo list
  todoDescription.forEach((n, i) => n.addEventListener('keyup', (e) => {

    const index = e.target.value;
    if (e.key === 'Enter') {
      console.log(index)
      console.log(i)
      e.preventDefault()
    }
   
  }));



     
// Check for checked or not
const cd = document.querySelectorAll('.check');
const todoDes = document.querySelectorAll('.todo_description');

cd.forEach((n, i) => n.addEventListener('click', () => {
  if (n.checked === true) {
    todoDes[i].classList.add('checked');
  } else { todoDes[i].classList.remove('checked'); }
}));
