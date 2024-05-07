import  React, { useState } from "react";
import { useTask } from "../../context/TaskContext";
import TaskRow from "../taskRow/TaskRow";
import TaskModal from "../taskModal/taskModal";
import TaskFilter from "../Filter/Filter";
import DateFilter from "../DateFilter/DateFilter";
import Loading from "../Loading/Loading";
import "./ToDo.css";

const ToDo = () => {
  const { tasks, loading } = useTask();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filter, setFilter] = useState("all");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") {
      return task.completed;
    } else if (filter === "incomplete") {
      return !task.completed;
    }
    return true;
  });

  const filteredTasksByDate = filteredTasks.filter((task) => {
    if (startDate && endDate) {
      const taskDate = new Date(task.date);
      const filterStartDate = new Date(startDate);
      const filterEndDate = new Date(endDate);
      return taskDate >= filterStartDate && taskDate <= filterEndDate;
    }
    return true;
  });

  return (
    <div className="todo-container">
      <div className="welcome-section">
        <h1 className="welcome-heading">¡Bienvenido a nuestra aplicación!</h1>
        <p className="welcome-message">Empieza a organizar tus tareas pulsando el botón a continuación.</p>
      </div>
      <div className="add-task-section">
        <button className="add-task-button" onClick={openModal}>
          Agregar Nueva Tarea
        </button>
      </div>
      <div className="filters-section">
        <DateFilter setStartDate={setStartDate} setEndDate={setEndDate} />
        <TaskFilter setFilter={setFilter} />
      </div>
      <div className="tasks-section">
        {loading ? (
          <Loading />
        ) : filteredTasksByDate.length > 0 ? (
          <div className="task-list">
            {filteredTasksByDate.map((task) => (
              <TaskRow key={task.id} task={task} />
            ))}
          </div>
        ) : (
          <div className="no-tasks-found">
            <p>No hay tareas agendadas</p>
          </div>
        )}
      </div>
      <TaskModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default ToDo;



