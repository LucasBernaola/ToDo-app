import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { TaskProvider } from './context/TaskContext';
import { RouterProvider, createHashRouter } from 'react-router-dom';
import Home from './Pages/Home';
import { Login } from './Pages/Login';
import Register from './Pages/Register';
import LayoutPrivate from './LayoutPrivate';
import ToDo from './components/toDo/ToDo';

const router = createHashRouter([
  {
    path: "/",
    element: <App />, // Layout general que podría incluir la navbar, footer, etc.
    errorElement: <Error />, // Página de error general
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "ToDo", // Ruta base para todas las rutas autenticadas
        element: <LayoutPrivate />, // Layout privado para usuarios autenticados
        children: [
          {
            index: true,
            element: <ToDo />, // Página por defecto para el layout privado
          },
          // otras sub-rutas dentro del layout privado...
        ]
      },
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TaskProvider>
      <RouterProvider router={router} />
    </TaskProvider>
  </React.StrictMode>
);

