import React from 'react';

function Questions() {

    
const apiGet = () => {
  fetch('https://0h8nti4f08.execute-api.ap-northeast-1.amazonaws.com/getQuestionDetails/getquestiondetails?QuestionID=AreaUnderTheCurve_2')
  .then((response) => response.json())
  .then((apiData) => {
    console.log('data===========', apiData)

    
    for (let i=0; i < apiData.length; i++){
        // console.log("========", apiData[i].Question)
       
    const QuestionText = apiData[i].Question;

    console.log("QuestionText=====",QuestionText)
        
    }

  })
    
}
  return (
    <>
       <button onClick={apiGet}>Get Question</button>
    </>
  )
}

export default Questions