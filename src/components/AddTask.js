import React, { useContext, useState } from 'react'
import { TasksDispathContext } from './TasksProvider';
// import { nextId } from './TaskApp';
let nextId = 3;

const AddTask = () => {
  const [text, setText] = useState('');
  const dispatch = useContext(TasksDispathContext);
  return (
    <div>
      <input type='text' 
             value={text} 
             onChange={e=>setText(e.target.value)}/> 
             {' '} 
      <button onClick={()=>{
              setText('');
              dispatch({
                type:'added',
                id: nextId++,
                text: text
              })
              }}>
        Add
      </button>
    </div>
  )
}

export default AddTask
