const todos = JSON.parse(localStorage.getItem('todo')) || [{ description: '2nd project about to end', completed: false, index: 0 }];

export default todos;