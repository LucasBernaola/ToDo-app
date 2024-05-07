import React, { useState } from "react";
import "./DateFilter.css";

const handleStartDateChange = (event, setStartDate) => {
  const value = event.target.value;
  setStartDate(value);
};

const handleEndDateChange = (event, setEndDate) => {
  const value = event.target.value;
  setEndDate(value);
};

const DateFilter = ({ setStartDate, setEndDate }) => {
  const [startDate, setLocalStartDate] = useState("");
  const [endDate, setLocalEndDate] = useState("");

  const handleStartDateChangeInternal = (event) => {
    handleStartDateChange(event, setStartDate);
    setLocalStartDate(event.target.value);
  };

  const handleEndDateChangeInternal = (event) => {
    handleEndDateChange(event, setEndDate);
    setLocalEndDate(event.target.value);
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

export { handleStartDateChange, handleEndDateChange };
export default DateFilter;
