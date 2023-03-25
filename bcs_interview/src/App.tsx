import { useState } from 'react'
import './App.css'
import { Respond } from './states/Respond';
import { Results } from './states/Results';
import { Start } from './states/Start';

type possibleState = "start" | "respond" | "results";

function App() {
  const [currentState, setCurrentState] = useState<possibleState>("start");
  const [question, setQuestion] = useState<string>(undefined);
  const [userAnswer, setUserAnswer] = useState<string>(undefined);
  const [feedback, setFeedback] = useState<object>(undefined);

  return (
    // div for whole page
    <div className="w-[100vw] h-[100vh] flex items-center align-middle justify-center">
      <div>
        {currentState === "start" ? (
          <Start
            setCurrentState={setCurrentState}
            question={question}
            setQuestion={setQuestion}
          />
        ) : currentState === "respond" ? (
          <Respond
            setCurrentState={setCurrentState}
            question={question}
            setUserAnswer={setUserAnswer}
            setFeedback = {setFeedback}
          />
        ) : currentState === "results" ? (
          <Results
            setCurrentState={setCurrentState}
            question={question}
            userAnswer={userAnswer}
            feedback = {feedback}
          />
        ) : (
          <p>invalid state</p>
        )}
      </div>
    </div>
  );
}

export default App
