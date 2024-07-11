import React, { useState } from 'react';

const TodoInput = ({ addTodo }) => {
  const [input, setInput] = useState('');

  const handleAdd = () => {
    if (input.trim()) {
      addTodo({
        text: input,
        isCompleted: false,
        id: Date.now(),
      });
      setInput('');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button className="add" onClick={handleAdd}>Add</button>
    </div>
  );
};

export default TodoInput;
