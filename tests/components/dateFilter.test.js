const {
    handleStartDateChange,
    handleEndDateChange,
  } = require("../../src/components/DateFilter/DateFilter");
  
  describe("DateFilter functions", () => {
    describe("handleStartDateChange", () => {
      test("should update start date correctly", () => {
        const setStartDateMock = jest.fn();
        const event = { target: { value: "2024-04-01" } };
  
        handleStartDateChange(event, setStartDateMock);
  
        expect(setStartDateMock).toHaveBeenCalledWith("2024-04-01");
      });
    });
  
    describe("handleEndDateChange", () => {
      test("should update end date correctly", () => {
        const setEndDateMock = jest.fn();
        const event = { target: { value: "2024-04-30" } };
  
        handleEndDateChange(event, setEndDateMock);
  
        expect(setEndDateMock).toHaveBeenCalledWith("2024-04-30");
      });
    });
  });