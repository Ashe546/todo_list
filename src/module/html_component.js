import todos from './todo';

const component = () => {
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
};

const header = () => {
  const element = document.createElement('div');
  element.className = 'header';
  element.innerHTML += `<h1>My todo list</h1>
      <input type = 'text' class = 'add_todo' placeholder = 'add todo list here'>
      `;
  return element;
};

const footer = () => {
  const element = document.createElement('div');
  element.className = 'footer';
  element.innerHTML += `<button id = 'submit_but'>Clear all complited</button>
      `;
  return element;
};

export { component, header, footer };