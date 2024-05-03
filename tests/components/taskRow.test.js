import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TaskRow from '../../src/components/taskRow/TaskRow';

// Mock del context de tareas
jest.mock('../../src/context/TaskContext.jsx', () => ({
  useTask: () => ({
    deleteTask: jest.fn(),
  }),
}));

// Mock del componente TaskStatusButton
jest.mock('../../src/components/taskStatusButton/TaskStatusButton', () => () => <div>MockTaskStatusButton</div>);

// Mock del componente TaskModal
jest.mock('../../src/components/taskModal/taskModal', () => () => <div>MockTaskModal</div>);

describe('TaskRow component', () => {
  const task = {
    id: 1,
    name: 'Test Task',
    description: 'This is a test task',
    completed: false,
    date: '2024-05-03',
  };

  it('renders task details correctly', () => {
    const { getByText } = render(<TaskRow task={task} />);
    expect(getByText('Test Task')).toBeInTheDocument();
    expect(getByText('This is a test task')).toBeInTheDocument();
    expect(getByText('2024-05-03')).toBeInTheDocument();
  });

  //it('calls deleteTask function when delete button is clicked', () => {
  //  const { getByText } = render(<TaskRow task={task} />);
  //  fireEvent.click(getByText('Delete'));
  //  const deleteButton = getByText('Delete');
  //  expect(deleteButton).toHaveAttribute('onClick');
  //});

  it('opens modal when Edit Task button is clicked', () => {
    const { getByText } = render(<TaskRow task={task} />);
    fireEvent.click(getByText('Edit Task'));
    expect(getByText('MockTaskModal')).toBeInTheDocument();
  });
});
