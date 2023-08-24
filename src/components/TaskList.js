// src/components/TaskList.js
import React from 'react';
import Task from './Task';

const TaskList = ({ tasks, onCompleteTask, onDeleteTask }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onCompleteTask={onCompleteTask}
          onDeleteTask={onDeleteTask}
        />
      ))}
    </ul>
  );
};

export default TaskList;
