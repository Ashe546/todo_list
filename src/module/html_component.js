import todos from './todo';
import img from '../svg/ui.png';
import img2 from '../svg/icons8-delete.svg';

const component = () => {
  const element = document.createElement('div');
  element.className = 'main-container';
  todos.forEach((todo, i) => {
    // Lodash, now imported by this script
    element.innerHTML += ` <hr>
      <div draggable="true" class = 'task'>
      <input type="checkbox" class = 'check'>
      <input class = 'todo_description' contenteditable="true" value = '${todo.description}'></input>
      <img src="${img}" alt="svg" class = 'svg'>
      <img src="${img2}" alt="svg" class = 'svg_delete active' value = ${i}>
      </div>`;
  });
  return element;
};

const footer = () => {
  const element = document.createElement('div');
  element.className = 'footer';
  element.innerHTML += `<button id = 'submit_but'>Clear all complited</button>
      `;
  return element;
};

export { component, footer };