import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import styles from './CourseInput.module.css';

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');

  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = event => {
    if(event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
    setEnteredValue("");
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if(enteredValue.trim().length === 0){
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
    
  };

  return (
    <form onSubmit={formSubmitHandler}>
      {/* {`form-control ${!isValid ? 'invalid' :''}`} */}
      <div className={`${styles['form-control']} ${!isValid && styles.invalid}`} >
      {/* style={{color: !isValid ? 'red' : 'green'}} */}
        <label>Course Goal</label>
        {/* style={{borderColor: !isValid ? 'red':'black', backgroundColor: !isValid ? 'salmon':'transparent'}} */}
        <input  type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
