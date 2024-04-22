import React, { useState } from "react";

const TaskFilter = ({ setFilter }) => {
  const [selectedFilter, setSelectedFilter] = useState("all");

  const handleFilterChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedFilter(selectedValue);
    setFilter(selectedValue);
  };

  return (
    <div>
      <label htmlFor="filterSelect">Status: </label>
      <select
        id="filterSelect"
        value={selectedFilter}
        onChange={handleFilterChange}
      >
        <option value="all">Todas</option>
        <option value="completed">Completadas</option>
        <option value="incomplete">Incompletas</option>
      </select>
    </div>
  );
};

export default TaskFilter;
