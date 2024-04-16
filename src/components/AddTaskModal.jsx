import React, { useState, useContext } from 'react';
import { TaskContext } from '../context/TaskContext';

const AddTaskModal = ({ isOpen, onClose }) => {
    const { addTask } = useContext(TaskContext);
    const [taskName, setTaskName] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!taskName || !description || !date) {
            alert('Todos los campos son necesarios');
            return;
        }
        const taskData = {
            name: taskName,
            description,
            date
        };

        try {
            await addTask(taskData);
            // Reinicia el formulario
            setTaskName('');
            setDescription('');
            setDate('');
            onClose(); // Cierra el modal tras agregar la tarea, si la tarea no se agrego no se cierra
        } catch (err) {
            console.error("Error al agregar la tarea: ", err);
            alert('Error al agregar la tarea, inténtalo de nuevo.');
        }
    };

    if (!isOpen) return null;

    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={onClose}>&times;</span>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="taskName">Nombre de la Tarea:</label>
                    <input
                        type="text"
                        id="taskName"
                        value={taskName}
                        onChange={(e) => setTaskName(e.target.value)}
                        required
                    />
                    <label htmlFor="description">Descripción:</label>
                    <textarea
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />
                    <label htmlFor="date">Fecha de la Tarea:</label>
                    <input
                        type="date"
                        id="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        required
                    />
                    <button type="submit">Agregar Tarea</button>
                </form>
            </div>
        </div>
    );
};

export default AddTaskModal;
