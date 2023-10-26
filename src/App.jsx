
import TaskCreator  from './components/TaskCreator.jsx'
import './App.css'
import {useState} from "react"
import { useEffect } from 'react'
import TaskTable from './components/TaskTable.jsx'
import VisibilityControl from './components/VisibilityControl.jsx'
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
  const cleanTasks =()=>{

    setTasksItems(tasksItems.filter((task) => !task.done))
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
      <TaskTable  tasks={tasksItems} toggleTask={toggleTask} />

      <VisibilityControl 
        isChecked={showCompleted}
        setShowCompleted={(checked)=>setShowCompleted(checked)}
        cleanTasks={cleanTasks}
      />
      {
        showCompleted && (
          <TaskTable  tasks={tasksItems} toggleTask={toggleTask} showCompleted={showCompleted}/>
        )
      }


    </>
  )
}

export default App
