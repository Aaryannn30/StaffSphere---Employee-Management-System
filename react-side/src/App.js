// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter as Router } from 'react-router-dom';

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
    //<>
    //   <Navbar />
    //   <MainBanner/>
    //   <Cards/>
    //   <Pricing />
    //   <LoginForm/>
    //   <Footer/>

    // </>
    <>
      {/* <Router>
        <Navbar scroll='true' />
        <MainBanner/>
        <Cards />
        <Pricing />
        <LoginForm />
        <MainContent />
        <Footer />
      </Router> */}
    <Dashboard />
      {/* <FAQ/> */}
      {/* <Profile/> */}
    </>
  );
  
}

export default App;
