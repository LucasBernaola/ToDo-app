import React from "react";
import { render, fireEvent } from "@testing-library/react";
import DateFilter from "./DateFilter";

describe("DateFilter component", () => {
  it("debería filtrar las tareas según el rango de fechas seleccionado", () => {
    // Creamos mocks para las funciones setStartDate y setEndDate
    const setStartDateMock = jest.fn();
    const setEndDateMock = jest.fn();

    // Renderizamos el componente DateFilter con las funciones de mock
    const { getByLabelText } = render(
      <DateFilter setStartDate={setStartDateMock} setEndDate={setEndDateMock} />
    );

    // Simulamos un cambio en el campo de fecha de inicio
    const startDateInput = getByLabelText("Start Date:");
    fireEvent.change(startDateInput, { target: { value: "2022-01-01" } });

    // Simulamos un cambio en el campo de fecha de fin
    const endDateInput = getByLabelText("End Date:");
    fireEvent.change(endDateInput, { target: { value: "2022-01-31" } });

    // Verificamos que las funciones setStartDate y setEndDate hayan sido llamadas con las fechas seleccionadas
    expect(setStartDateMock).toHaveBeenCalledWith("2022-01-01");
    expect(setEndDateMock).toHaveBeenCalledWith("2022-01-31");
  });
});
