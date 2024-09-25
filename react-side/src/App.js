// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';

import MainContent from './MainContent'; // Import the MainContent component
import Dashboard from './components/Dashboard/Dashboard';
// import DashboardSidebar from './components/DSidebar'
import { useState } from 'react';
import MainBanner from './components/MainBanner';
import Cards from './components/Cards';
import Pricing from './components/Pricing';
import LoginForm from './components/LoginForm';
import FAQ from './components/FAQs';
import Profile from './components/Dashboard/Profile'
import Workspace from './components/Dashboard/Workspace';
import DSidebar from './components/Dashboard/DSidebar';
import Chat from './components/Dashboard/Chat'
import Analysis from './components/Dashboard/Analysis'
import UpdateFeed from './components/Dashboard/UpdateFeed';
import Users from './components/Dashboard/Users'
import DefaultD from './components/Dashboard/DefaultD';
import DView from './components/Dashboard/DView';
import ThemeToggle from './components/ThemeToggle';
// import PrivateRoute from './utils/PrivateRoute';

const App = () => {
  // const [details, setDetails] = useState([]);

  // useEffect(() => {
  //   let data;
  //   axios.get(`http://127.0.0.1:8000/`)
  //     .then(res => {
  //       data = res.data;
  //       setDetails(data);
  //     })
  //     .catch(err=>{
  //       console.log(err)
  //     })
  // }, []); // Empty dependency array to run only on mount

  // return (
  //   <div className='App'>
  //     <header>
  //       Django Generated Data:
  //     </header>
  //     <hr />
  //     {details.map((output, id) => (
  //       <div key={id}>
  //         <div>
  //           <h2>
  //             {output.employee}
  //           </h2>
  //           <h3>
  //             {output.department}
  //           </h3>
  //         </div>
  //       </div>
  //     ))}
  //   </div>
  // );

  return (

    <Router>
      <Routes>
      <Route path="/" element={
            <>
              <Navbar scroll="true" />
              <MainBanner />
              <ThemeToggle />
              <Cards />
              <Pricing />
              <LoginForm />
              <Footer />
            </>
          } />
          <Route
            path="/dashboard"
            element={
              // <PrivateRoute>
                <DSidebar />
              // {/* </PrivateRoute> */}
            }
          >
            <Route path="/dashboard/workspace" element={<Workspace />} />
            <Route path="/dashboard/users" element={<Users />} />
                <Route path="/dashboard/chat" element={<Chat />} />
                <Route path="/dashboard/update_feed" element={<UpdateFeed />} />
                <Route path="/dashboard/analysis" element={<Analysis />} />
          </Route>

          </Routes>
    </Router>
  );
  
}

{/* <Route path="/dashboard/*" element={<Dashboard />}>
<Route index element={<DefaultD />} /> {/* Default route for /dashboard */}
{/*<Route path="workspace" element={<Workspace />} />
<Route path="users" element={<Users />} />
<Route path="chat" element={<Chat />} />
<Route path="update_feed" element={<UpdateFeed />} />
<Route path="analysis" element={<Analysis />} />
</Route> */}
export default App;
