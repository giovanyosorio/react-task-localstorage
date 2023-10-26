import React from 'react';
import TaskRow from './TaskRow.jsx'

function TaskTable({ tasks,deleteTask, toggleTask,showCompleted =false}) {

    const taskTableRows=(doneValue)=>{
       // console.log(doneValue);
       return ( 
        tasks.
        filter(task => task.done === doneValue).
        map((task) => (
            <TaskRow key={task.id} toggleTask={toggleTask} task={task} />
        )))
    }
    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>name</th>
                    <th>done</th>
                </tr>
            </thead>
            <tbody>
                {
                    taskTableRows(showCompleted)
                }
            </tbody>
        </table>
    );
}

export default TaskTable;
