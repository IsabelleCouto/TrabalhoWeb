// src/App.js
import React, { useState } from 'react';
import './App.css'; // Você pode estilizar o aplicativo adicionando estilos no arquivo App.css
import Header from './components/Cabecalho';
import AddTaskForm from './components/AddTaskForm';
import TaskList from './components/TaskList';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (text) => {
    const newTask = { id: Date.now(), text, completed: false };
    setTasks([...tasks, newTask]);
  };

  const completeTask = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <Header />
      <AddTaskForm onAddTask={addTask} />
      <TaskList
        tasks={tasks}
        onCompleteTask={completeTask}
        onDeleteTask={deleteTask}
      />
    </div>
  );
}

export default App;
