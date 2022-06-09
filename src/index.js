import './style.css';

// Aray of objects

let todos =   JSON.parse(localStorage.getItem('todo')) || [{description: "2nd project about to end", completed: "", index: 2}];

//add todo task


const addBookTodo = document.querySelector('#form');

function addTodos(e) {
  const addTodo = document.querySelector('.add_todo');
  const todoObject = {
    description: addTodo.value,
    completed: 'checked',
    index: 4,
};
todos.push(todoObject);
localStorage.setItem('todo', JSON.stringify(todos));
alert(todoObject.description)
e.preventDefault();
window.location.reload();
return todos
}



addBookTodo.addEventListener('submit', addTodos);

// render html file
const from = document.querySelector('#form');

function component() {
  const element = document.createElement('div');
  element.className = 'main-container';
  todos.forEach((todo) => {
    // Lodash, now imported by this script
    element.innerHTML += ` <hr>
    <div draggable="true" class = 'task'>
    <input value = '${todo.description}' type="checkbox" class = 'check'>
    <p class = 'todo_description'>${todo.description}</p>
    <img src="./svg/icons8-edit.svg" alt="svg" class = 'svg'>
    </div>`;
  });
  return element;
}

function tryd() {
  const element = document.createElement('div');
  element.className = 'header';
  element.innerHTML += `<h1>My todo list</h1>
    <input type = 'text' class = 'add_todo' placeholder = 'add todo list here'>
    `;
  return element;
}

function footer() {
  const element = document.createElement('div');
  element.className = 'footer';
  element.innerHTML += `<button id = 'submit_but'>Clear all complited</button>
    `;
  return element;
}

from.appendChild(tryd());
from.appendChild(component());
from.appendChild(footer());



let dragSrcEl = '';

// Drag and drop functionality
document.addEventListener('DOMContentLoaded', () => {
  function handleDragStart(e) {
    this.style.opacity = '0.4';
    dragSrcEl = this;
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', this.innerHTML);

    return dragSrcEl;
  }

  function handleDragEnd() {
    this.style.opacity = '1';
  }

  function handleDragOver(e) {
    e.preventDefault();
    return false;
  }

  function handleDragEnter() {
    this.classList.add('over');
  }

  function handleDragLeave() {
    this.classList.remove('over');
  }

  function handleDrop(e) {
    e.stopPropagation();
    if (dragSrcEl !== this) {
      dragSrcEl.innerHTML = this.innerHTML;
      this.innerHTML = e.dataTransfer.getData('text/html');

      const cd = document.querySelectorAll('.check');
      const todoDes = document.querySelectorAll('.todo_description');
      
      cd.forEach((n, i) => n.addEventListener('click', () => {
        console.log(n.checked);
        console.log(i);
        if (n.checked === true) {
          todoDes[i].classList.add('checked');
        } else { todoDes[i].classList.remove('checked'); }
      }));

    }

    return false;
  }

  const items = document.querySelectorAll('.main-container .task');
  items.forEach((item) => {
    item.addEventListener('dragstart', handleDragStart);
    item.addEventListener('dragover', handleDragOver);
    item.addEventListener('dragenter', handleDragEnter);
    item.addEventListener('dragleave', handleDragLeave);
    item.addEventListener('dragend', handleDragEnd);
    item.addEventListener('drop', handleDrop);
  });
});

// Check for checked or not
const cd = document.querySelectorAll('.check');
const todoDes = document.querySelectorAll('.todo_description');

cd.forEach((n, i) => n.addEventListener('click', () => {
  console.log(n.checked);
  console.log(i);
  if (n.checked === true) {
    todoDes[i].classList.add('checked');
  } else { todoDes[i].classList.remove('checked'); }
}));

