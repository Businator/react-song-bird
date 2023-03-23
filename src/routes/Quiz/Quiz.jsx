import { BirdDescriptionBlock } from '../../components/BirdDescriptionBlock/BirdDescriptionBlock';
import { ListOfBirdSpecies } from '../../components/ListOfBirdSpecies/';
import { PuzzleBlock } from '../../components/PuzzleBlock';
import { ListOfAnswers } from './../../components/ListOfAnswers/ListOfAnswers';

import styles from './Quiz.module.css';

export const Quiz = () => {
  return (
    <div className={styles.container}>
      <ListOfBirdSpecies />
      <PuzzleBlock />
      <div className={styles.answersBlock}>
        <ListOfAnswers />
        <BirdDescriptionBlock />
      </div>
    </div>
  );
};
