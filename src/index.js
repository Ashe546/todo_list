import _, { indexOf } from 'lodash';
import './style.css';

const todos = [
    {
        description: 'submit my project for review',
        completed: 'checked',
        index: 1
    },
    {
        description: '2nd project about to end',
        completed: '',
        index: 2
    },
    {
        description: 'add the drag and drop functionality',
        completed: 'checked',
        index: 3
    },
    {
        description: 'Almost done',
        completed: '',
        index: 4
    },
]


const from = document.querySelector('#form')

function component() {
    const element = document.createElement('div');
    element.className = 'main-container';
     todos.forEach((todo, index) => { 
      // Lodash, now imported by this script
    element.innerHTML += ` <hr>
    <div draggable="true" class = 'task'>
    <input value = '${todo.description}' type="checkbox" class ='check'>
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
    element.innerHTML += `<button>Clear all complited</button>
    `;
    return element;
}



 from.appendChild(tryd());
 from.appendChild(component());
 from.appendChild(footer());

 const cd = document.querySelectorAll('.check')
 const todo_des = document.querySelectorAll('.todo_description')

let i = 0
cd.forEach((n, i) => n.addEventListener('click', () => {
 console.log(n.checked) 
 console.log(i)
 if(n.checked == true) {
  todo_des[i].classList.add('checked')
 }else
 todo_des[i].classList.remove('checked')
}));

let dragSrcEl = ''

// Drag and drop functionality
document.addEventListener('DOMContentLoaded', (event) => {

    function handleDragStart(e) {
      this.style.opacity = '0.4';
      dragSrcEl = this;
      e.dataTransfer.effectAllowed = 'move';
      e.dataTransfer.setData('text/html', this.innerHTML);

      return dragSrcEl;
    }


  
    function handleDragEnd(e) {
      this.style.opacity = '1';
     
      items.forEach(function (item) {
        item.classList.remove('over');
      });
    }
  
    function handleDragOver(e) {
      e.preventDefault();
      return false;
    }
  
    function handleDragEnter(e) {
      this.classList.add('over');
    }
  
    function handleDragLeave(e) {
      this.classList.remove('over');
    }

    function handleDrop(e) {
        e.stopPropagation();
        if (dragSrcEl !== this) {
         dragSrcEl.innerHTML = this.innerHTML;
          this.innerHTML = e.dataTransfer.getData('text/html');
        }
      
        return false;
      }
  
    let items = document.querySelectorAll('.main-container .task');
    items.forEach(function(item) {
      item.addEventListener('dragstart', handleDragStart);
      item.addEventListener('dragover', handleDragOver);
      item.addEventListener('dragenter', handleDragEnter);
      item.addEventListener('dragleave', handleDragLeave);
      item.addEventListener('dragend', handleDragEnd);
      item.addEventListener('drop', handleDrop);
    });
  });