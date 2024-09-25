// // import React, { useState, createContext, useContext } from 'react';

// // // Context Setup for handling context menus
// // const UIContext = createContext();

// // const UIProvider = ({ children }) => {
// //     const [contextMenu, setContextMenu] = useState(null);

// //     const showContextMenu = (type, x, y, index) => {
// //         setContextMenu({ type, x, y, index });
// //     };

// //     const hideContextMenu = () => {
// //         setContextMenu(null);
// //     };

// //     return (
// //         <UIContext.Provider value={{ contextMenu, showContextMenu, hideContextMenu }}>
// //             {children}
// //         </UIContext.Provider>
// //     );
// // };

// // const useContextMenu = () => {
// //     return useContext(UIContext);
// // };

// // function Workspace() {
// //     const initialTasks = [
// //         {
// //             task: "Task 1",
// //             owner: "N6", // Avatar or initials
// //             status: "Working on it",
// //             dueDate: "13 - 14 Sep",
// //             priority: "Low",
// //             notes: "Action items",
// //             budget: "$100",
// //             files: 1, // Representing one file
// //             timeline: "13 - 14 Sep",
// //             lastUpdated: "20 hours ago",
// //         },
// //         {
// //             task: "Task 2",
// //             owner: "Guest",
// //             status: "Done",
// //             dueDate: "14 Sep",
// //             priority: "High",
// //             notes: "Meeting notes",
// //             budget: "$1000",
// //             files: 0,
// //             timeline: "15 - 16 Sep",
// //             lastUpdated: "10 months ago",
// //         },
// //     ];

// //     const [tasks, setTasks] = useState(initialTasks);
// //     const [completedTasks, setCompletedTasks] = useState([]);
// //     const [searchQuery, setSearchQuery] = useState('');
// //     const [filters, setFilters] = useState({ status: '', priority: '', owner: '' });
// //     const [sortOrder, setSortOrder] = useState('asc');
// //     const [hideCompleted, setHideCompleted] = useState(false);
// //     const [groupBy, setGroupBy] = useState('');
// //     const { showContextMenu, hideContextMenu } = useContextMenu();

// //     // Add a new task to the To-Do section
// //     const addTask = () => {
// //         const newTask = {
// //             task: "New Task",
// //             owner: "Guest",
// //             status: "Not Started",
// //             dueDate: "01 Aug",
// //             priority: "Low",
// //             notes: "New Notes",
// //             budget: "$0",
// //             files: 0,
// //             timeline: "01 - 02 Aug",
// //             lastUpdated: "Now",
// //         };
// //         setTasks([...tasks, newTask]);
// //     };

// //     // Move task to Completed section
// //     const completeTask = (index) => {
// //         const completedTask = tasks[index];
// //         setCompletedTasks([...completedTasks, completedTask]);
// //         setTasks(tasks.filter((_, i) => i !== index));
// //     };

// //     // Handle search
// //     const handleSearch = (event) => {
// //         setSearchQuery(event.target.value);
// //     };

// //     // Handle filter
// //     const applyFilter = (filterType, value) => {
// //         setFilters({
// //             ...filters,
// //             [filterType]: value,
// //         });
// //     };

// //     // Handle sorting
// //     const handleSort = (field) => {
// //         const sortedTasks = [...tasks].sort((a, b) => {
// //             if (sortOrder === 'asc') {
// //                 return a[field] > b[field] ? 1 : -1;
// //             } else {
// //                 return a[field] < b[field] ? 1 : -1;
// //             }
// //         });
// //         setTasks(sortedTasks);
// //         setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
// //     };

// //     // Toggle visibility of completed tasks
// //     const toggleHideCompleted = () => {
// //         setHideCompleted(!hideCompleted);
// //     };

// //     // Handle Group By functionality
// //     const handleGroupBy = (field) => {
// //         setGroupBy(field);
// //         const groupedTasks = [...tasks].sort((a, b) => (a[field] > b[field] ? 1 : -1));
// //         setTasks(groupedTasks);
// //     };

// //     // Handle right-click on a row
// //     const handleRowRightClick = (event, index) => {
// //         event.preventDefault();
// //         showContextMenu('row', event.clientX, event.clientY, index);
// //     };

