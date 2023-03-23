import React, { useState } from 'react';

import styles from './ListOfAnswers.module.css';
import { useNavigate, useOutletContext } from 'react-router-dom';

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
      const spans = document.querySelectorAll('span');
      spans.forEach((span) => (span.className = styles.indicator));
    }
  };

  const selectAnswerHandler = ({ event, bird }) => {
    const target = event.target.closest('li');
    context.setIsAnswerSelected(true);
    context.setSelectedBird(bird);

    if (
      bird.name === context.guessedBird.name &&
      !stopСounting &&
      context.count !== 0
    ) {
      target.firstElementChild.className = styles.indicatorTrue;
      context.setIsСorrectAnswer(true);
      context.setIsDisabledButton(false);
      context.setScore((prevState) => (prevState += context.count));
      context.setCount(5);
      setStopСounting(true);
    } else if (
      bird.name !== context.guessedBird.name &&
      !stopСounting &&
      context.count !== 0
    ) {
      if (target.firstElementChild.className !== styles.indicatorFalse) {
        context.setCount((prevState) => (prevState -= 1));
      }
      target.firstElementChild.className = styles.indicatorFalse;
    }
  };

  return (
    <>
      <div className={styles.container}>
        <ul className={styles.answersList}>
          {context.listOfBirds.map((bird) => (
            <li
              key={bird.id}
              className={styles.answer}
              onClick={(event) => {
                selectAnswerHandler({ event, bird });
              }}
            >
              <span className={styles.indicator}></span>
              {bird.name}
            </li>
          ))}
        </ul>
      </div>
      <button
        onClick={buttonHandler}
        disabled={
          context.isDisabledButton ||
          (context.score <= 0 && context.questionNumber === 5)
        }
      >
        {context.questionNumber !== 5 ? 'Next Level' : 'Show Result'}
      </button>
    </>
  );
};
