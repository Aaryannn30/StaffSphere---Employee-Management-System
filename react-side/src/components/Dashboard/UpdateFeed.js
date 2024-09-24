import React, { useState } from 'react';

// Sample data to simulate tasks being assigned
const taskData = [
  {
    id: 1,
    assignedBy: "Admin John",
    assignedTo: "Team Member A",
    taskTitle: "Task 1 - Update Directory",
    taskDetails: "Please update the company directory with new employee information.",
    timestamp: "31/8 at 07:16",
  },
  {
    id: 2,
    assignedBy: "Admin Sarah",
    assignedTo: "Team Member B",
    taskTitle: "Task 2 - Job Scheduler",
    taskDetails: "Create and update job scheduler for the upcoming project.",
    timestamp: "31/8 at 07:20",
  },
  // Add more tasks here
];

function UpdateFeed() {
  const [hoveredTask, setHoveredTask] = useState(null);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white p-4 rounded-lg shadow-lg">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Activity</h1>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-500">Date range:</span>
            <input
              type="date"
              className="border border-gray-300 rounded-md px-2 py-1"
            />
            <input
              type="date"
              className="border border-gray-300 rounded-md px-2 py-1"
            />
          </div>
        </div>

        <div className="mt-6 space-y-4">
          {taskData.map((task) => (
            <div
              key={task.id}
              className="p-4 border border-gray-300 rounded-lg hover:bg-blue-50 transition duration-150 ease-in-out"
              onMouseEnter={() => setHoveredTask(task.id)}
              onMouseLeave={() => setHoveredTask(null)}
            >
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-purple-500 text-white rounded-full flex items-center justify-center">
                  {task.assignedBy.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold">{task.assignedBy}</p>
                  <p className="text-gray-500">{task.timestamp}</p>
                </div>
              </div>
              <p className="mt-2 text-blue-600 font-medium">{task.taskTitle}</p>

              {/* Show details on hover */}
              {hoveredTask === task.id && (
                <div className="mt-2 bg-white border border-gray-300 p-4 rounded-md shadow-md">
                  <p><span className="font-bold">Assigned to:</span> {task.assignedTo}</p>
                  <p><span className="font-bold">Task details:</span> {task.taskDetails}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default UpdateFeed;