// //     // Handle right-click on a column header
// //     const handleColumnRightClick = (event, index) => {
// //         event.preventDefault();
// //         showContextMenu('column', event.clientX, event.clientY, index);
// //     };

// //     // Delete a specific row
// //     const deleteRow = (index) => {
// //         setTasks((prevTasks) => prevTasks.filter((_, i) => i !== index));
// //         hideContextMenu();
// //     };

// //     // Delete a specific column
// //     const deleteColumn = (index) => {
// //         // Assuming we want to delete the column and clear its values from tasks
// //         hideContextMenu();
// //     };

// //     // Context Menu Component
// //     const ContextMenu = () => {
// //         const { contextMenu } = useContextMenu();

// //         if (!contextMenu) return null;

// //         const { type, x, y, index } = contextMenu;

// //         return (
// //             <div style={{ position: 'absolute', top: y, left: x, backgroundColor: 'white', padding: '10px' }}>
// //                 {type === 'row' && (
// //                     <button onClick={() => deleteRow(index)}>Delete Row</button>
// //                 )}
// //                 {type === 'column' && (
// //                     <button onClick={() => deleteColumn(index)}>Delete Column</button>
// //                 )}
// //             </div>
// //         );
// //     };

// //     return (
// //         <div className="bg-gray-900 text-gray-200 min-h-screen p-4" onContextMenu={hideContextMenu}>
// //             {/* Header Section */}
// //             <div className="flex justify-between items-center mb-6">
// //                 <div className="flex items-center">
// //                     <h1 className="text-2xl font-bold">Aryan</h1>
// //                     <div className="ml-6">
// //                         <span className="text-lg">Main Table</span>
// //                         <button className="ml-4 text-sm border border-gray-700 px-2 py-1 rounded">+</button>
// //                     </div>
// //                 </div>

// //                 <div className="flex items-center space-x-4">
// //                     <button className="bg-blue-600 text-white px-4 py-2 rounded-md" onClick={addTask}>New task</button>
// //                     <input
// //                         type="text"
// //                         placeholder="Search"
// //                         value={searchQuery}
// //                         onChange={handleSearch}
// //                         className="bg-gray-800 px-2 py-1 rounded-md"
// //                     />
// //                     <button className="text-gray-400" onClick={() => applyFilter('owner', 'Person')}>Person</button>
// //                     <button className="text-gray-400" onClick={() => applyFilter('status', 'Completed')}>Filter</button>
// //                     <button className="text-gray-400" onClick={() => handleSort('task')}>Sort</button>
// //                     <button className="text-gray-400" onClick={toggleHideCompleted}>Hide</button>
// //                     <button className="text-gray-400" onClick={() => handleGroupBy('owner')}>Group by</button>
// //                 </div>

// //                 <div className="flex items-center space-x-4">
// //                     <button className="text-gray-400">Integrate</button>
// //                     <button className="text-gray-400">Automate</button>
// //                     <button className="text-gray-400">Invite / 1</button>
// //                     <span className="text-gray-400">N6</span>
// //                 </div>
// //             </div>

// //             {/* To-Do Section */}
// //             <h2 className="text-xl mb-4">To-Do</h2>
// //             <table className="min-w-full bg-gray-800 text-gray-100 border border-gray-700">
// //                 <thead>
// //                     <tr className="border-b border-gray-700">
// //                         {["Task", "Owner", "Status", "Due Date", "Priority", "Notes", "Budget", "Files", "Timeline", "Last Updated"].map((col, index) => (
// //                             <th key={index} className="py-2 px-4 text-left" onContextMenu={(e) => handleColumnRightClick(e, index)}>
// //                                 {col}
// //                             </th>
// //                         ))}
// //                     </tr>
// //                 </thead>
// //                 <tbody>
// //                     {tasks
// //                         .filter(task => task.task.toLowerCase().includes(searchQuery.toLowerCase()))
// //                         .map((task, index) => (
// //                             <tr key={index} className="border-b border-gray-700" onContextMenu={(e) => handleRowRightClick(e, index)}>
// //                                 <td className="py-2 px-4">{task.task}</td>
// //                                 <td className="py-2 px-4">{task.owner}</td>
// //                                 <td className="py-2 px-4">{task.status}</td>
// //                                 <td className="py-2 px-4">{task.dueDate}</td>
// //                                 <td className="py-2 px-4">{task.priority}</td>
// //                                 <td className="py-2 px-4">{task.notes}</td>
// //                                 <td className="py-2 px-4">{task.budget}</td>
// //                                 <td className="py-2 px-4">{task.files > 0 ? "Yes" : "No"}</td>
// //                                 <td className="py-2 px-4">{task.timeline}</td>
// //                                 <td className="py-2 px-4">{task.lastUpdated}</td>
// //                                 <td className="py-2 px-4">
// //                                     <button onClick={() => completeTask(index)}>Complete</button>
// //                                 </td>
// //                             </tr>
// //                         ))}
// //                 </tbody>
// //             </table>

