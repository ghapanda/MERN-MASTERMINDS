import React from 'react';
import { Routes, Route, Link} from 'react-router-dom';
import './App.css';
import AdminSchedulePage from './components/adminSchedulePage.js'; 
import MemberSchedulePage from './components/memberSchedulePage.js'; 

function Home() {
  return (
    <div className="Home">
      <h1 className="Title">Home Page</h1>
      <Link to="/admin-schedule-page" style={{ fontSize: '24px', color: '#38cce6' }}>Admin Schedule Page</Link>
      <Link to="/member-schedule-page" style={{ fontSize: '24px', color: '#38cce6' }}>Member Schedule Page</Link>
    </div>
  );
}

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin-schedule-page" element={<AdminSchedulePage />} /> 
        <Route path="/member-schedule-page" element={<MemberSchedulePage />} /> 
      </Routes>
    </main>
  );
}

export default App;
