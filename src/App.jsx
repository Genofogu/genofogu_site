import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Layouts
import MainLayout from './components/MainLayout'; // Import the new main layout
import Scheduler from './scheduler/Scheduler';    // This is the scheduler's layout

// Main Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import CaseStudyPage from './pages/CaseStudyPage';
import PlaygroundPage from './pages/PlaygroundPage';
import JsGamePage from './pages/JsGamePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

// Scheduler Pages
import DashboardPage from './scheduler/pages/DashboardPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* --- Routes that use the Main Portfolio Layout --- */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/case-study/:slug" element={<CaseStudyPage />} />
          <Route path="/playground" element={<PlaygroundPage />} />
          <Route path="/js-game" element={<JsGamePage />} />
        </Route>

        {/* --- Routes that use a different layout --- */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        {/* --- The Self-Contained Scheduler Module Route --- */}
        <Route path="/scheduler" element={<Scheduler />}>
          <Route index element={<DashboardPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;