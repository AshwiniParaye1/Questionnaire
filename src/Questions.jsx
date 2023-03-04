import React from 'react'

function Questions() {

    
const apiGet = () => {
  fetch('https://0h8nti4f08.execute-api.ap-northeast-1.amazonaws.com/getQuestionDetails/getquestiondetails?QuestionID=AreaUnderTheCurve_2')
  .then((response) => response.json())
  .then((data) => {
    console.log('data===========', data)
  })
    
}
  return (
    <>
        <button onClick={apiGet}>Get Question</button>
    </>
  )
}

export default Questions