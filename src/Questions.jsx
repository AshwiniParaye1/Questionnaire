import React, { useState } from 'react';
import { MathJax } from "better-react-mathjax";

function Questions() {

  // State to store the API data and current question index
  const [data, setData] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  // Function to fetch API data and update state
  const apiGet = () => {
    let QId = ['AreaUnderTheCurve_901', 'BinomialTheorem_901', 'DifferentialCalculus2_901'];

    for (let i = 0; i < QId.length; i++) {
      const RQId = QId[i];
      fetch(`https://0h8nti4f08.execute-api.ap-northeast-1.amazonaws.com/getQuestionDetails/getquestiondetails?QuestionID=${RQId}`)
        .then((response) => response.json())
        .then((apiData) => {
          // Update state with fetched data
          setData((prevData) => [...prevData, ...apiData]);
        })
        .catch((error) => console.error(error)); // Log any errors to the console
    }
  };

  // Function to handle next question button click
  const handleNextQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };

  // Function to handle previous question button click
  const handlePrevQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
  };

  return (
    <>
      <div>
        <button onClick={apiGet} className='button'>
          Get Questions
        </button>
        <br />
        {/*
          Render the current question using the currentQuestionIndex state.
          If data is empty or index is out of range, display a loading message.
        */}
<div className='questionDIv'>
  {data.length === 0 || currentQuestionIndex < 0 || currentQuestionIndex >= data.length ? (
    <div className='loadingMessage'>Loading...</div>
  ) : (
    <MathJax>
      <ul className='questionDivul'>
        <li className='questionDivli'>{data[currentQuestionIndex].Question}</li>
      </ul>
    </MathJax>
  )}
  {/* Render previous and next buttons */}
  <div className='questionNav'>
    <button onClick={handlePrevQuestion} disabled={currentQuestionIndex === 0 || data.length === 0}>
      Previous
    </button>
    <button onClick={handleNextQuestion} disabled={currentQuestionIndex === data.length - 1 || data.length === 0}>
      Next
    </button>
  </div>
</div>

      </div>
    </>
  );
}

export default Questions;
