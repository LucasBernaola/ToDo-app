import React, { useState } from "react";
import TaskRow from "../taskRow/TaskRow";
import TaskModal from "../taskModal/taskModal";
import "../../styles/main.css";
import "./ToDo.css";
import { useTask } from "../../context/TaskContext";
import Loading from "../Loading/Loading";
import TaskFilter from "../Filter/Filter";

const ToDo = () => {
  const { tasks, loading } = useTask();
  const [filter, setFilter] = useState("all");

  // Añade un estado para controlar si el modal de agregar tareas está abierto o cerrado
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") {
      return task.completed;
    } else if (filter === "incomplete") {
      return !task.completed;
    } else {
      return true; // Mostrar todas las tareas
    }
  });

  return (
    <div className="container">
      <TaskFilter setFilter={setFilter} />
      <div>
        <button onClick={openModal}>Añadir tarea</button>
      </div>
      {loading ? (
        <Loading /> // Show loading component when tasks are loading
      ) : tasks.length > 0 ? (
        filteredTasks.map((task) => <TaskRow key={task.id} task={task} />)
      ) : (
        <div>
          <p>No hay tareas listadas</p>
        </div>
      )}

      <TaskModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default ToDo;
