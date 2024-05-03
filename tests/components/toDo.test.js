import React from 'react';
import { TaskContext } from '../../src/context/TaskContext';
import ToDo from '../../src/components/toDo/ToDo';
import { render, fireEvent, screen } from '@testing-library/react';


// window.matchMedia es una función del navegador que se utiliza para consultar el estado de los media queries CSS. Si tu componente o alguna librería que estás utilizando (como parece ser Ant Design en este caso) usa esta función, necesitarás proporcionar un mock para matchMedia en tu entorno de pruebas.
beforeAll(() => {
  window.matchMedia = jest.fn().mockImplementation(query => {
    return {
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(), // deprecated
      removeListener: jest.fn(), // deprecated
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    };
  });
});


// Mock del contexto
const mockUseTask = {
  tasks: [],
  loading: false,
};

// Wrapper para proveer el contexto mockeado
const Wrapper = ({ children }) => (
  <TaskContext.Provider value={mockUseTask}>{children}</TaskContext.Provider>
);

test('se renderiza el componente ToDo sin tareas', () => {
  const { getByText } = render(<ToDo />, { wrapper: Wrapper });
  expect(getByText(/No tasks found/i)).toBeInTheDocument();
});



test('debe abrir el modal cuando se hace clic en el botón de añadir tarea', () => {
  render(<ToDo />, { wrapper: Wrapper });
  const addButton = screen.getByText(/Add new task/i);
  fireEvent.click(addButton);
  const modal = screen.getByRole('dialog');
  expect(modal).toBeInTheDocument();
});