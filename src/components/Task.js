import React, { useContext, useState } from 'react'
import { TasksDispathContext } from './TasksProvider';

const Task = ({task}) => {
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useContext(TasksDispathContext);
  let taskContent;
  if(isEditing){
    taskContent = (
        <>
            <input value={task.text} 
                   onChange={e=>{dispatch({
                    type: 'change',
                    task: {
                      ...task, 
                      text: e.target.value
                    }
                   })}}/>
            <button onClick={()=>setIsEditing(false)}>Save</button>
        </>
    );
  } else {
    taskContent = (
        <>
            {task.text}
            <button onClick={()=>setIsEditing(true)}>Edit</button>
        </>
    );
  }
  return (
    <label>
      <input type='checkbox' checked={task.done} onChange={(e)=>{
            dispatch({
              type: 'change',
              task: {
                ...task,
                done: e.target.checked
              }
            })
        }}>        
      </input>
      {taskContent}
      <button onClick={()=>{dispatch({
        type: 'delete',
        id: task.id
      })}}>Delete</button>
    </label>
  )
}

export default Task
