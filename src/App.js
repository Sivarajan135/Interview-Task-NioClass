import React, { useEffect, useState } from 'react'
import { Fetch } from '../src/FetchApi/FetchingApi';
import { MathJaxContext, MathJax } from 'better-react-mathjax'
import '../src/Styles/Style.css'

// For Fetching the questions
const questionID = ["AreaUnderTheCurve_901", "BinomialTheorem_901", "DifferentialCalculus2_901"];

const App = () => {

    const [index, setindex] = useState(0);
    let id = questionID[index];
    const [question, setQuestion] = useState("");

    //Fetched
    useEffect(() => {
        Fetch(`${id}`).then((data) => setQuestion(data[0].Question))
    }, [id])


   // changing the state by clicking the individual Questions
    const handleQuestion = (e) => {
        if(e.target.innerText === 'Question 1')
        {
          setindex(0);
          //Set the active question
          document.querySelector('.Questions').children[0].className = 'active'
          document.querySelector('.Questions').children[1].className = ''
          document.querySelector('.Questions').children[2].className = ''
        }
        else if(e.target.innerText === 'Question 2')
        {
          setindex(1);
          //Set the active question
          document.querySelector('.Questions').children[0].className = ''
          document.querySelector('.Questions').children[1].className = 'active'
          document.querySelector('.Questions').children[2].className = ''
        }
        else
        {
          setindex(2);
          //Set the active question
          document.querySelector('.Questions').children[0].className = ''
          document.querySelector('.Questions').children[1].className = ''
          document.querySelector('.Questions').children[2].className = 'active'
        }
    }

    return (
        <div className='container'>
            <MathJaxContext>

                {/*Question Navigation*/}
                <nav className='Questions'>
                  <h3 onClick={handleQuestion} className='active'>Question 1</h3>
                  <h3 onClick={handleQuestion}>Question 2</h3>
                  <h3 onClick={handleQuestion}>Question 3</h3>
                </nav>

                {/* Render the question Not a Mathjax*/}
                <MathJax>
                    <div className='individualQuestion'>{question}</div>
                </MathJax>
            </MathJaxContext>
        </div>
    )
}

export default App