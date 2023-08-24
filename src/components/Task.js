// src/components/Task.js
import React from 'react';

const Task = ({ task, onCompleteTask, onDeleteTask }) => {
  return (
    <li>
      <span
        className={task.completed ? 'completed' : ''}
        onClick={() => onCompleteTask(task.id)}
      >
        {task.text}
      </span>
      <button onClick={() => onDeleteTask(task.id)}>Excluir</button>
    </li>
  );
};

export default Task;
