import { useState } from 'react'
import TaskCreator  from './components/TaskCreator.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TaskCreator/>
    </>
  )
}

export default App
