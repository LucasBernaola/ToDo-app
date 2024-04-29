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
    <div className="my-4 flex flex-col sm:flex-row items-center">
      <label className="mr-2 mb-2 sm:mb-0 font-medium text-textPrimary" htmlFor="startDate">
        Start Date:
      </label>
      <input
        className="border rounded-md py-1 px-2 mb-2 sm:mb-0 mr-2 sm:mr-4 focus:outline-none focus:ring focus:border-primary"
        type="date"
        id="startDate"
        value={startDate}
        onChange={handleStartDateChange}
      />

      <label className="mr-2 mb-2 sm:mb-0 font-medium text-textPrimary" htmlFor="endDate">
        End Date:
      </label>
      <input
        className="border rounded-md py-1 px-2 mb-2 sm:mb-0 mr-2 sm:mr-4 focus:outline-none focus:ring focus:border-primary"
        type="date"
        id="endDate"
        value={endDate}
        onChange={handleEndDateChange}
      />
    </div>
  );
};

export default DateFilter;
