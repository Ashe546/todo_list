const todos = JSON.parse(localStorage.getItem('todo')) || [{ description: '2nd project about to end', completed: '', index: 2 }];

export default todos;