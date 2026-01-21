import React from 'react'
import {useState} from 'react'
import question from './question.json'

const Question = ({setIsOver, setScore}) => {
    const [currentIndex, setCurrentIndex] = useState(0)
    // const [score, setScore] = useState(0)
    

    const handleOptionClick = (selectedOption) =>{
       
        if(selectedOption === question[currentIndex].answer)
        {
            setScore(prev => prev + 1);
        }
        if(currentIndex < question.length - 1)
        {
             setCurrentIndex(prev=>prev+1)
        } else{
            setIsOver(true);
        }

    }
  return (
    <div>
        <h2 className='mt-8 mb-4'>{question[currentIndex].question}</h2>
    <div className='flex flex-col gap-3 '>
        {
            question[currentIndex].options.map
            ((option)=>{
                return <button key={option} onClick=
                {()=>{handleOptionClick(option)} }>
                    {option}
                </button>
            })
        }
        
        </div>
        </div>

  )
}

export default Question
