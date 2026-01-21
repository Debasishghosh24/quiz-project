import Timer from './components/Timer'
import './App.css'
import { useState } from 'react';
import Question from './components/Question'
import Result from './components/Result';

function App() {
  const [isOver, setIsOver] = useState(false);
  const [score, setScore] = useState(0)



  return (
    <>
      <Timer setIsOver={setIsOver} />
      {!isOver ? (
        <Question setIsOver={setIsOver} setScore={setScore} />

      ) : (
        <Result score={score}/>
      )}

    </>
  )

}




export default App
