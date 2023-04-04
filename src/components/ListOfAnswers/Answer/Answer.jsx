import React, { useEffect, useState } from 'react';
import styles from './Answer.module.css';
import { useOutletContext } from 'react-router-dom';

export const Answer = ({ bird, stopСountingState }) => {
  const [indicator, setIndicator] = useState(styles.indicator);
  const [stopСounting, setStopСounting] = stopСountingState;

  const context = useOutletContext();

  useEffect(() => {
    setIndicator(styles.indicator);
  }, [context.guessedBird]);

  const selectAnswerHandler = () => {
    context.setIsAnswerSelected(true);
    context.setSelectedBird(bird);
    if (
      bird.name === context.guessedBird.name &&
      !stopСounting &&
      context.count !== 0
    ) {
      setIndicator(styles.indicatorTrue);
      context.setIsСorrectAnswer(true);
      context.setIsDisabledButton(false);
      context.setScore((prevState) => (prevState += context.count));
      setStopСounting(true);
    }
    if (
      bird.name !== context.guessedBird.name &&
      !stopСounting &&
      context.count !== 0
    ) {
      if (indicator !== styles.indicatorFalse) {
        context.setCount((prevState) => (prevState -= 1));
      }
      setIndicator(styles.indicatorFalse);
    }
  };

  return (
    <li className={styles.answer} onClick={selectAnswerHandler}>
      <span className={indicator}></span>
      {bird.name}
    </li>
  );
};
