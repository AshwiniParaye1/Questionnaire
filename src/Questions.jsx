import React, { useEffect, useState } from "react"
import { MathJax } from "better-react-mathjax"

function Questions() {
  // State to store the API data and current question index
  const [data, setData] = useState([])
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)

  // Function to fetch API data and update state
  const apiGet = () => {
    console.log("apiGet() =====")
    let QId = [
      "AreaUnderTheCurve_901",
      "BinomialTheorem_901",
      "DifferentialCalculus2_901"
    ]

    for (let i = 0; i < QId.length; i++) {
      const RQId = QId[i]
      fetch(
        `https://0h8nti4f08.execute-api.ap-northeast-1.amazonaws.com/getQuestionDetails/getquestiondetails?QuestionID=${RQId}`
      )
        .then((response) => response.json())
        .then((apiData) => {
          // Update state with fetched data
          setData((prevData) => [...prevData, ...apiData])
        })
        .catch((error) => console.error(error)) // Log any errors to the console
    }
  }

  // Function to handle next question button click
  const handleNextQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1)
  }

  // Function to handle previous question button click
  const handlePrevQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex - 1)
  }

  useEffect(() => {
    apiGet()
  }, [])

   return (
    <div>
      <div className="questionDIv">
        <MathJax.Provider>
          {data[currentQuestionIndex] ? (
            <ul className="questionDivul">
              <li className="questionDivli">
                <MathJax>{data[currentQuestionIndex].Question}</MathJax>
              </li>
            </ul>
          ) : (
            <div className="loadingMessage">Loading...</div>
          )}
        </MathJax.Provider>

        <div className="questionNav">
          <MathJax.Provider>
            <button
              onClick={handlePrevQuestion}
              disabled={currentQuestionIndex === 0}
            >
              Previous
            </button>
            <button
              onClick={handleNextQuestion}
              disabled={currentQuestionIndex === data.length - 1}
            >
              Next
            </button>
          </MathJax.Provider>
        </div>
      </div>
    </div>
  );
}

export default Questions;