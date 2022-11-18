import React,{useEffect} from 'react'
import classes from './QuizInfo.module.css';
const QuizInfo = () => {

  return (
    <></>
    // <div><>
    // {quizData ? (
    //   <div className={classes.quizInfoContainer}>
    //     <h1>{quizData?.title}</h1>
    //     <div className={classes.infoDiv}>
    //       <h2>Description</h2>
    //       <br />
    //       <pre>{quizData?.description}</pre>
    //     </div>
    //     <div className={classes.infoDiv}>
    //       <h2>Instructions</h2>
    //       <br />
    //       <pre>{quizData?.instructions}</pre>
    //     </div>
    //     <div className={classes.infoDiv}>
    //       <p>
    //         <strong>Time Limit: </strong>
    //         {quizData?.timeLimit} minutes
    //       </p>
    //       <br />
    //       <p>
    //         <strong>Total marks: </strong>
    //         {quizData?.totalMarks}
    //       </p>
    //     </div>
    //     <a href={`/questions/${match.params.quizId}`}>Start Quiz</a>
    //   </div>
//     ) : (
//      <h6>404 error</h6>
//     )}
//   </></div>
  )
}

export default QuizInfo
