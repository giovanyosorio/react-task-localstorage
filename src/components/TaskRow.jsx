import React from 'react';

const TaskRow = ({ task,toggleTask }) => {
    return (
    <tr>
        <td>{task.id}</td>
        <td>{task.name}</td>
        <td>{task.done ? 'Yes' : 'No'}</td>
        <td> <input type='checkbox' checked={task.done} onChange={()=>toggleTask(task)}/></td>
    </tr>
    );
};

export default TaskRow;