// //             {/* Completed Section */}
// //             {!hideCompleted && (
// //                 <>
// //                     <h2 className="text-xl mt-6 mb-4">Completed</h2>
// //                     <table className="min-w-full bg-gray-800 text-gray-100 border border-gray-700">
// //                         <thead>
// //                             <tr className="border-b border-gray-700">
// //                                 {["Task", "Owner", "Status", "Due Date", "Priority", "Notes", "Budget", "Files", "Timeline", "Last Updated"].map((col, index) => (
// //                                     <th key={index} className="py-2 px-4 text-left">{col}</th>
// //                                 ))}
// //                             </tr>
// //                         </thead>
// //                         <tbody>
// //                             {completedTasks.map((task, index) => (
// //                                 <tr key={index} className="border-b border-gray-700">
// //                                     <td className="py-2 px-4">{task.task}</td>
// //                                     <td className="py-2 px-4">{task.owner}</td>
// //                                     <td className={`py-2 px-4 bg-green-500`}>{task.status}</td>
// //                                     <td className="py-2 px-4">{task.dueDate}</td>
// //                                     <td className="py-2 px-4">{task.priority}</td>
// //                                     <td className="py-2 px-4">{task.notes}</td>
// //                                     <td className="py-2 px-4">{task.budget}</td>
// //                                     <td className="py-2 px-4">{task.files > 0 ? "Yes" : "No"}</td>
// //                                     <td className="py-2 px-4">{task.timeline}</td>
// //                                     <td className="py-2 px-4">{task.lastUpdated}</td>
// //                                 </tr>
// //                             ))}
// //                         </tbody>
// //                     </table>
// //                 </>
// //             )}

// //             <ContextMenu />
// //         </div>
// //     );
// // }

// // export default function App() {
// //     return (
// //         <UIProvider>
// //             <Workspace />
// //         </UIProvider>
// //     );
// // }

// import React, { useState, useEffect, useRef } from 'react';
// import flatpickr from 'flatpickr';
// import 'flatpickr/dist/flatpickr.min.css';


// const EditableCell = ({ value, onChange }) => {
//     return (
//         <input
//             type="text"
//             value={value}
//             onChange={(e) => onChange(e.target.value)}
//             className="bg-transparent border-none text-white w-full"
//         />
//     );
// };

// const StatusCell = ({ value, onChange }) => {
//     const [showPopup, setShowPopup] = useState(false);

//     const statusClasses = {
//         'Working on it': 'bg-yellow-500 text-black',
//         'Done': 'bg-green-500 text-black',
//         'Stuck': 'bg-red-500 text-black',
//         'Not Started': 'bg-gray-500 text-black'
//     };

//     const handleStatusChange = (status) => {
//         onChange(status);
//         setShowPopup(false);
//     };

//     return (
//         <div className="relative">
//             <div
//                 className={`${statusClasses[value]} cursor-pointer px-2 py-1 rounded`}
//                 onClick={() => setShowPopup(!showPopup)}
//             >
//                 {value}
//             </div>
//             {showPopup && (
//                 <div className="absolute bg-gray-800 border border-gray-700 rounded p-2 z-10">
//                     {Object.keys(statusClasses).map((status) => (
//                         <div
//                             key={status}
//                             className="cursor-pointer p-1 hover:bg-gray-700"
//                             onClick={() => handleStatusChange(status)}
//                         >
//                             {status}
//                         </div>
//                     ))}
//                 </div>
//             )}
//         </div>
//     );
// };

