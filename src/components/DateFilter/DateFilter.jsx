import React, { useState } from "react";
import "./DateFilter.css";

const DateFilter = ({ setStartDate, setEndDate }) => {
  const [startDate, setLocalStartDate] = useState("");
  const [endDate, setLocalEndDate] = useState("");

  const handleStartDateChange = (event) => {
    const value = event.target.value;
    setLocalStartDate(value);
    setStartDate(value);
  };

  const handleEndDateChange = (event) => {
    const value = event.target.value;
    setLocalEndDate(value);
    setEndDate(value);
  };

  return (
    <div className="date-filter-container">
      <h2 className="date-filter-title">Filtro de Tareas por Fecha</h2>
      <div className="date-filters">
        <div className="date-filter">
          <label htmlFor="startDate">Desde Fecha:</label>
          <input
            className="date-input"
            type="date"
            id="startDate"
            value={startDate}
            onChange={handleStartDateChange}
          />
        </div>

        <div className="date-filter">
          <label htmlFor="endDate">Hasta Fecha:</label>
          <input
            className="date-input"
            type="date"
            id="endDate"
            value={endDate}
            onChange={handleEndDateChange}
          />
        </div>
      </div>
    </div>
  );
};

export default DateFilter;
