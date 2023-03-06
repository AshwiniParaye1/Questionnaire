import React from 'react';
import Questions from './Questions';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MathJaxContext } from "better-react-mathjax";


function App() {

  const config = {
        loader: { load: ["input/asciimath"] }
    };

  return (
    <>
    <MathJaxContext config={config}>
      <h1 className='title'>Questionnaire</h1>
    
    <Router>
      <Routes>
          <Route path='/' element={<Questions />} />
        {/* <Route path='/:QId' element={<Questions />} /> */}
       
      </Routes>
    </Router>
    </MathJaxContext>
    </>
  )
}

export default App