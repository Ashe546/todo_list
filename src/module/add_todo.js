import todos from './todo';

const addTodos = (e) => {
  const addTodo = document.querySelector('.add_todo');
  const todoObject = {
    description: addTodo.value,
    completed: false,
    index: todos.length,
  };
  todos.push(todoObject);
  localStorage.setItem('todo', JSON.stringify(todos));
  e.preventDefault();
  window.location.reload();
  return todos;
};

export default addTodos;