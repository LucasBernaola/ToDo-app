import React from 'react';
import { render, screen } from '@testing-library/react';
import ToDo from '../../src/components/toDo/ToDo.jsx'; // Asegúrate de que la ruta al componente es correcta
import { TaskContext } from '../../src/context/TaskContext.jsx'; // Importa el contexto necesario

const mockContextEmpty = {
  tasks: [],
  loading: false,
};

const mockContextWithTasks = {
  tasks: [
    { 
      id: '1',
      name: 'Tarea de Prueba',
      description: 'Descripción de Prueba',
      date: '2023-04-29',
     completed: false },
     { 
      id: '1',
      name: 'Tarea de Prueba2',
      description: 'Descripción de Prueba2',
      date: '2023-04-29',
     completed: true },
  ],
  loading: false,
};

const WrapperWithTasks = ({ children }) => (
  <TaskContext.Provider value={mockContextWithTasks}>
    {children}
  </TaskContext.Provider>
);

// Crea un wrapper para proveer el contexto mockeado a tu componente
const WrapperEmpty = ({ children }) => (
  <TaskContext.Provider value={mockContextEmpty}>
    {children}
  </TaskContext.Provider>
);

test('ToDo se renderiza correctamente y el botón para añadir tareas está presente', () => {
  // Renderiza el componente dentro del contexto mockeado
  render(<ToDo />, { wrapper: WrapperEmpty });

  // Verifica si el botón para añadir una nueva tarea está en el documento
  const addButton = screen.getByText(/Add new task/i);
  const noTasks = screen.getByText(/No tasks found/i)
  expect(addButton).toBeInTheDocument();
  expect(noTasks).toBeInTheDocument()
});

test('ToDo se renderiza correctamente y muestra las tareas del contexto', () => {
  render(<ToDo />, { wrapper: WrapperWithTasks });
  const task1 = screen.getByText('Tarea de Prueba');
  const task2 = screen.getByText('Tarea de Prueba2');
  expect(task1).toBeInTheDocument();
  expect(task2).toBeInTheDocument();
});
