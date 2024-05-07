import React, { useState } from "react";

const TaskFilter = ({ setFilter }) => {
  const [selectedFilter, setSelectedFilter] = useState("all");

  const handleFilterChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedFilter(selectedValue);
    setFilter(selectedValue);
  };

  return (
    <div className="my-4 flex items-center">
      <label
        className="mr-2 font-medium text-textPrimary"
        htmlFor="filterSelect"
      >
        Status:
      </label>
      <select
        className="border rounded-md py-1 px-2 focus:outline-none focus:ring focus:border-primary"
        id="filterSelect"
        value={selectedFilter}
        onChange={handleFilterChange}
      >
        <option className="text-textPrimary" value="all">
          All
        </option>
        <option className="text-textPrimary" value="completed">
          Completed
        </option>
        <option className="text-textPrimary" value="incomplete">
          Incomplete
        </option>
      </select>
    </div>
  );
};

export default TaskFilter;
