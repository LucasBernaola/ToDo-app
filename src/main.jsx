import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { TaskProvider } from "./context/TaskContext";
import { RouterProvider, createHashRouter } from "react-router-dom";
import Home from "./Pages/Home";

const router = createHashRouter([
  {
    path: "/",
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <TaskProvider>
      <RouterProvider router={router} />
    </TaskProvider>
  </React.StrictMode>
);
