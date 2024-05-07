import React, { useState } from "react";
import './Filter.css';

const TaskFilter = ({ setFilter }) => {
  const [selectedFilter, setSelectedFilter] = useState("all");

  const handleFilterChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedFilter(selectedValue);
    setFilter(selectedValue);
  };

  return (
    <div className="task-filter-container">
      <div className="task-filter">
        <h3 className="filter-title">Filtro por Estado de Tarea:</h3>
        <select
          className="filter-select"
          id="filterSelect"
          value={selectedFilter}
          onChange={handleFilterChange}
        >
          <option value="all">Todo</option>
          <option value="completed">Completada</option>
          <option value="incomplete">Incompleta</option>
        </select>
      </div>
    </div>
  );
};

export default TaskFilter;

