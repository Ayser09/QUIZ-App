import React, { useContext, useState } from 'react'
import { QuizContext } from '../context/QuizHolder'

const Quiz = () => {
    const [current ,setCurrent] =useState(0)
  return (
    <div className='w-full h-screen flex justify-center items-center ' >

        <Box current={current} next={setCurrent} />
    </div>
  )
}

const Box = ({current, next}) =>{
    const {quizzes, correct, setCorrect, setExit} = useContext(QuizContext)
    const[ ans,setAns] =useState("")


    const saveHandler =() =>{
        if(quizzes[current].correct === ans){
            setCorrect(correct +1)
        }
        setAns("")
        if(current === quizzes.length){
            setExit(true)
        }else{
            next(current+1)
        }
    }
    return(
        <div className='w-[60%]  border shadow-lg rounded-md overflow-hidden '>
            <div className='p-2 text-3xl'>
                {current+1}
                {quizzes[current].question}
            </div>
            <div className='grid grid-cols-2 mt-3' >
                <button className={`'p-2 ${ans === "a" ? ' bg-blue-400 hover:text-white' : ""}  hover:bg-blue-400 hover:text-white duration-200 cursor-pointer'`} onClick={ () => setAns("a")}>{quizzes[current].a}</button>
                <button className={`'p-2 ${ans === "b" ? ' bg-blue-400 hover:text-white' : ""}  hover:bg-blue-400 hover:text-white duration-200 cursor-pointer'`} onClick={ () => setAns("b")}>{quizzes[current].b}</button>
                <button className={`'p-2 ${ans === "c" ? ' bg-blue-400 hover:text-white' : ""}  hover:bg-blue-400 hover:text-white duration-200 cursor-pointer'`} onClick={ () => setAns("c")}>{quizzes[current].c}</button>
                <button className={`'p-2 ${ans === "d" ? ' bg-blue-400 hover:text-white' : ""}  hover:bg-blue-400 hover:text-white duration-200 cursor-pointer'`} onClick={ () => setAns("d")}>{quizzes[current].d}</button>
            </div>
            <div className='flex justify-between'>
                <div className='h-[40px] cursor-pointer p-3 bg-orange-700 text-white text-2xl' onClick={() => setAns("")}>Reset</div>
                <div className='h-[40px] cursor-pointer p-3 bg-green-700 text-white text-2xl' onClick={saveHandler} >Save & next</div>
                <div className='h-[40px] cursor-pointer p-3 bg-red-700 text-white text-2xl' onClick={ () =>setExit(true)}>Submit</div>
            </div>
        </div>
    )
}
export default Quiz
