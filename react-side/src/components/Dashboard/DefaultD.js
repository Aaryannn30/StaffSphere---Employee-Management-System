import React from 'react'
import { useEffect } from 'react';
import {
    Routes,
    Route,
    useLocation
} from 'react-router-dom';

import './css/style.css';
// import './ch'
import './charts/ChartjsConfig';

// Import pages
import DashboardHome from './pages/DashboardHome';

function DefaultD() {

    const location = useLocation();

    useEffect(() => {
        document.querySelector('html').style.scrollBehavior = 'auto'
        window.scroll({ top: 0 })
        document.querySelector('html').style.scrollBehavior = ''
    }, [location.pathname]); // triggered on route change
    return (
        <div className='h-screen'>
            <DashboardHome />
        </div>
    )
}

export default DefaultD