// const PriorityCell = ({ value, onChange }) => {
//     const [showPopup, setShowPopup] = useState(false);

//     const priorityClasses = {
//         'Low': 'bg-blue-500 text-black',
//         'Medium': 'bg-yellow-500 text-black',
//         'High': 'bg-purple-500 text-black'
//     };

//     const handlePriorityChange = (priority) => {
//         onChange(priority);
//         setShowPopup(false);
//     };

//     return (
//         <div className="relative">
//             <div
//                 className={`${priorityClasses[value]} cursor-pointer px-2 py-1 rounded`}
//                 onClick={() => setShowPopup(!showPopup)}
//             >
//                 {value}
//             </div>
//             {showPopup && (
//                 <div className="absolute bg-gray-800 border border-gray-700 rounded p-2 z-10">
//                     {Object.keys(priorityClasses).map((priority) => (
//                         <div
//                             key={priority}
//                             className="cursor-pointer p-1 hover:bg-gray-700"
//                             onClick={() => handlePriorityChange(priority)}
//                         >
//                             {priority}
//                         </div>
//                     ))}
//                 </div>
//             )}
//         </div>
//     );
// };

// const OwnerCell = ({ value, onChange }) => {
//     const [showPopup, setShowPopup] = useState(false);
//     const [searchTerm, setSearchTerm] = useState('');
//     const [owners, setOwners] = useState(['N6', 'John', 'Jane', 'Doe']);

//     const handleOwnerChange = (owner) => {
//         onChange(owner);
//         setShowPopup(false);
//     };

//     const filteredOwners = owners.filter(owner => owner.toLowerCase().includes(searchTerm.toLowerCase()));

//     return (
//         <div className="relative">
//             <div
//                 className="cursor-pointer"
//                 onClick={() => setShowPopup(!showPopup)}
//             >
//                 {value ? <span className="inline-block bg-blue-500 text-white px-2 py-1 rounded-full">{value}</span> : <i className="fas fa-user-circle text-blue-500"></i>}
//             </div>
//             {showPopup && (
//                 <div className="absolute bg-gray-800 border border-gray-700 rounded p-2 z-10">
//                     <input
//                         type="text"
//                         value={searchTerm}
//                         onChange={(e) => setSearchTerm(e.target.value)}
//                         placeholder="Search owners"
//                         className="bg-gray-700 border-none text-white w-full mb-2 p-1 rounded"
//                     />
//                     {filteredOwners.map((owner) => (
//                         <div
//                             key={owner}
//                             className="cursor-pointer p-1 hover:bg-gray-700"
//                             onClick={() => handleOwnerChange(owner)}
//                         >
//                             {owner}
//                         </div>
//                     ))}
//                     <button
//                         className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
//                         onClick={() => alert('Invite members functionality')}
//                     >
//                         Invite members
//                     </button>
//                 </div>
//             )}
//         </div>
//     );
// };

// const TimelineCell = ({ value, onChange }) => {
//     const [showPopup, setShowPopup] = useState(false);
//     const [startDate, setStartDate] = useState('');
//     const [endDate, setEndDate] = useState('');
//     const startDateRef = useRef(null);
//     const endDateRef = useRef(null);

//     useEffect(() => {
//         if (startDateRef.current && endDateRef.current) {
//             flatpickr(startDateRef.current, {
//                 onChange: (selectedDates, dateStr) => {
//                     setStartDate(dateStr);
//                     onChange(`${dateStr} - ${endDate}`);
//                 }
//             });
//             flatpickr(endDateRef.current, {
//                 onChange: (selectedDates, dateStr) => {
//                     setEndDate(dateStr);
//                     onChange(`${startDate} - ${dateStr}`);
//                 }
//             });
//         }
//     }, [startDateRef, endDateRef, startDate, endDate, onChange]);

