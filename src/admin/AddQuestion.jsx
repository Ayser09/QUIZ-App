import React,{useState} from 'react'
import classes from './addQuestion.module.css';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';



const AddQuestion = (props) => {
  const navigate = useNavigate()
  const [question, setQuestion] = useState({
    questionText: '',
    answers: [
      { answerText: '', isCorrect: false },
      { answerText: '', isCorrect: false },
      { answerText: '', isCorrect: false },
      { answerText: '', isCorrect: false },
    ],
    marks: 1,
    negativePenalty: 0,
  });

  const onChange = (e) => {
    setQuestion({
      ...question,
      [e.target.name]: e.target.value,
    });
  };
  const onAnswerChange = (e, index) => {
    let answers = [...question.answers];
    const value =
      e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    answers[index][e.target.name] = value;

    setQuestion({ ...question, answers });
  };
  const addOptions = (e) => {
    e.preventDefault();
    const values = question.answers;

    setQuestion({
      ...question,
      answers: [...values, { answerText: '', isCorrect: false }],
    });
  };
  const onSubmitQuestion = () => {
    props.parentCallback(question, props.id);
  };

  return (
    <div>
     diffiuclty *3
     type of question
     MCQ or text based
     checkbox to include input text on onClick

  <select>
    <option>EASY</option>
    <option>MEDIUM</option>
    <option>HARD</option>
  </select>
    <Button onClick={() =>navigate('/Admin')} >go back</Button>

    <div className={classes.createQuestionCard}>
      <textarea
        name='questionText'
        placeholder='Question Text'
        onChange={onChange}
      />
      {question.answers.map((answer, index) => (
        <div className={classes.answer} key={index}>
          <input
            type='checkbox'
            name='isCorrect'
            placeholder='CorrectOption'
            onChange={(e) => onAnswerChange(e, index)}
          />
          <input
            type='text'
            name='answerText'
            placeholder='answerText'
            value={answer.answerText}
            onChange={(e) => onAnswerChange(e, index)}
          />
        </div>
      ))}
      <div>Check this checkbox to include the text area
      <input
          type='checkbox'
          placeholder='check the box to include text Area'
          onChange={onAnswerChange}
        /></div>
            <textarea
        name='text'
        placeholder='type your answer here'
        onChange={onChange}
      />
      <button onClick={addOptions}>Add another option</button>
      <div className={classes.marksInput}>
        <input
          type='number'
          name='marks'
          placeholder='Max marks'
          min={0}
          onChange={onChange}
        />
        <input
          type='number'
          name='negativePenalty'
          placeholder='Negative penalty'
          min={0}
          onChange={onChange}
        />
      </div>
      <button
        type='button'
        onClick={onSubmitQuestion}
        className={classes.submitQuestionButton}
      >
        Submit / Update question
      </button>
    </div>
     </div>
  )
}

export default AddQuestion
