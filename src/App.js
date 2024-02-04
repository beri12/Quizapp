import "./App"

import Qiiz from "./Components/Qiiz";
import EndScreen from "./Components/EndScreen";
import MainMenu from "./Components/MainMenu";

import { useState } from "react";
import { QuizContext} from "./Helpers/Contexts";
function App() {
  const [gameState, setGameState] = useState("menu");
  const [userName, setUserNAme] = useState("");
  const [score, setScore] = useState(0)
  return (
    <div className="App">
      <h1>Quiz App</h1>
      <QuizContext.Provider value={{ gameState, setGameState, userName, setUserNAme, score, setScore }}>
        {gameState === "menu" && <MainMenu />}
        {gameState === "quiz" && <Qiiz />}
        {gameState === "endscreen" && <EndScreen />}
      </QuizContext.Provider>
    </div>
  );
}

export default App;
