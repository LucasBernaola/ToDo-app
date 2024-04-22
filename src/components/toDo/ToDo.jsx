import React, { useState } from "react";
import TaskRow from "../taskRow/TaskRow";
import TaskModal from "../taskModal/taskModal";
import "../../styles/main.css";
import "./ToDo.css";
import { useTask } from "../../context/TaskContext";
import Loading from "../Loading/Loading";
import TaskFilter from "../Filter/Filter";
import DateFilter from "../Filter/DataFilter";

const ToDo = () => {
  const { tasks, loading } = useTask();
  const [filter, setFilter] = useState("all");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  // Añade un estado para controlar si el modal de agregar tareas está abierto o cerrado
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const filteredTasks = tasks.filter((task) => {
    // Filtro por estado
    let stateFilter;
    if (filter === "completed") {
      stateFilter = task.completed;
    } else if (filter === "incomplete") {
      stateFilter = !task.completed;
    } else {
      stateFilter = true; // Mostrar todas las tareas
    }

    // Filtro por fecha
    let dateFilter = true;
    if (startDate && endDate) {
      const taskDate = new Date(task.date);
      const start = new Date(startDate);
      const end = new Date(endDate);
      dateFilter = taskDate >= start && taskDate <= end;
    }

    return stateFilter && dateFilter;
  });
  return (
    <div className="container">
      <TaskFilter setFilter={setFilter} />
      <DateFilter setStartDate={setStartDate} setEndDate={setEndDate} />
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
