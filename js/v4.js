var todoList = {
  todos: [], // 'property': 'value', 
  displayTodos: function() { // method: a function stored on an object property is a method. 'property': 'method'
  	console.log('My Todos:', this.todos);
  },
  addTodo: function(todoText) {
  	this.todos.push({
      todoText: todoText,
      completed: false
    });
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