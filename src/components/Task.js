import React from 'react';

const Task = ({ task, onCompleteTask, onDeleteTask }) => {
  return (
    <div className="d-flex justify-content-between align-items-center bg-light p-3 mb-3">
      <span
        className={`task-text ${task.completed ? 'completed' : ''}`}
        onClick={() => onCompleteTask(task.id)}
      >
        {task.text}
      </span>
      <div>
        <button
          className={`btn btn-${task.completed ? 'success' : 'secondary'}`}
          onClick={() => onCompleteTask(task.id)}
        >
          {task.completed ? 'Concluído' : 'Marcar'}
        </button>
        <button
          className="btn btn-danger ml-2"
          onClick={() => onDeleteTask(task.id)}
        >
          Excluir
        </button>
      </div>
    </div>
  );
};

export default Task;
