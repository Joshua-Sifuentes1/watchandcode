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
  changeTodo: function(position, todoText) {
  	this.todos[position].todoText = todoText;
  	this.displayTodos();
  },
  deleteTodo: function(position) {
  	this.todos.splice(position, 1);
  	this.displayTodos();
  },
  toggleCompleted: function(position) {
    var todo = this.todos[position];
    todo.completed = !todo.completed;
    this.displayTodos();
  }
};