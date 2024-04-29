import React, { useState } from "react";

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
    <div>
      <label htmlFor="startDate">Fecha de inicio:</label>
      <input
        type="date"
        id="startDate"
        value={startDate}
        onChange={handleStartDateChange}
      />

      <label htmlFor="endDate">Fecha de fin:</label>
      <input
        type="date"
        id="endDate"
        value={endDate}
        onChange={handleEndDateChange}
      />
    </div>
  );
};

export default DateFilter;
