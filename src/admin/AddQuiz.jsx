import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import AddQuestion from './AddQuestion';
import classes from './addQuiz.module.css';
const AddQuiz = () => {
  const navigate = useNavigate()

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const [formData, setFormData] = useState({
    title: '',
    description: 'No description provided',
    instructions: 'No instructions provided',
    timeLimit: '',
    questions: [],
  });

  const onSubmit = (e) =>{ e.preventDefault();}
  const addQuestion = (e) => {
    e.preventDefault();
    setFormData({
      ...formData,
      questions: [...formData.questions, {}],
    });
  };
  const callbackFunction = (data, index) => {}
  return (
    <div>addQuiz list of quizz 1,2,3
        each button will let u add questions to 3 categories
      <Button onClick={() =>navigate('/Admin')} >go back</Button>
      <form className={classes.quizContainer} onSubmit={onSubmit}>
      <h1>Create Quiz</h1>
      <input
        type='text'
        name='title'
        placeholder='Quiz name'
        onChange={onChange}
        className={classes.quizInput}
      />
      <textarea
        name='description'
        placeholder='Description'
        onChange={onChange}
      ></textarea>
      <textarea
        name='instructions'
        placeholder='Instructions'
        onChange={onChange}
      ></textarea>
      <input
        type='number'
        name='timeLimit'
        placeholder='Time limit'
        onChange={onChange}
        className={classes.quizInput}
      />
      {formData.questions.map((question, index) => {
        return (
          <AddQuestion
            key={index}
            parentCallback={callbackFunction}
            id={index}
          />
        );
      })}
      <button type='button' onClick={addQuestion}>
        Add Question
      </button>
      <button type='submit' onClick={onSubmit}>
        Create quiz
      </button>
    </form>
    </div>
  )
}

export default AddQuiz
