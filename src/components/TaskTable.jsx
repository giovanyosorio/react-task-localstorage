import React from 'react';
import TaskRow from './TaskRow.jsx'

function TaskTable({ tasks,deleteTask, toggleTask }) {


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
                {tasks.map((task) => (
                    <TaskRow key={task.id} toggleTask={toggleTask} task={task} deleteTask={deleteTask}/>
                ))}
            </tbody>
        </table>
    );
}

export default TaskTable;
