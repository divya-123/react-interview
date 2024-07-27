import { createContext, useReducer } from "react";

export const TasksContext = createContext(null);
export const TasksDispathContext = createContext(null);

const initialTasks = [
    { id:0, text:"Book To and Fro Flight tickets", done: false },
    { id:1, text:"List down major attractions", done: false },
    { id:2, text:"Book stay and local travel", done: false }
];

export function TasksProvider({children}){
    const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);
    return (
        <TasksContext.Provider value={tasks}>
            <TasksDispathContext.Provider value={dispatch}>
                {children}
            </TasksDispathContext.Provider>
        </TasksContext.Provider>
    )
}
const tasksReducer = (tasks, action) => {
    switch(action.type){
      case 'added' : {
        return [...tasks, {
          id: action.id,
          text: action.text,
          done: false
        }]
      }
      case 'delete' : {
        return tasks.filter((t)=>{
          return t.id!== action.id
        })
      }
      case 'change' : {
        return tasks.map((t)=>{
          if(t.id === action.task.id){
            return action.task;
          } else {
            return t;
          }
        })
      }
      case 'default': {
        throw Error("Unknown action", action.type);
      }
    }
  }