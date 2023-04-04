import React from 'react';
import { useOutletContext } from 'react-router-dom';
import { Answer } from './Answer/Answer';
import styles from './ListOfAnswers.module.css';

export const ListOfAnswers = ({ stopСountingState }) => {
  const context = useOutletContext();

  const [stopСounting, setStopСounting] = stopСountingState;

  return (
    <>
      <div className={styles.container}>
        <ul className={styles.answersList}>
          {context.listOfBirds.map((bird) => (
            <Answer
              key={bird.id}
              stopСountingState={[stopСounting, setStopСounting]}
              bird={bird}
            />
          ))}
        </ul>
      </div>
    </>
  );
};
