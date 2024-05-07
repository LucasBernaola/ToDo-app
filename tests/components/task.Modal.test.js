import React from "react";
import { render, fireEvent, waitFor, findByRole } from "@testing-library/react";
import moment from "moment";
import { Form, notification } from "antd";
import { TaskContext } from "../../src/context/TaskContext";
import TaskModal from "../../src/components/taskModal/taskModal";

// Simulación del módulo de notificaciones de AntD
jest.mock("antd", () => {
  const antd = jest.requireActual("antd");
  const notificationMock = {
    success: jest.fn(),
    error: jest.fn(),
  };
  return {
    ...antd,
    notification: notificationMock,
  };
});

// Función utilitaria para renderizar el componente dentro del proveedor TaskContext
const renderTaskModal = (props, contextValue) => {
  return render(
    <TaskContext.Provider value={contextValue}>
      <TaskModal {...props} />
    </TaskContext.Provider>
  );
};

describe("TaskModal", () => {
  const mockAddTask = jest.fn();
  const mockUpdateTask = jest.fn();
  const mockClose = jest.fn();

  const baseProps = {
    isOpen: true,
    onClose: mockClose,
    task: null,
  };

  const contextValue = {
    addTask: mockAddTask,
    updateTask: mockUpdateTask,
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("debe mostrar el modal cuando isOpen es true y ocultarlo cuando es false", async () => {
    const { queryByText, rerender } = renderTaskModal(
      { isOpen: true, onClose: mockClose },
      contextValue
    );
    expect(queryByText("Agregar Nueva Tarea")).toBeInTheDocument();

    // Update the prop and rerender the component
    rerender(
      <TaskContext.Provider value={contextValue}>
        <div></div>
      </TaskContext.Provider>
    );
    rerender(
      <TaskContext.Provider value={contextValue}>
        <TaskModal isOpen={false} onClose={mockClose} />
      </TaskContext.Provider>
    );

    // Wait for the expected change
    await waitFor(
      () => {
        expect(queryByText("Agregar Nueva Tarea")).not.toBeInTheDocument();
      },
      { timeout: 1000 }
    );
  });

  it("debe llenar los campos del formulario cuando se proporciona una tarea existente", () => {
    const task = {
      id: "1",
      name: "Tarea de Prueba",
      description: "Descripción de Prueba",
      date: "2023-04-29",
    };
    const { getByDisplayValue } = renderTaskModal(
      { ...baseProps, task },
      contextValue
    );
    expect(getByDisplayValue("Tarea de Prueba")).toBeInTheDocument();
    expect(getByDisplayValue("Descripción de Prueba")).toBeInTheDocument();
    expect(
      getByDisplayValue(moment(task.date).format("YYYY-MM-DD"))
    ).toBeInTheDocument();
  });

  it("debería llamar a addTask y mostrar una notificación de éxito al agregar una nueva tarea", async () => {
    const { getByText, getByRole } = renderTaskModal(
      { isOpen: true, onClose: mockClose, task: null },
      { addTask: mockAddTask }
    );

    const nameInput = getByRole("textbox", { name: /nombre de la tarea/i });
    const descriptionInput = getByRole("textbox", { name: /descripción/i });
    const datePickerInput = getByRole("textbox", {
      name: /fecha de la tarea/i,
    });

    // Configurar los inputs de texto
    fireEvent.change(nameInput, { target: { value: "Nueva Tarea" } });
    fireEvent.change(descriptionInput, {
      target: { value: "Nueva Descripción" },
    });

    // Simular entrada directa de fecha, asumiendo que puedes hacerlo como texto
    fireEvent.change(datePickerInput, { target: { value: "2023-01-15" } });

    // Envío del formulario
    fireEvent.click(getByText(/agregar tarea/i));

    // Verificar que addTask ha sido llamada
    await waitFor(() => {
      expect(mockAddTask).toHaveBeenCalledWith({
        name: "Nueva Tarea",
        description: "Nueva Descripción",
        date: expect.any(String), // Verifica que la fecha esté en el formato esperado
      });
    });
  });

  it("debe llamar a updateTask y mostrar una notificación de éxito al actualizar una tarea existente", async () => {
    const task = {
      id: "1",
      name: "Tarea de Prueba",
      description: "Descripción de Prueba",
      date: "2023-04-29",
    };
    const { getByText, getByRole } = renderTaskModal(
      { ...baseProps, task },
      contextValue
    );
    fireEvent.click(getByText(/actualizar tarea/i));

    await waitFor(() =>
      expect(mockUpdateTask).toHaveBeenCalledWith(task.id, {
        name: task.name,
        description: task.description,
        date: task.date,
      })
    );
    expect(notification.success).toHaveBeenCalledWith({
      message: "Tarea actualizada",
      duration: 2.5,
    });
  });
});

beforeAll(() => {
  window.matchMedia =
    window.matchMedia ||
    function () {
      return {
        matches: false,
        addListener: function () {},
        removeListener: function () {},
      };
    };
});
