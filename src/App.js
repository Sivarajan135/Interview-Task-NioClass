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
    const [active , setActive] = useState({
       Question1 : 'active',
       Question2 : '',
       Question3 : ''
    })

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
          setActive({
            Question1 : 'active',
            Question2 : '',
            Question3 : ''
          })
        }
        else if(e.target.innerText === 'Question 2')
        {
          setindex(1);
          //Set the active question
          setActive({
            Question1 : '',
            Question2 : 'active',
            Question3 : ''
          })
        }
        else
        {
          setindex(2);
          //Set the active question
          setActive({
            Question1 : '',
            Question2 : '',
            Question3 : 'active'
          })
        }
    }

    return (
        <div className='container'>
            <MathJaxContext>
                <nav className='Questions'>
                  <h3 onClick={handleQuestion} className={active.Question1}>Question 1</h3>
                  <h3 onClick={handleQuestion} className={active.Question2}>Question 2</h3>
                  <h3 onClick={handleQuestion} className={active.Question3}>Question 3</h3>
                </nav>

                <MathJax>
                    <div className='individualQuestion'>{question}</div>
                </MathJax>
            </MathJaxContext>
        </div>
    )
}

export default App