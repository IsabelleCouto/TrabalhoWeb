import React from 'react';
import Task from './Task';

const TaskList = ({ tasks, onCompleteTask, onDeleteTask }) => {
  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        {tasks.map((task) => (
          <div key={task.id} className="mb-3">
            <div className="d-flex justify-content-between align-items-center bg-light p-3">
              <span
                className={`task-text ${task.completed ? 'completed' : ''}`}
                onClick={() => onCompleteTask(task.id)}
              >
                {task.text}
              </span>
              <button
                className="btn btn-danger"
                onClick={() => onDeleteTask(task.id)}
              >
                Excluir
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskList;
