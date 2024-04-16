import React, { useState } from 'react';
import { useTask } from '../../context/TaskContext';
import "./TaskRow.css"

const TaskRow = ({ task }) => {
    const [completed, setCompleted] = useState(task.completed);
    const {deleteTask, updateTask} = useTask();

    const toggleCompleted = (id) => {
        setCompleted(!completed);
        updateTask(id,{completed: !completed} );
        // aca va la logica del autocompletado conectado a firebase
      };
console.log(task);

    return (
        <div className={`task-row ${completed ? 'completed' : ''}`}>
        <button className="complete-button" onClick={()=>toggleCompleted(task.id)}>
            {completed ? 'Completada' : 'Incompleta'}
        </button>
            <span className={task.completed ? 'completed' : ''}>{task.name}</span>
            <span>{task.description}</span>
            <p>{task.date}</p>
            <button onClick={()=>deleteTask(task.id)}>Delete</button>
        </div>
    );
};

export default TaskRow;