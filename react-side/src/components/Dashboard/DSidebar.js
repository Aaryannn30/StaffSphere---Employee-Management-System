import React, { useState } from 'react';
import { FaChartPie, FaUserPlus, FaNewspaper, FaTachometerAlt, FaBell, FaBars, FaTimes } from 'react-icons/fa';
import { MdOutlineMarkUnreadChatAlt, MdDashboardCustomize } from "react-icons/md";
import { IoFileTrayFull } from "react-icons/io5";
    import { FaUsers } from "react-icons/fa6";
import { LuFlower } from "react-icons/lu";
import SearchBar from '../SearchBar';
import Dropdown from '../Dropdown';
import { Link, useLocation } from 'react-router-dom';
import DView from './DView';
import ThemeToggle from '../ThemeToggle'

const DSidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const isActive = (path) => location.pathname === path;

    return (
        <>
            <nav className="flex items-center justify-between px-4 py-2 bg-gray-900 shadow-md z-50 border-r-[1px] border-slate-500">
                {/* Website Name */}
                <div className="flex items-center text-sm">
                    <LuFlower className='text-purple-500 h-5 w-5' />
                    <span className="font-semibold text-white">&nbsp;StaffSphere </span>
                    <span className='text-white font-thin'>&nbsp;Work Management</span>
                </div>

                <div className="flex items-center gap-x-4 justify-around">
                    <SearchBar />

                    <div className='relative'>
                        <ThemeToggle />
                    </div>
                    {/* Notification Icon */}
                    <div className="relative">
                        <FaBell className="w-4 h-4 text-white hover:text-gray-300 transition-colors duration-300 cursor-pointer " />
                    </div>

                    {/* Update Feed Icon */}
                    <div className="relative">
                        <FaNewspaper className="w-4 h-4 text-white hover:text-gray-300 transition-colors duration-300 cursor-pointer" />
                    </div>

                    {/* Invite Members Icon */}
                    <div className="relative">
                        <FaUserPlus className="w-4 h-4 text-white hover:text-gray-300 transition-colors duration-300 cursor-pointer" />
                    </div>

                    {/* User Profile Icon with Dropdown */}
                    <div className="relative">
                        <Dropdown />
                    </div>
                </div>
            </nav>

            <div className="flex w-screen h-screen bg-gray-100  border-r border-gray-700 rounded-xl fixed -z-10">
                {/* Sidebar */}
                <div
                    className={`fixed top-0 left-0 h-full bg-gray-900 text-white shadow-lg transform ${isOpen ? 'translate-x-0' : '-translate-x-full'
                        } transition-transform duration-300 ease-in-out w-[200px] mt-10 fixed`}
                >
                    {/* Toggle Button at the Top */}
                    <div className="flex items-center justify-between h-16 px-4 bg-gray-800 border-b border-gray-700">
                        <h1 className="text-lg font-bold">My Sidebar</h1>
                        <button onClick={toggleSidebar} className="focus:outline-none">
                            <FaTimes className="w-5 h-5" />
                        </button>
                    </div>

                    <nav className="flex-1 px-2 py-4 space-y-2">
                        <Link
                            to="/dashboard"
                            className={`flex items-center px-3 py-2 ${isActive('/dashboard') ? 'bg-gray-700 text-white' : 'text-gray-400 hover:bg-gray-700 hover:text-white'} rounded-lg transition`}
                        >
                            <FaTachometerAlt className="w-4 h-4" />
                            <span className="ml-3 text-sm">Dashboard</span>
                        </Link>
                        <Link
                            to="/workspace"
                            className={`flex items-center px-3 py-2 ${isActive('/workspace') ? 'bg-gray-700 text-white' : 'text-gray-400 hover:bg-gray-700 hover:text-white'} rounded-lg transition`}
                        >
                            <MdDashboardCustomize className="w-4 h-4" />
                            <span className="ml-3 text-sm">Workspace</span>
                        </Link>
                        <Link
                            to="/users"
                            className={`flex items-center px-3 py-2 ${isActive('/users') ? 'bg-gray-700 text-white' : 'text-gray-400 hover:bg-gray-700 hover:text-white'} rounded-lg transition`}
                        >
                            <FaUsers className="w-4 h-4" />
                            <span className="ml-3 text-sm">Users</span>
                        </Link>
                        <Link
                            to="/chat"
                            className={`flex items-center px-3 py-2 ${isActive('/chat') ? 'bg-gray-700 text-white' : 'text-gray-400 hover:bg-gray-700 hover:text-white'} rounded-lg transition`}
                        >
                            <MdOutlineMarkUnreadChatAlt className="w-4 h-4" />
                            <span className="ml-3 text-sm">Chat</span>
                        </Link>
                        <Link
                            to="/update_feed"
                            className={`flex items-center px-3 py-2 ${isActive('/update_feed') ? 'bg-gray-700 text-white' : 'text-gray-400 hover:bg-gray-700 hover:text-white'} rounded-lg transition`}
                        >
                            <IoFileTrayFull className="w-4 h-4" />
                            <span className="ml-3 text-sm">Update feed</span>
                        </Link>
                        <Link
                            to="/analysis"
                            className={`flex items-center px-3 py-2 ${isActive('/analysis') ? 'bg-gray-700 text-white' : 'text-gray-400 hover:bg-gray-700 hover:text-white'} rounded-lg transition`}
                        >
                            <FaChartPie className="w-4 h-4" />
                            <span className="ml-3 text-sm">Analysis</span>
                        </Link>
                    </nav>
                </div>

                {/* Toggle Buttons Outside Sidebar for Opening */}
                {!isOpen && (
                    <div className="flex items-center p-1 bg-gray-800 text-white fixed h-full border-l-[1px] border-gray-700">
                        <nav className="flex-1 space-y-8 mb-10">
                            <button onClick={toggleSidebar} className="focus:outline-none flex items-center px-3 py-2 mb-44 text-gray-200 bg-gray-800 rounded-lg hover:bg-gray-700 hover:text-white transition">
                                <FaBars className="w-4 h-4" />
                            </button>
                            <Link to='/dashboard'
                                className={`flex items-center px-3 py-2 ${isActive('/dashboard') ? 'bg-gray-700 text-white' : 'text-gray-400 hover:bg-gray-700 hover:text-white'} rounded-lg transition`}
                            >
                                <FaTachometerAlt className="w-4 h-4" />
                            </Link>
                            <Link to='/workspace'
                                className={`flex items-center px-3 py-2 ${isActive('/workspace') ? 'bg-gray-700 text-white' : 'text-gray-400 hover:bg-gray-700 hover:text-white'} rounded-lg transition`}
                            >
                                <MdDashboardCustomize className="w-4 h-4" />
                            </Link>
                            <Link to='/users'
                                className={`flex items-center px-3 py-2 ${isActive('/users') ? 'bg-gray-700 text-white' : 'text-gray-400 hover:bg-gray-700 hover:text-white'} rounded-lg transition`}
                            >
                                <FaUsers className="w-4 h-4" />
                            </Link>
                            <Link to='chat'
                                className={`flex items-center px-3 py-2 ${isActive('/chat') ? 'bg-gray-700 text-white' : 'text-gray-400 hover:bg-gray-700 hover:text-white'} rounded-lg transition`}
                            >
                                <MdOutlineMarkUnreadChatAlt className="w-4 h-4" />
                            </Link>
                            <Link to='update_feed'
                                className={`flex items-center px-3 py-2 ${isActive('/update_feed') ? 'bg-gray-700 text-white' : 'text-gray-400 hover:bg-gray-700 hover:text-white'} rounded-lg transition`}
                            >
                                <IoFileTrayFull className="w-4 h-4" />
                            </Link>
                            <Link to='analysis'
                                className={`flex items-center px-3 py-2 ${isActive('/analysis') ? 'bg-gray-700 text-white' : 'text-gray-400 hover:bg-gray-700 hover:text-white'} rounded-lg transition`}
                            >
                                <FaChartPie className="w-4 h-4" />
                            </Link>
                        </nav>
                    </div>
                )}

                {/* Main Content */}
                <div className={`transform ${!isOpen ? 'ml-[48px]' : 'ml-[200px]'} flex-1 transition-transform duration-700 ease-out overflow-y-auto dark:bg-slate-900`}>
                    <DView/>
                </div>
            </div>
        </>
    );
};

export default DSidebar;
