import React from 'react';

const AboutApp = () => {
  return (
    <div className="bg-gradient-to-r from-primary to-secondary text-textPrimary p-8 flex flex-col justify-center items-center">
      <h2 className="text-3xl font-bold mb-4 shadow-white" style={{ textShadow: "0px 0px 10px rgba(255, 255, 255, 0.7)" }}>Welcome to our To-Do List App!</h2>
      <p className="text-xl text-center text-textPrimary shadow-white mb-8" style={{ textShadow: "0px 0px 10px rgba(255, 255, 255, 0.7)" }}>
        Our To-Do List App is the perfect tool to help you organize your day-to-day tasks efficiently and hassle-free. With our app, you can manage all your pending tasks easily and quickly, allowing you to focus on what really matters.
      </p>
      <div className="text-lg text-textPrimary shadow-white text-center" style={{ textShadow: "0px 0px 10px rgba(255, 255, 255, 0.7)" }}>
        <p className="mb-4 font-bold">Key Features</p>
        <ul className="list-none">
          <li className="mb-2"><b>Add Tasks:</b> With our app, you can easily add new tasks with just a few clicks. Simply enter the title and description of the task, and you're ready to go.</li>
          <li className="mb-2"><b>Edit Tasks:</b> Need to make changes to an existing task? No problem. With our app, you can edit the title, description, or status of any task at any time.</li>
          <li className="mb-2"><b>Mark as Complete or Incomplete:</b> Keep a clear track of your task progress by marking them as complete or incomplete. This will help you prioritize your activities and keep a record of what you've already done.</li>
          <li className="mb-2"><b>Delete Tasks:</b> Is a task no longer relevant or necessary? With our app, you can easily delete tasks that you've already completed or are no longer relevant.</li>
        </ul>
        <p className="text-xl text-center text-textPrimary shadow-white mb-8" style={{ textShadow: "0px 0px 10px rgba(255, 255, 255, 0.7)" }}>
            Our To-Do List App is designed with simplicity and usability in mind, so you can focus on what you need to do without unnecessary distractions
        </p>
      </div>
    </div>
  );
}

export default AboutApp;
