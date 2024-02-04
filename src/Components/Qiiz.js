import "../App"
import React, { useState, useContext} from 'react'


import { Questions } from '../Helpers/QuestionsBank';
import {QuizContext}  from '../Helpers/Contexts'



function Qiiz() {

  const {Score, setScore, setGameState} = useContext(QuizContext);

  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [optionChoosen, setOptionChoosen] = useState("");

  const nextQuestion = () => {
    if (Questions[currentQuestion].answer ===optionChoosen) {
      setScore(Score + 1);
    }
    alert(Score);
    setCurrentQuestion(currentQuestion +1);
  };

  const finshQuiz = () => {
    if (Questions[currentQuestion].answer === optionChoosen) {
      setScore(Score + 1);
    }
    setGameState("endScreen")

  }


  return (
    <div className="Quiz">
      <h1>{Questions[currentQuestion].prompt}</h1>
      <div className="options">
        <botton onClick={() => setOptionChoosen("A")}>{Questions[currentQuestion].OptionA}</botton>
        <botton onClick={()=> setOptionChoosen("B")}>{Questions[currentQuestion].OptionB}</botton>
        <botton onClick={()=> setOptionChoosen("A")}>{Questions[currentQuestion].OptionC}</botton>
        <botton onClick={()=> setOptionChoosen("B")}>{Questions[currentQuestion].optionD}</botton>
      </div>

      {currentQuestion === Questions.length -1 ? (
        <button onClick={finshQuiz}>Finsh Quiz</button>
        
      ) : (
          <button onClick={nextQuestion}>Next Questions</button>

      )}

    
    </div>
  );
  
}

export default Qiiz
