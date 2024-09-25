import React from 'react';
import { Routes, Route } from 'react-router-dom';
import DefaultD from './DefaultD'
import Analysis from './Analysis'
import Chat from './Chat'
import UpdateFeed from './UpdateFeed'
import Users from './Users'
import Workspace from './Workspace';

const DView = () => {
    return (
        <div className="flex-grow bg-slate-500 dark:bg-slate-900">
            <Routes>
                <Route path="/dashboard" element={<DefaultD />} />
                <Route path="/workspace" element={<Workspace/>} />
                <Route path="/users" element={<Users/>} />
                <Route path="/chat" element={<Chat/>} />
                <Route path="/update_feed" element={<UpdateFeed />} />  
                <Route path="/analysis" element={<Analysis />} />  
            </Routes>
        </div>
    );
};

export default DView;

// import React from 'react';
// import { Routes, Route, Outlet } from 'react-router-dom';
// import DSidebar from './DSidebar';     // Sidebar component
// import DefaultD from './DefaultD';     // Default dashboard component
// import Workspace from './Workspace';   // Workspace component
// import Users from './Users';           // Users component
// import Chat from './Chat';             // Chat component
// import UpdateFeed from './UpdateFeed'; // Update Feed component
// import Analysis from './Analysis';     // Analysis component

// const DView = () => {
//   return (
//     <div className="flex dashboard-layout">
//       {/* Sidebar Section */}
//       <DSidebar />

//       {/* Main Content Section */}
//       <div className="flex-grow p-6 bg-gray-100 dashboard-content">
//         <Routes>
//           {/* Parent Route - Dashboard Layout */}
//           <Route path="/dashboard" element={<Dashboard />}>
//             {/* Nested Routes inside Dashboard */}
//             <Route index element={<DefaultD />} />                 {/* /dashboard */}
//             <Route path="workspace" element={<Workspace />} />      {/* /dashboard/workspace */}
//             <Route path="users" element={<Users />} />              {/* /dashboard/users */}
//             <Route path="chat" element={<Chat />} />                {/* /dashboard/chat */}
//             <Route path="update_feed" element={<UpdateFeed />} />   {/* /dashboard/update_feed */}
//             <Route path="analysis" element={<Analysis />} />        {/* /dashboard/analysis */}
//           </Route>
//         </Routes>

//         {/* Outlet will render nested routes */}
//         <Outlet />
//       </div>
//     </div>
//   );
// };

// // DashboardLayout component to wrap the layout and allow for nested routes
// const Dashboard = () => {
//   return (
//     <div>
//       <Outlet /> {/* Nested routes will render here */}
//     </div>
//   );
// };

// export default DView;
