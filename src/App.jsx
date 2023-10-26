
import TaskCreator  from './components/TaskCreator.jsx'
import './App.css'
import {useState} from "react"
import { useEffect } from 'react'
import TaskTable from './components/TaskTable.jsx'
function App() {

  const [tasksItems, setTasksItems] = useState([])
  const [showCompleted, setShowCompleted] = useState(false)

  function createTask(taskName){
    if(!tasksItems.find((task) => task.name === taskName))
    {
      setTasksItems([...tasksItems, {id: tasksItems.length + 1, name: taskName, done: false}])
    }
    if(taskName === ""){
      setTasksItems([...tasksItems ])
    }
   
  }
  function toggleTask(task){
    setTasksItems(tasksItems.map((t) => (t.id === task.id ? {...t, done: !t.done} : t)))
  }
  function deleteTask(taskId){
    const taskToDelete = tasksItems.filter((task) => task.id !== taskId)
  
    setTasksItems(taskToDelete)
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
      <TaskTable  tasks={tasksItems} toggleTask={toggleTask} deleteTask={deleteTask}/>

      <div>
        <input type="checkbox" onChange={e=>setShowCompleted(!showCompleted)} /> <label> show task done</label>
      </div>
      {
        showCompleted && (
          <TaskTable  tasks={tasksItems} toggleTask={toggleTask} deleteTask={deleteTask} showCompleted={showCompleted}/>
        )
      }


    </>
  )
}

export default App
