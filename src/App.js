import React from 'react';
import Questions from './Questions';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  

  return (
    <>
    <h1>App</h1>
    

    <Router>
      <Routes>
        <Route path='/' element={<Questions />} />
      </Routes>
    </Router>
    
    </>
  )
}

export default App