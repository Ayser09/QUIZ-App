import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
// import ScoreChart from '../../components/Chart/ScoreChart';
const Dashboard = () => {
  // const getScores = () => {
  //   return userData.attemptedQuiz;
  // }
  const navigate = useNavigate()
  const handleQuiz = () =>{navigate('/quiz')}
  const handleLogout = () =>{navigate('/login')}//add delete token
  return (
    <>
    <div>
       USER DASHBOARD AFTER LOGIN
      <Button onClick={handleQuiz}>Start Quiz</Button>
      <Button onClick={handleLogout}>Logout</Button>
       {/* <ScoreChart scores={getScores()} /> */}
    </div>


    </>
  )
}

export default Dashboard
