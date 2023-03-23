import birdsDataEn from '../../mocks/birdsData';
import styles from './Result.module.css';
import { useNavigate, useOutletContext } from 'react-router-dom';

export const Results = () => {
  const context = useOutletContext();
  const navigate = useNavigate();

  const buttonHandler = () => {
    context.setListOfBirds(birdsDataEn[0]);
    context.setGuessedBird(
      birdsDataEn[0][Math.floor(Math.random() * birdsDataEn[0].length)]
    );
    context.setScore(0);
    context.setCount(5);
    context.setQuestionNumber(0);
    context.setIsAnswerSelected(false);
    context.setSelectedBird({});
    context.setIsСorrectAnswer(false);
    context.setIsDisabledButton(true);

    navigate('/quiz');
  };

  return (
    <div className={styles.container}>
      <h2>Your result: {context.score}</h2>
      <button onClick={buttonHandler}>Try Again?</button>
    </div>
  );
};
