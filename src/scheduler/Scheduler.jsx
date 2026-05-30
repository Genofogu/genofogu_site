import React from 'react';
import { Outlet } from 'react-router-dom';
import './styles/main.scss';

import Sidebar from './components/Sidebar'; // Import Sidebar
import Header from './components/Header';   // Import Header

function Scheduler() {
  return (
    <div className="scheduler-app">
      <Sidebar /> {/* Add the Sidebar */}
      <Header />
      <main className="scheduler-main-content">
        <Outlet />
      </main>
    </div>
  );
}

export default Scheduler;