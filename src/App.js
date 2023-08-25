import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Cabecalho';
import AddTaskForm from './components/AddTaskForm';
import TaskList from './components/TaskList';
import Login from './components/Login';
import Register from './components/Register';
import Saudacao from './components/Saudacao';
import Footer from './components/Footer';
function App() {
  const [activeTab, setActiveTab] = useState('Faculdade');
  const tabs = ['Faculdade', 'Trabalho', 'Casa'];
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [username, setUsername] = useState('');
  const [userTasks, setUserTasks] = useState({});

  useEffect(() => {
    const storedUserTasks = localStorage.getItem('userTasks');
    if (storedUserTasks) {
      setUserTasks(JSON.parse(storedUserTasks));
    }
  }, []);

  const addTask = (text) => {
    const newTask = {
      id: Date.now(),
      text,
      completed: false,
      createdAt: new Date().toISOString(),
    };

    const updatedUserTasks = {
      ...userTasks,
      [username]: {
        ...userTasks[username],
        [activeTab]: [...(userTasks[username]?.[activeTab] || []), newTask],
      },
    };

    setUserTasks(updatedUserTasks);
    saveUserTasks(updatedUserTasks);
  };

  const completeTask = (taskId) => {
    const updatedUserTasks = {
      ...userTasks,
      [username]: {
        ...userTasks[username],
        [activeTab]: userTasks[username][activeTab].map((task) =>
          task.id === taskId ? { ...task, completed: !task.completed } : task
        ),
      },
    };

    setUserTasks(updatedUserTasks);
    saveUserTasks(updatedUserTasks);
  };

  const deleteTask = (taskId) => {
    const updatedUserTasks = {
      ...userTasks,
      [username]: {
        ...userTasks[username],
        [activeTab]: userTasks[username][activeTab].filter(
          (task) => task.id !== taskId
        ),
      },
    };

    setUserTasks(updatedUserTasks);
    saveUserTasks(updatedUserTasks);
  };

  const saveUserTasks = (userTasks) => {
    localStorage.setItem('userTasks', JSON.stringify(userTasks));
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
  };

  return (
    <div className="App">
      <div className='header'>
        <Header />
      </div>
      <div className='saudacao'>
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
              tasks={userTasks[username]?.[activeTab] || []}
              onCompleteTask={completeTask}
              onDeleteTask={deleteTask}
            />
          </>
        ) : (
          <>
            {!showRegister && (
              <Login
                onLogin={(user) => {
                  setUsername(user.username);
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
      <Footer />
    </div>
  );
}

export default App;