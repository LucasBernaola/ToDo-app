import React, { useState } from 'react';
import { useTask } from '../../context/TaskContext';
import "./TaskRow.css"
import TaskStatusButton from '../taskStatusButton/TaskStatusButton';

const TaskRow = ({ task }) => {
    const {deleteTask} = useTask();

const {id, name, description, completed, date} = task
    return (
        <div>
            <TaskStatusButton isComplete={completed} id={id}/>
            <span className={completed ? 'completed' : ''}>{name}</span>
            <span>{description}</span>
            <p>{date}</p>
            <button onClick={()=>deleteTask(id)}>Delete</button>
        </div>
    );
};

export default TaskRow;