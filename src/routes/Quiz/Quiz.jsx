import { useState } from 'react';
import { useNavigate, useOutletContext } from 'react-router-dom';
import { BirdDescriptionBlock } from '../../components/BirdDescriptionBlock/BirdDescriptionBlock';
import { ListOfBirdSpecies } from '../../components/ListOfBirdSpecies/';
import { PuzzleBlock } from '../../components/PuzzleBlock';
import { ListOfAnswers } from './../../components/ListOfAnswers/ListOfAnswers';

import styles from './Quiz.module.css';

export const Quiz = () => {
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
      context.setIsDisabledButton(true);
      setStopСounting(false);
      context.setCount(5);
      context.setSelectedBird({});
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
    <div className={styles.container}>
      <ListOfBirdSpecies />
      <PuzzleBlock />
      <div className={styles.answersBlock}>
        <ListOfAnswers stopСountingState={[stopСounting, setStopСounting]} />
        <BirdDescriptionBlock />
      </div>
      {showButton()}
    </div>
  );
};
