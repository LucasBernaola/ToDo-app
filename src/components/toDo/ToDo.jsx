import  { useState } from "react";
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
    <div className="container mx-auto px-4 max-w-6xl mb-15 h-full">
      <div className="my-8 flex justify-center mb-20">
        <button
          className="bg-green-500 hover:bg-secondary text-textSecondary text-4xl font-bold py-2 px-20 rounded shadow-lg"
          onClick={openModal}
        >
          Add new task
        </button>
      </div>
      <div className="max-h-80 overflow-y-auto ">
        {loading ? (
          <Loading />
        ) : tasks.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
            {tasks.map((task) => (
              <TaskRow key={task.id} task={task} />
            ))}
          </div>
        ) : (
          <div className="flex justify-center items-center h-48 bg-white shadow-md rounded-lg p-4">
            <p className="text-lg text-gray-700">No tasks listed</p>
          </div>
        )}
      </div>
      <TaskModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default ToDo;