//     return (
//         <div className="relative">
//             <div
//                 className="cursor-pointer px-2 py-1 rounded bg-gray-700"
//                 onClick={() => setShowPopup(!showPopup)}
//             >
//                 {value}
//             </div>
//             {showPopup && (
//                 <div className="absolute bg-gray-800 border border-gray-700 rounded p-2 z-10">
//                     <input
//                         type="text"
//                         ref={startDateRef}
//                         placeholder="Start Date"
//                         className="bg-gray-700 border-none text-white w-full mb-2 p-1 rounded"
//                     />
//                     <input
//                         type="text"
//                         ref={endDateRef}
//                         placeholder="End Date"
//                         className="bg-gray-700 border-none text-white w-full mb-2 p-1 rounded"
//                     />
//                 </div>
//             )}
//         </div>
//     );
// };

// const TaskTable = ({ title, tasks, setTasks }) => {
//     const handleCellChange = (index, key, value) => {
//         const newTasks = [...tasks];
//         newTasks[index][key] = value;
//         setTasks(newTasks);
//     };

//     const addTask = () => {
//         const newTask = {
//             name: 'New Task',
//             owner: '',
//             status: 'Not Started',
//             dueDate: '',
//             priority: 'Low',
//             notes: '',
//             budget: '$0',
//             files: false,
//             timeline: '',
//             timelineClass: '',
//             lastUpdated: 'Just now'
//         };
//         setTasks([...tasks, newTask]);
//     };

//     return (
//         <div className="mb-4">
//             <h2 className="text-xl mb-2">{title}</h2>
//             <table className="task-table w-full border-collapse">
//                 <thead>
//                     <tr className="bg-gray-800">
//                         <th className="border border-gray-700 p-2">Task</th>
//                         <th className="border border-gray-700 p-2">Owner</th>
//                         <th className="border border-gray-700 p-2">Status</th>
//                         <th className="border border-gray-700 p-2">Due date</th>
//                         <th className="border border-gray-700 p-2">Priority</th>
//                         <th className="border border-gray-700 p-2">Notes</th>
//                         <th className="border border-gray-700 p-2">Budget</th>
//                         <th className="border border-gray-700 p-2">Files</th>
//                         <th className="border border-gray-700 p-2">Timeline</th>
//                         <th className="border border-gray-700 p-2">Last updated</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {tasks.map((task, index) => (
//                         <tr key={index} className="bg-gray-800">
//                             <td className="border border-gray-700 p-2"><EditableCell value={task.name} onChange={(value) => handleCellChange(index, 'name', value)} /></td>
//                             <td className="border border-gray-700 p-2"><OwnerCell value={task.owner} onChange={(value) => handleCellChange(index, 'owner', value)} /></td>
//                             <td className="border border-gray-700 p-2"><StatusCell value={task.status} onChange={(value) => handleCellChange(index, 'status', value)} /></td>
//                             <td className="border border-gray-700 p-2"><EditableCell value={task.dueDate} onChange={(value) => handleCellChange(index, 'dueDate', value)} /></td>
//                             <td className="border border-gray-700 p-2"><PriorityCell value={task.priority} onChange={(value) => handleCellChange(index, 'priority', value)} /></td>
//                             <td className="border border-gray-700 p-2"><EditableCell value={task.notes} onChange={(value) => handleCellChange(index, 'notes', value)} /></td>
//                             <td className="border border-gray-700 p-2"><EditableCell value={task.budget} onChange={(value) => handleCellChange(index, 'budget', value)} /></td>
//                             <td className="border border-gray-700 p-2">{task.files ? <i className="fas fa-file text-blue-500"></i> : ''}</td>
//                             <td className="border border-gray-700 p-2"><TimelineCell value={task.timeline} onChange={(value) => handleCellChange(index, 'timeline', value)} /></td>
//                             <td className="border border-gray-700 p-2">{task.lastUpdated}</td>
//                         </tr>
//                     ))}
//                     <tr>
//                         <td className="border border-gray-700 p-2 text-blue-500 cursor-pointer" colSpan="10" onClick={addTask}>+ Add task</td>
//                     </tr>
//                 </tbody>
//                 <tfoot>
//                     <tr className="bg-gray-800">
//                         <td className="border border-gray-700 p-2" colSpan="5"></td>
//                         <td className="border border-gray-700 p-2"></td>
//                         <td className="border border-gray-700 p-2">${tasks.reduce((sum, task) => sum + parseFloat(task.budget.replace('$', '')), 0)} <span className="text-blue-500">sum</span></td>
//                         <td className="border border-gray-700 p-2">{tasks.filter(task => task.files).length} <span className="text-blue-500">files</span></td>
//                         <td className="border border-gray-700 p-2">-</td>
//                         <td className="border border-gray-700 p-2"></td>
//                     </tr>
//                 </tfoot>
//             </table>
//         </div>
//     );
// };

