import React from 'react';

function VisibilityControl({setShowCompleted,cleanTasks,isChecked}) {
    
    function handleDelete (){
        if(window.confirm("Are you sure you want to delete all tasks?")){
            cleanTasks()
        }
    
    }
    return (
    <div>
        <input checked={isChecked} type="checkbox" onChange={e=>setShowCompleted(e.target.checked)} /> <label> show task done</label>

        <button onClick={handleDelete}>
            Clear
        </button>
      </div>
    );
}

export default VisibilityControl;
