import React, { useContext } from 'react'
import { QuizContext } from '../context/QuizHolder'

const Result = () => {
  const{correct, setExit, setStart, quizzes} =  useContext(QuizContext)
  const playAgain =() =>{
    setExit(false)
    setStart(false)
  }
  return (
    <div className='w-full h-screen flex justify-center items-center ' >
    <div className='w-[60%] text-center border shadow-lg rounded-md overflow-hidden '>
      <h2 className='p-3 my-2 text -2xl'>{correct} are correct out of {quizzes.length}</h2>
      <button onClick={playAgain} className='border border-green-500 p-3 text-5xl rounded'>play again</button>
    </div>
    </div>
  )
}

export default Result