// const WorkSpace = () => {
//     const [todoTasks, setTodoTasks] = useState([
//         {
//             name: 'Task 1',
//             owner: 'N6',
//             status: 'Working on it',
//             dueDate: '14 Sep',
//             priority: 'Low',
//             notes: 'Action items',
//             budget: '$100',
//             files: true,
//             timeline: '13 - 14 Sep',
//             timelineClass: 'timeline-warning',
//             lastUpdated: '1 day ago'
//         },
//         {
//             name: 'Task 2',
//             owner: '',
//             status: 'Done',
//             dueDate: '14 Sep',
//             priority: 'High',
//             notes: 'Meeting notes',
//             budget: '$1,000',
//             files: false,
//             timeline: '15 - 16 Sep',
//             timelineClass: 'timeline-success',
//             lastUpdated: '10 months ago'
//         }
//     ]);

//     const [completedTasks, setCompletedTasks] = useState([]);

//     return (
//         <div className="p-4 dark:bg-gray-900 dark:text-gray-200">
//             <div className="flex justify-between items-center mb-4">
//                 <h1 className="text-2xl text-blue-400">Aryan</h1>
//                 <div className="flex items-center">
//                     <button className="bg-blue-600 text-white px-4 py-2 rounded mr-2">New task</button>
//                     <i className="fas fa-search text-xl text-blue-400 mr-4"></i>
//                     <i className="fas fa-user text-xl text-blue-400 mr-4"></i>
//                     <i className="fas fa-filter text-xl text-blue-400 mr-4"></i>
//                     <i className="fas fa-sort text-xl text-blue-400 mr-4"></i>
//                     <i className="fas fa-eye-slash text-xl text-blue-400 mr-4"></i>
//                     <i className="fas fa-layer-group text-xl text-blue-400 mr-4"></i>
//                     <i className="fas fa-ellipsis-h text-xl text-blue-400"></i>
//                 </div>
//             </div>
//             <TaskTable title="To-Do" tasks={todoTasks} setTasks={setTodoTasks} />
//             <TaskTable title="Completed" tasks={completedTasks} setTasks={setCompletedTasks} />
//             <div className="bg-gray-800 text-blue-500 px-4 py-2 rounded cursor-pointer text-center mt-4">+ Add new group</div>
//             <div className="task-selected mt-4 bg-blue-600 text-white px-4 py-2 rounded flex justify-between items-center">
//                 <span>1 Task selected</span>
//                 <div className="actions flex items-center">
//                     <i className="fas fa-copy mr-4"></i>
//                     <i className="fas fa-file-export mr-4"></i>
//                     <i className="fas fa-archive mr-4"></i>
//                     <i className="fas fa-trash mr-4"></i>
//                     <i className="fas fa-exchange-alt mr-4"></i>
//                     <i className="fas fa-arrow-right mr-4"></i>
//                     <i className="fas fa-ellipsis-h"></i>
//                 </div>
//             </div>
//         </div>
//     );
// };


// export default WorkSpace;

import React, { useEffect, useState } from "react";
import Board from "./components/Board/Board";
import Editable from "./components/Editabled/Editable";

