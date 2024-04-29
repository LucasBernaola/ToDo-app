import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TaskRow from '../../components/taskRow/TaskRow';
import { TaskProvider } from '../../context/TaskContext';

describe('TaskRow Component', () => {
  const task = {
    id: 1,
    name: 'Task Name',
    description: 'Task Description',
    completed: false,
    date: '2024-04-29',
  };

  it('renders task name, description, and buttons correctly', () => {
    const { queryAllByText } = render(
      <TaskProvider>
        <TaskRow task={task} />
      </TaskProvider>
    );

    expect(queryAllByText('Task Name')).toHaveLength(1);
    expect(queryAllByText('Task Description')).toHaveLength(1);
    expect(queryAllByText('Edit Task')).toHaveLength(1);
    expect(queryAllByText('Delete')).toHaveLength(1);
  });

  it('opens modal when "Edit Task" button is clicked', () => {
    const { getByText } = render(
      <TaskProvider>
        <TaskRow task={task} />
      </TaskProvider>
    );

    fireEvent.click(getByText('Edit Task'));

    expect(getByText('Editar Tarea')).toBeInTheDocument();
  });

  it('calls deleteTask function when "Delete" button is clicked', () => {
    const { getByText } = render(
      <TaskProvider>
        <TaskRow task={task} />
      </TaskProvider>
    );

    fireEvent.click(getByText('Delete'));

  });
});

