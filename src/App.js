import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Cabecalho';
import AddTaskForm from './components/AddTaskForm';
import TaskList from './components/TaskList';
import Login from './components/Login';
import Register from './components/Register';
import Saudacao from './components/Saudacao';

function App() {
  const [activeTab, setActiveTab] = useState('Faculdade');
  
  const tabs = ['Faculdade', 'Trabalho', 'Casa'];
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showRegister, setShowRegister] = useState(false); 
  const [username, setUsername] = useState('');
  const [tasks, setTasks] = useState({
    Faculdade: [],
    Trabalho: [],
    Casa: [],
  });

  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  const addTask = (text) => {
    const newTask = {
      id: Date.now(),
      text,
      completed: false,
      createdAt: new Date().toISOString(),
    };
    
    const updatedTasks = {
      ...tasks,
      [activeTab]: [...(tasks[activeTab] || []), newTask],
    };
    
    setTasks(updatedTasks);
    saveTasks(updatedTasks);
  };
  

  const completeTask = (taskId) => {
    const updatedTasks = {
      ...tasks,
      [activeTab]: tasks[activeTab].map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      ),
    };
    setTasks(updatedTasks);
    saveTasks(updatedTasks);
  };

  const deleteTask = (taskId) => {
    const updatedTasks = {
      ...tasks,
      [activeTab]: tasks[activeTab].filter((task) => task.id !== taskId),
    };
    setTasks(updatedTasks);
    saveTasks(updatedTasks);
  };

  const saveTasks = (tasks) => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="App">
      <Header />
      {isLoggedIn ? (
        <>
          <Saudacao username={username} onLogout={handleLogout} />
          <ul className="nav nav-tabs mb-3 app-container">
            {tabs.map((tab) => (
              <li className="nav-item" key={tab}>
                <button
                  className={`nav-link ${activeTab === tab ? 'active' : ''}`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              </li>
            ))}
          </ul>
          <AddTaskForm onAddTask={addTask} />
          <TaskList
            tasks={tasks[activeTab] || []}
            onCompleteTask={completeTask}
            onDeleteTask={deleteTask}
          />
        </>
      ) : (
        <>
          {!showRegister && (
            <Login
              onLogin={(user) => {
                setUsername(user.username); // Armazene o nome do usuário
                setIsLoggedIn(true);
              }}
              onRegister={() => setShowRegister(true)}
            />
          )}
          {showRegister && (
            <Register onRegister={() => setShowRegister(false)} />
          )}
        </>
      )}
    </div>
  );
}

export default App;
