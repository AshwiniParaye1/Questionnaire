import React, { useState } from 'react';


function Questions() {

    const [ data, setData ] = useState([])
    
const apiGet = () => {
  fetch('https://0h8nti4f08.execute-api.ap-northeast-1.amazonaws.com/getQuestionDetails/getquestiondetails?QuestionID=AreaUnderTheCurve_2')
  .then((response) => response.json())
  .then((apiData) => {
    console.log('data===========', apiData)

    
    for (let i=0; i < apiData.length; i++){
        console.log("========", apiData[i].Question)
    
    setData(apiData);
    
    }

  }
  )
    
}
  return (
    <>
       <button onClick={apiGet}>Get Question</button><br/>
        {/* {JSON.stringify(data)} */}
        
        <div>
           <ul>
             {
                data.map((item => 
                    <li key={item.QuestionID}>{item.Question}</li>
                  ))
            }
           </ul>
        </div>

    </>
  )
}

export default Questions