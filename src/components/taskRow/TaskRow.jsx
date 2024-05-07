import React, { useState } from "react";
import { useTask } from "../../context/TaskContext";
import TaskStatusButton from "../taskStatusButton/TaskStatusButton";
import TaskModal from "../taskModal/taskModal";
import './TaskRow.css';

const TaskRow = ({ task }) => {
  const { deleteTask } = useTask();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const { id, name, description, completed, date } = task;

  return (
    <div className="task-row">
      <div className="task-info">
        <TaskStatusButton isComplete={completed} id={id} />
        <div className="task-buttons">
          <button
            className="edit-button"
            onClick={openModal}
          >
            Editar
          </button>
          <button
            className="delete-button"
            onClick={() => deleteTask(id)}
          >
            Borrar
          </button>
        </div>
      </div>
      <h2 className={`task-name ${completed ? "completed" : ""}`}>{name}</h2>
      <p className="task-description">{description}</p>
      <p className="task-date">{date}</p>
      <TaskModal task={task} isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default TaskRow;


