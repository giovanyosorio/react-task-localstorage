
import TaskCreator  from './components/TaskCreator.jsx'
import './App.css'
import {useState} from "react"

function App() {

  const [tasksItems, setTasksItems] = useState([
    {
      id: 1,
      name: 'Task 1',
      done: false
    },
    {
      id: 2,
      name: 'Task 2',
      done: true
    },
    {
      id: 3,
      name: 'Task 3',
      done: false
    }
  ])
  function createTask(taskName){
    if(!tasksItems.find((task) => task.name === taskName))
    {
      setTasksItems([...tasksItems, {id: tasksItems.length + 1, name: taskName, done: false}])
    }
    if(taskName === ""){
      setTasksItems([...tasksItems ])
    }
   
  }



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