const Workspace = () => {
  const [boards, setBoards] = useState(
    JSON.parse(localStorage.getItem("prac-kanban")) || []
  );

  const [targetCard, setTargetCard] = useState({
    bid: "",
    cid: "",
  });

  const addboardHandler = (name) => {
    const tempBoards = [...boards];
    tempBoards.push({
      id: Date.now() + Math.random() * 2,
      title: name,
      cards: [],
    });
    setBoards(tempBoards);
  };

  const removeBoard = (id) => {
    const index = boards.findIndex((item) => item.id === id);
    if (index < 0) return;

    const tempBoards = [...boards];
    tempBoards.splice(index, 1);
    setBoards(tempBoards);
  };

  const addCardHandler = (id, title) => {
    const index = boards.findIndex((item) => item.id === id);
    if (index < 0) return;

    const tempBoards = [...boards];
    tempBoards[index].cards.push({
      id: Date.now() + Math.random() * 2,
      title,
      labels: [],
      date: "",
      tasks: [],
    });
    setBoards(tempBoards);
  };

  const removeCard = (bid, cid) => {
    const index = boards.findIndex((item) => item.id === bid);
    if (index < 0) return;

    const tempBoards = [...boards];
    const cards = tempBoards[index].cards;

    const cardIndex = cards.findIndex((item) => item.id === cid);
    if (cardIndex < 0) return;

    cards.splice(cardIndex, 1);
    setBoards(tempBoards);
  };

  const dragEnded = (bid, cid) => {
    let s_boardIndex, s_cardIndex, t_boardIndex, t_cardIndex;
    s_boardIndex = boards.findIndex((item) => item.id === bid);
    if (s_boardIndex < 0) return;

    s_cardIndex = boards[s_boardIndex]?.cards?.findIndex(
      (item) => item.id === cid
    );
    if (s_cardIndex < 0) return;

    t_boardIndex = boards.findIndex((item) => item.id === targetCard.bid);
    if (t_boardIndex < 0) return;

    t_cardIndex = boards[t_boardIndex]?.cards?.findIndex(
      (item) => item.id === targetCard.cid
    );
    if (t_cardIndex < 0) return;

    const tempBoards = [...boards];
    const sourceCard = tempBoards[s_boardIndex].cards[s_cardIndex];
    tempBoards[s_boardIndex].cards.splice(s_cardIndex, 1);
    tempBoards[t_boardIndex].cards.splice(t_cardIndex, 0, sourceCard);
    setBoards(tempBoards);

    setTargetCard({
      bid: "",
      cid: "",
    });
  };

  const dragEntered = (bid, cid) => {
    if (targetCard.cid === cid) return;
    setTargetCard({
      bid,
      cid,
    });
  };

  const updateCard = (bid, cid, card) => {
    const index = boards.findIndex((item) => item.id === bid);
    if (index < 0) return;

    const tempBoards = [...boards];
    const cards = tempBoards[index].cards;

    const cardIndex = cards.findIndex((item) => item.id === cid);
    if (cardIndex < 0) return;

    tempBoards[index].cards[cardIndex] = card;

    setBoards(tempBoards);
  };

  useEffect(() => {
    localStorage.setItem("prac-kanban", JSON.stringify(boards));
  }, [boards]);

  return (
    <div className="app w-full h-screen flex flex-col">
      {/* <div className="app_nav p-7 shadow-[0_1px_20px_rgba(56,40,40,0.05)] border-b border-[rgba(0,0,0,0.1)] sticky top-0 bg-[#fff]">
        <h1>Kanban Board</h1>
      </div> */}
      <div className="app_boards_container flex-1 w-full h-full overflow-x-auto pt-5">
        <div className="app_boards h-full w-fit px-8 flex gap-7">
          {boards.map((item) => (
            <Board
              key={item.id}
              board={item}
              addCard={addCardHandler}
              removeBoard={() => removeBoard(item.id)}
              removeCard={removeCard}
              dragEnded={dragEnded}
              dragEntered={dragEntered}
              updateCard={updateCard}
            />
          ))}
          <div className="app_boards_last flex-shrink-0 basis-[290px] min-w-[290px]">
            <Editable
              displayClass="app_boards_add-board bg-white text-black rounded-lg shadow-[1px_1px_0_1px_rgba(0,0,0,0.12)] w-full text-center"
              editClass="app_boards_add-board_edit bg-white rounded-lg p-2.5"
              placeholder="Enter Board Name"
              text="Add Board"
              buttonText="Add Board"
              onSubmit={addboardHandler}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Workspace;


