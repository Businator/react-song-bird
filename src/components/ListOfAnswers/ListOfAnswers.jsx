import React, { useState } from 'react';

import styles from './ListOfAnswers.module.css';
import { useNavigate, useOutletContext } from 'react-router-dom';
import { Answer } from './Answer/Answer';

export const ListOfAnswers = () => {
  const context = useOutletContext();
  const navigate = useNavigate();

  const [stopСounting, setStopСounting] = useState(false);

  const buttonHandler = () => {
    if (context.questionNumber === 5) {
      navigate('/results');
    }
    if (context.isСorrectAnswer && context.questionNumber < 5) {
      context.setQuestionNumber((prevState) => (prevState += 1));
      context.setIsСorrectAnswer(false);
      context.setIsAnswerSelected(false);
      context.setSelectedBird({});
      context.setIsDisabledButton(true);
      setStopСounting(false);
      context.setCount(5);
    }
  };

  const showButton = () => {
    if (context.count !== 0) {
      return (
        <button
          onClick={buttonHandler}
          disabled={
            context.isDisabledButton ||
            (context.score <= 0 && context.questionNumber === 5)
          }
        >
          {context.questionNumber !== 5 ? 'Next Level' : 'Show Result'}
        </button>
      );
    } else {
      return <button onClick={context.newGame}>Try Again</button>;
    }
  };

  return (
    <>
      <div className={styles.container}>
        <ul className={styles.answersList}>
          {context.listOfBirds.map((bird) => (
            <Answer
              key={bird.id}
              birdName={bird.name}
              stopСountingState={[stopСounting, setStopСounting]}
            />
          ))}
        </ul>
      </div>
      <div className={styles.actionBlock}>
        <span className={styles.count}>Count: {context.count}</span>
        {showButton()}
      </div>
    </>
  );
};
