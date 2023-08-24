import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Cabecalho';
import AddTaskForm from './components/AddTaskForm';
import TaskList from './components/TaskList';

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []); // Executa somente uma vez, ao montar o componente

  const addTask = (text) => {
    const newTask = { id: Date.now(), text, completed: false };
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    saveTasks(updatedTasks);
  };

  const completeTask = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
    saveTasks(updatedTasks);
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
    saveTasks(updatedTasks);
  };

  const saveTasks = (tasks) => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
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
