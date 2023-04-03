import styles from './Result.module.css';
import { useNavigate, useOutletContext } from 'react-router-dom';

export const Results = () => {
  const context = useOutletContext();
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <h2>Your result: {context.score}</h2>
      <button
        onClick={() => {
          context.newGame();
          navigate('/quiz');
        }}
      >
        Try Again?
      </button>
    </div>
  );
};
