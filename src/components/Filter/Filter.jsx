import React, { useState } from "react";

const TaskFilter = ({ setFilter }) => {
  const [selectedFilter, setSelectedFilter] = useState("all");

  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
    setFilter(filter);
  };

  return (
    <div>
      <label>
        <input
          type="radio"
          value="all"
          checked={selectedFilter === "all"}
          onChange={() => handleFilterChange("all")}
        />
        Todas
      </label>
      <label>
        <input
          type="radio"
          value="completed"
          checked={selectedFilter === "completed"}
          onChange={() => handleFilterChange("completed")}
        />
        Completadas
      </label>
      <label>
        <input
          type="radio"
          value="incomplete"
          checked={selectedFilter === "incomplete"}
          onChange={() => handleFilterChange("incomplete")}
        />
        Incompletas
      </label>
    </div>
  );
};

export default TaskFilter;
