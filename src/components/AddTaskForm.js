// src/components/AddTaskForm.js
import React, { useState } from 'react';

const AddTaskForm = ({ onAddTask }) => {
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      onAddTask(task);
      setTask('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Digite uma nova tarefa"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button type="submit">Adicionar</button>
    </form>
  );
};

export default AddTaskForm;
