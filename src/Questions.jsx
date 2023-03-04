import React, { useState } from 'react';
import { useParams } from 'react-router-dom';


function Questions() {

    const [ data, setData ] = useState([])
    
    
const apiGet = () => {

    let QId =  [ 'AreaUnderTheCurve_901', 'BinomialTheorem_901', 'DifferentialCalculus2_901' ]

    for(let i=0; i< QId.length; i++){
        console.log("QId",QId[i])
 
  fetch(`https://0h8nti4f08.execute-api.ap-northeast-1.amazonaws.com/getQuestionDetails/getquestiondetails?QuestionID=${QId[i]}`)
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