import React, { useState } from 'react';
// import { useParams } from 'react-router-dom';
import { MathJax } from "better-react-mathjax";


function Questions() {

    const [ data, setData ] = useState([])
    
    
const apiGet = () => {

    let QId =  [ 'AreaUnderTheCurve_901', 'BinomialTheorem_901', 'DifferentialCalculus2_901' ]

    for(let i=0; i< QId.length; i++){
        console.log("QId",QId[i])
    
        const RQId = QId[i];
 
  fetch(`https://0h8nti4f08.execute-api.ap-northeast-1.amazonaws.com/getQuestionDetails/getquestiondetails?QuestionID=${RQId}`)
  .then((response) => response.json())
  .then((apiData) => {
    console.log('data===========', apiData)
   

        for (let i=0; i < apiData.length; i++){
        console.log("========", apiData[i].Question)
    
    setData(apiData);

    }

}
  )
} //for loop close
}
  return (
    <>
      
      <div>
         <button onClick={apiGet} className='button btn1'>Get Questions</button><br/>
        {/* {JSON.stringify(data)} */}
        
        <div className='questionDIv'>
          
            <ul className='questionDivul'>
                <MathJax>
             {
                data.map((item => 
                
                <li key={item.QuestionID} className='questionDivli'>
                    {item.Question}</li>
            ))
            }</MathJax>
           </ul>
         
        </div>
      </div>

    </>
  )
}

export default Questions