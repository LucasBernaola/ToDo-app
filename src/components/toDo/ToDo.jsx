import React, { useState } from "react";
import { useTask } from "../../context/TaskContext";
import TaskRow from "../taskRow/TaskRow";
import TaskModal from "../taskModal/taskModal";
import "../../styles/main.css";
import "./ToDo.css";
import Loading from "../Loading/Loading";

const ToDo = () => {
  const { tasks, loading } = useTask();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="container mx-auto px-4">
      <div className="my-8">
        <button
          className="bg-green-500 hover:bg-secondary text-white font-bold py-2 px-4 rounded"
          onClick={openModal}
        >
          Añadir tarea
        </button>
      </div>
      <div className="max-h-80 overflow-y-auto">
        {loading ? (
          <Loading />
        ) : tasks.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {tasks.map((task) => (
              <TaskRow key={task.id} task={task} />
            ))}
          </div>
        ) : (
          <div>
            <p>No hay tareas listadas</p>
          </div>
        )}
      </div>
      <TaskModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default ToDo;
