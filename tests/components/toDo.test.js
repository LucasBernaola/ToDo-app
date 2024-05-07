import React from 'react';
import { TaskContext } from '../../src/context/TaskContext';
import ToDo from '../../src/components/toDo/ToDo';
import { render, fireEvent, screen } from '@testing-library/react';


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


const mockUseTask = {
  tasks: [],
  loading: false,
};

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