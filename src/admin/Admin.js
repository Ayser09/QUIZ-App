
import React, { useEffect } from 'react'
import {Row, Col, Container} from 'react-bootstrap'
import  {Button} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
// import { useSelector } from 'react-redux'

const Admin = () => {
  const navigate = useNavigate()
// const userState = useSelector(state => state.loginUserReducer)
// const {currentUser } = userState
// useEffect(() =>{
//   if(localStorage.getItem("currentUser")=== null || !currentUser.isAdmin){
//     window.location.href = "/"
//   }
// },[])

  return (
   <>

    <Container>
      <Row>
        <h1>Admin Panel</h1>
        <Col md={4}>
        <Button onClick={() =>navigate('/Admin/userResults')} >USER Results</Button>
        <Button onClick={() =>navigate('/Admin/addQuestion')}>ADD QUESTIOINS</Button>
     <Button onClick={() =>navigate('/Admin/userResult')}> RESULTS TAB(ascending or descending order) </Button>
      <Button onClick={() =>navigate('/Admin/addQuiz')}> Add new quizz</Button>
      <Button onClick={() =>navigate('/Admin/Quizzes')}> View all quizzes</Button>
      </Col>
    </Row>
    </Container>
    </>
  )
}

export default Admin
