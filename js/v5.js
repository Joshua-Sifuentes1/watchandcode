var todoList = {
	todos: [], // 'property': 'value', 
	displayTodos: function() { // method: a function stored on an object property is a method. 'property': 'method'
		if (this.todos.length === 0) {
			console.log('Your todo list is empty!');	
		} else {
			console.log('My Todos:');
			for(var i = 0; i < this.todos.length; i++) {
				console.log(this.todos[i].todoText);
			}
		}
		// if there is no todos
			// console.log('Your todo list is empty ')
		// else 
			// print the todo list
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