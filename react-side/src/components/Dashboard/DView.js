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
                <Route path="/users" element={<Users/>} />
                <Route path="/workspace" element={<Workspace/>} />
                <Route path="/chat" element={<Chat/>} />
                <Route path="/analysis" element={<Analysis />} />
                <Route path="/update_feed" element={<UpdateFeed />} />    
            </Routes>
        </div>
    );
};

export default DView;

