import React from 'react'
import { useState } from 'react'
export default function TaskCreator() {

    const [newTask, setnewTask] = useState("")

    const handleSubmit = (e) => {
       e.preventDefault()
       localStorage.setItem('task',newTask)
       setnewTask("")
        console.log(newTask)
    }

  return (
    <form onSubmit={handleSubmit}>
        <h1>hello world</h1>
        <input value={newTask}  type="text" placeholder='ingrese una nueva tarea' onChange={(e)=>setnewTask(e.target.value)} />
        <button>Save task</button>
    
    </form>
  )
}
