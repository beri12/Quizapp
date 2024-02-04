import React, {useContext} from 'react';
import { QuizContext } from '../Helpers/Contexts';
import { Questions } from '../Helpers/QuestionsBank';
import "../App"

function EndScreen() {
  const {score, setScore, setGameState} = useContext(QuizContext);

  const restartQuiz = () => {
    setScore(0);
    setGameState("menu");
  }
  return (
    <div className="EndScrren">
      {""}
      <h1>Quiz Finshed</h1>
      <h3>
        {score} / {Questions.length}{""}
        </h3>

        <button onClick={restartQuiz}> Restart Quiz</button>
   
    
    </div>
  )
}

export default EndScreen
