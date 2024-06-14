import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import "./App.css";
import Notepad from './components/Notepad';
import StartPage from './components/StartPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/notepad" element={<Notepad />} />
      </Routes>
    </Router>
    // <>
    //   <Notepad/>
    // </>
  );
}

export default App;
