import React, { useState } from "react";

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
    <div className="my-4 flex items-center">
      <label className="mr-2 font-medium text-textPrimary" htmlFor="startDate">
        Start Date:
      </label>
      <input
        className="border rounded-md py-1 px-2 focus:outline-none focus:ring focus:border-primary"
        type="date"
        id="startDate"
        value={startDate}
        onChange={handleStartDateChangeInternal}
      />

      <label className="mx-4 font-medium text-textPrimary" htmlFor="endDate">
        End Date:
      </label>
      <input
        className="border rounded-md py-1 px-2 focus:outline-none focus:ring focus:border-primary"
        type="date"
        id="endDate"
        value={endDate}
        onChange={handleEndDateChangeInternal}
      />
    </div>
  );
};

export { handleStartDateChange, handleEndDateChange };
export default DateFilter;
