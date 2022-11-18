import React from 'react'
import { Navigate, Route, Routes, Link} from 'react-router-dom'
import Login from './component/login/Login'
import Home from './component/home/Home'
import Signup from './component/signup/Signup'
import {BrowserRouter } from 'react-router-dom'
import TakeQuiz from './takeQuiz/TakeQuiz';
import Button from 'react-bootstrap/Button';
import UserResult from './admin/UserResults';
import AddQuiz from './admin/AddQuiz';
import AddQuestion from './admin/AddQuestion';
import './App.css';
import {  QuizContext } from './context/QuizHolder.jsx'
import { useContext} from 'react'
import Result from './components/Result'
import Start from './components/Start'
import Quiz from './components/Quiz'



const App = () => {
 const user = localStorage.getItem("token")
   const {start, exit} = useContext(QuizContext)
  return (
    <>
    <BrowserRouter>
    <Routes>

    // <Route path='/' element={
    //   exit===false
    //   ?
    //   <>
    //   {
    //       start === true
    //       ?
    //
    //       <Quiz />
    //       :
    //       <Start />
    //     }
    //     </>
    //     :
    //     <Result />
    //   }/>

      {user &&<Route path='/' element={ <Home /> } /> }
      <Route path='/login' element={  <Login />} />
      <Route path='/signup' element={ <Signup /> } />
      <Route path='/' element={<Navigate replace to="/login" />} />
      <Route path='/signup' element={user && <Navigate replace to='/' />} />
      <Route path='/' element={user ? <Home /> :<Login />} exact />
      <Route path='*' element={<Navigate to={user ? 'home' : '/'} />} />
      <Route path='' element={<Admin />} />

      <Route path='/admin' element={<Admin/>}/>
                // <Route path='/admin/Adminlogin' element={<Adminlogin/>}/>
                <Route path='/admin/addQuestion' element={<AddQuestion/>}/>
                <Route path='/admin/addQuiz' element={<AddQuiz/>}/>
                <Route path='/admin/userResult' element={<UserResult/>}/>
                <Route path='/quiz' element={<TakeQuiz/>}/>
      {/* <PrivateRoute path='/create-quiz' exact component={CreateQuiz} />
          <PrivateRoute path='/quiz/:quizId' exact component={QuizInfo} />
          <PrivateRoute
            path='/questions/:quizId'
            exact
            component={QuestionsPage}
          /> */}
                {/* <PrivateRoute path='/dashboard' exact component={Dashboard} />
          <PrivateRoute path='/all' exact component={QuizzesPage} />
          <PrivateRoute path='/attempted' exact component={QuizzesPage} />
          <PrivateRoute path='/created' exact component={QuizzesPage} />
          {/* <PrivateRoute path='/statistics' exact component={QuizzesPage} /> */}
          {/* <PrivateRoute
            path='/quiz-response/:quizId'
            exact
            component={QuizResponse}
          />
          <PrivateRoute path='/score' exact component={ScorePage} /> */}

    </Routes>
    </BrowserRouter>



    </>
    )
}

export default App
