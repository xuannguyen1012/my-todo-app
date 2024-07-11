import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, toggleComplete, deleteTodo }) => {
  return (
    <div className="todo-list">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
        />
      ))}
      <button className="delete-all" onClick={() => todos.forEach(todo => deleteTodo(todo.id))}>Delete All</button>
    </div>
  );
};

export default TodoList;
