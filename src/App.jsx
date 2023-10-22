
import TaskCreator  from './components/TaskCreator.jsx'
import './App.css'
import {useState} from "react"
import { useEffect } from 'react'
function App() {

  const [tasksItems, setTasksItems] = useState([])
  function createTask(taskName){
    if(!tasksItems.find((task) => task.name === taskName))
    {
      setTasksItems([...tasksItems, {id: tasksItems.length + 1, name: taskName, done: false}])
    }
    if(taskName === ""){
      setTasksItems([...tasksItems ])
    }
   
  }

  useEffect(() => {
    let data= localStorage.getItem("tasks")
    if(data){
      setTasksItems(JSON.parse(data))
    }
  }, [])
  useEffect(() => {
    console.log(tasksItems)
    localStorage.setItem("tasks",JSON.stringify(tasksItems))
  } , [tasksItems])

  return (
    <>
      <TaskCreator createTask={createTask}/>
      <table>
        <thead>
          <tr>
            <th>Task</th>
            <th>Done</th>
          </tr>
        </thead>
        <tbody>
          {tasksItems.map((task) => (
            <tr key={task.id}>
              <td>{task.name}</td>
              <td>{task.done ? 'Yes' : 'No'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default App
