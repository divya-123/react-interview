import React, { useContext } from 'react'
import Task from './Task'
import { TasksContext } from './TasksProvider'

const TasksList = () => {
  const tasks = useContext(TasksContext);
  return (
    <ul>
      {tasks.map((task)=>{
        return (
        <li key={task.id}>
          <Task task={task}/>
        </li>)
        
      })}
    </ul>
  )
}

export default TasksList
