import React, { useState } from "react";
import { useTask } from "../../context/TaskContext";
import "./TaskRow.css";
import TaskStatusButton from "../taskStatusButton/TaskStatusButton";
import AddTaskModal from "../taskModal/taskModal";

const TaskRow = ({ task }) => {
  const { deleteTask } = useTask();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const { id, name, description, completed, date } = task;

  return (
    <div>
      <TaskStatusButton isComplete={completed} id={id} />
      <span className={completed ? "completed" : ""}>{name}</span>
      <span>{description}</span>
      <p>{date}</p>
      <button onClick={openModal}>Editar Tarea</button>
      <button onClick={() => deleteTask(id)}>Delete</button>
      <AddTaskModal task={task} isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default TaskRow;
