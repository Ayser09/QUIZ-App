import React, { useEffect, useState } from 'react';
import classes from './questionsPage.module.css';
import QuestionCard from '../components/QuestionCard';

const QuestionsPage = ({ match }) => {
    const [response, setResponse] = useState([]);
    const [number, setNumber] = useState(0);
    const onChange = (e, index) => {
        const values = [...questions];
        const answers = [...values[number].answers];
        answers[index].isSelected = e.target.checked;
        setResponse(values);
    };
    let questions ;
    const nextQuestion = (e) => {
        if (number === questions.length - 1) {
          setNumber(0);
        } else {
          setNumber((number) => number + 1);
        }
      };

      const prevQuestion = (e) => {
        if (number === 0) {
          setNumber((number) => questions.length - 1);
        } else {
          setNumber((number) => number - 1);
        }
      };
      const submitQuiz = (e) => {
        e.preventDefault()
        // dispatch(submitQuizResponse({ quizId, response }, history));
      };
return(

<>
      {questions ? (
        <div>

          <div className={classes.questionContainer}>
            {questions ? (
              <QuestionCard
                question={questions[number]}
                handleNext={nextQuestion}
                handlePrev={prevQuestion}
                onChange={onChange}
                number={number}
              />
            ) : (
              <></>
            )}
            <div></div>
          </div>
          <button onClick={submitQuiz} className={classes.submitButton}>
            Submit quiz
          </button>
        </div>
      ) : (
        <div>404 not found</div>
      )}
    </>
)
};
export default QuestionsPage;
