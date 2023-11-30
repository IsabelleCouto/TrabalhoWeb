import React from 'react';
import Task from './Task';

const TaskList = ({ tasks, onCompleteTask, onDeleteTask }) => {
  if (!tasks || tasks.length === 0) {
    return <p>Nenhuma tarefa encontrada.</p>;
  }
  const sortedTasks = tasks.sort((a, b) => (a.completed === b.completed ? 0 : a.completed ? 1 : -1));

  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">Atividade</th>
              <th scope="col" style={{ width: '15%' }}>Data de Criação</th>
              <th scope="col" style={{ width: '15%' }}>Hora de Criação</th>
              <th scope="col" style={{ width: '10%' }}>Status</th>
              <th scope="col" style={{ width: '10%' }}>Exclusão</th>
            </tr>
          </thead>
          <tbody>
            {sortedTasks.map((task) => (
              <tr key={task.id}>
                <td
                  className={`task-text ${task.completed ? 'completed' : ''}`}
                  style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
                  onClick={() => onCompleteTask(task.id)}
                >
                  {task.text}
                </td>
                <td style={{ width: '10%' }}>{new Date(task.createdAt).toLocaleDateString()}</td>
                <td style={{ width: '10%' }}>{new Date(task.createdAt).toLocaleTimeString()}</td>
                <td style={{ width: '10%' }}>
                  <button
                    className={`btn ${task.completed ? 'btn-secondary' : 'btn-success'}`}
                    onClick={() => onCompleteTask(task.id)}
                  >
                    {task.completed ? 'Desfazer' : 'Feito'}
                  </button>
                </td>
                <td style={{ width: '10%' }}>
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
