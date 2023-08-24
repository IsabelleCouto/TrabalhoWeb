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
    <section className="mt-4">
      <div className="container" style={{ maxWidth: '50%' }}>
        <form onSubmit={handleSubmit}>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Digite uma nova tarefa"
              value={task}
              onChange={(e) => setTask(e.target.value)}
            />
            <button className="btn btn-primary" type="submit">
              Adicionar
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AddTaskForm;
