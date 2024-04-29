import React, { useState } from "react";
import { useTask } from "../../context/TaskContext";
import { TaskProvider } from "../../context/TaskContext";
import TaskRow from "../taskRow/TaskRow";
import TaskModal from "../taskModal/taskModal";
import TaskFilter from "../Filter/Filter";
import DateFilter from "../DateFilter/DateFilter";
import "../../styles/main.css";
import "./ToDo.css";
import Loading from "../Loading/Loading";

const ToDo = () => {
  const { tasks, loading } = useTask();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filter, setFilter] = useState('all');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

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
    <div className="container mx-auto px-4 max-w-6xl mb-15 h-full">
      <div className="my-8 flex justify-center mb-20">
        <button
          className="bg-green-500 hover:bg-secondary text-textSecondary text-4xl font-bold py-2 px-20 rounded shadow-lg animate-pulse animate-infinite animate-ease-in"
          onClick={openModal}
        >
          Add new task
        </button>
      </div>
      <div className="my-4 flex justify-between">
        <DateFilter setStartDate={setStartDate} setEndDate={setEndDate} />
        <TaskFilter setFilter={setFilter} />
      </div>
      <TaskProvider>
      <div className="max-h-80 overflow-y-auto">
        {loading ? (
          <Loading />
        ) : filteredTasksByDate.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
            {filteredTasksByDate.map((task) => (
              <TaskRow key={task.id} task={task} />
            ))}
          </div>
        ) : (
          <div className="flex justify-center items-center h-48 bg-white shadow-md rounded-lg p-4">
            <p className="text-lg text-gray-700">No tasks found</p>
          </div>
        )}
      </div>
      </TaskProvider>
      <TaskModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default ToDo;


