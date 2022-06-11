import './style.css';
import { component, footer } from './module/html_component';
import addTodos from './module/add_todo';
import drag from './module/drag_drop';
import todos from './module/todo';

console.log(drag);

// add todo task
const addTodoList = document.querySelector('#form1');

addTodoList.addEventListener('submit', addTodos);

// render html file
const from = document.querySelector('#form');
const todoLists = document.querySelector('#todo_lists');

todoLists.appendChild(component());
from.appendChild(footer());

const todoDescription = document.querySelectorAll('.todo_description');
const move = document.querySelectorAll('.svg');
const deleteItem = document.querySelectorAll('.svg_delete');

// togle b/n delete and edit icon

const taskList = document.querySelectorAll('.task');

taskList.forEach((n, i) => n.addEventListener('mouseover', () => {
  deleteItem[i].classList.remove('active');
  move[i].classList.add('active');
}, 100));

taskList.forEach((n, i) => n.addEventListener('mouseout', () => {
  deleteItem[i].classList.add('active');
  move[i].classList.remove('active');
}, 100));

// remove todo list
const removetodo = (inde) => {
  const aw = JSON.parse(localStorage.getItem('todo'));
  const remove = todos.splice(inde, 1);

  const arrtest = [];
  for (let i = 0; i <= todos.length; i += 1) {
    if (aw[inde].index < aw[i].index) {
      arrtest.push('yes');
      todos[i - 1].index = todos[i - 1].index - 1;
    } else {
      arrtest.push('no', aw[i].index);
    }
  }
  localStorage.setItem('todo', JSON.stringify(todos));
  window.location.reload();
  return remove || false;
};

deleteItem.forEach((n, i) => n.addEventListener('click', () => { removetodo(i); }));

// edit todo list
todoDescription.forEach((n, i) => n.addEventListener('keyup', (e) => {
  const index = e.target.value;
  if (e.key === 'Enter') {
    todos[i].description = index;
    localStorage.setItem('todo', JSON.stringify(todos));
    window.location.reload();
    e.preventDefault();
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
