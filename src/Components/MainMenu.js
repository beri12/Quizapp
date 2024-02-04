import "../App";
import React, { useContext, useState } from "react";
import {QuizContext} from "../Helpers/Contexts"

function MainMenu() {
  const [ setUserNAme,setGameState] = useContext(QuizContext);
 
  return (
    <div className="Menu">
      <label>Enter Your Name:</label>
      <input
      type="text"
      placeholder="beri"
      onChange={(event) => {
        setUserNAme(event.target.value);
      
        
      } }
      />

      <button
      onClick={ () => {
        setGameState("playing");

      }}
      >
        Start Qiiz
      </button>
    </div>
  )
}

export default MainMenu