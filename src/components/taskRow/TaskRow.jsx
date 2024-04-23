import React, { useState } from "react";
import { useTask } from "../../context/TaskContext";
import TaskStatusButton from "../taskStatusButton/TaskStatusButton";
import TaskModal from "../taskModal/taskModal";


const TaskRow = ({ task }) => {
  const { deleteTask } = useTask();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const { id, name, description, completed, date } = task;

  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-4">
      <div className="flex items-center justify-between mb-2">
        <TaskStatusButton isComplete={completed} id={id} />
        <div>
          <button 
            className="mr-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={openModal}
          >
            Edit Task
          </button>
          <button 
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => deleteTask(id)}
          >
            Delete
          </button>
        </div>
      </div>
      <h2 className={`text-lg font-bold ${completed ? "line-through" : ""}`}>{name}</h2>
      <p className="text-sm break-all">{description}</p>
      <p className="text-xs text-gray-500">{date}</p>
      <TaskModal task={task} isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default TaskRow;

