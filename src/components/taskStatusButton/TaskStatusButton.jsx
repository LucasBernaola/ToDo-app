import React, { useState } from "react"
import { useTask } from '../../context/TaskContext';
import "./TaskStatusButton.css"

const TaskStatusButton = ({ isComplete, id }) => {
    const [completed, setCompleted] = useState(isComplete);
    const [loading, setLoading] = useState(false);

    const { updateTask } = useTask();


    const toggleCompleted = async (id) => {
        setLoading(true);
        try {
            setCompleted(!completed);
            updateTask(id, { completed: !completed });
        } catch (error) {
            console.error("Error al actualizar la tarea: ", error);
        }
        setLoading(false);

    };

    return (
        <button disabled={loading} className={completed ? 'button complete' : 'button incomplete'} onClick={() => toggleCompleted(id)}>
            {completed ? 'Completed' : 'Incomplete'}
        </button>
    );
}

export default TaskStatusButton;