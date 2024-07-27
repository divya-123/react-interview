import React from 'react';
import AddTask from './AddTask';
import TasksList from './TasksList';
import { TasksProvider } from './TasksProvider';

const TaskApp = () => {
 
  return (
    <div>
      <TasksProvider>
        <h2>Alaska itinerary</h2>
        <AddTask />
        <TasksList />
      </TasksProvider>
    </div>
  )
}


export default TaskApp
