import React from 'react';

function Sidebar() {
  return (
    <aside className="scheduler-sidebar">
      <div className="sidebar-logo">
        <i className="fa-solid fa-calendar-days"></i>
        <h2>Scheduler</h2>
      </div>
      <nav className="sidebar-nav">
        <a href="#" className="nav-item active">
          <i className="fa-solid fa-table-columns"></i>
          <span>Dashboard</span>
        </a>
        <a href="#" className="nav-item">
          <i className="fa-solid fa-list-check"></i>
          <span>All Tasks</span>
        </a>
        <a href="#" className="nav-item">
          <i className="fa-solid fa-chart-line"></i>
          <span>Statistics</span>
        </a>
        <a href="#" className="nav-item">
          <i className="fa-solid fa-cog"></i>
          <span>Settings</span>
        </a>
      </nav>
    </aside>
  );
}

export default Sidebar;