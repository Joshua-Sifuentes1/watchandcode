var todoList = {
  todos: ['item 1', 'item 2', 'item 3'], // 'property': 'value', 
  displayTodos: function() { // method: a function stored on an object property is a method. 'property': 'method'
  	console.log('My Todos:', this.todos);
  },
  addTodo: function(todo) {
  	this.todos.push(todo);
  	this.displayTodos();
  },
  changeTodo: function(position, newValue) {
  	this.todos[position] = newValue;
  	this.displayTodos();
  },
  deleteTodo: function(position) {
  	this.todos.splice(position, 1);
  	this.displayTodos();
  }
};
