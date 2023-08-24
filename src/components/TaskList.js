import React from 'react';
import Task from './Task';

const TaskList = ({ tasks, onCompleteTask, onDeleteTask }) => {
  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">Tarefa</th>
              <th scope="col" className="w-auto">Status</th>
              <th scope="col" className="w-auto">Exclusão</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
              <tr key={task.id}>
                <td
                  className={`task-text ${task.completed ? 'completed' : ''}`}
                  style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
                  onClick={() => onCompleteTask(task.id)}
                >
                  {task.text}
                </td>
                <td className="w-auto">
                  <button
                    className={`btn ${task.completed ? 'btn-secondary' : 'btn-success'}`}
                    onClick={() => onCompleteTask(task.id)}
                  >
                    {task.completed ? 'Desfazer' : 'Completa'}
                  </button>
                </td>
                <td className="w-auto">
                  <button
                    className="btn btn-danger"
                    onClick={() => onDeleteTask(task.id)}
                  >
                    Excluir
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TaskList;
