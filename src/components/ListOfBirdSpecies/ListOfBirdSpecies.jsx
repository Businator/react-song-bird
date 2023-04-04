import React from 'react';

import styles from './ListOfBirdSpecies.module.css';
import { useOutletContext } from 'react-router-dom';

export const ListOfBirdSpecies = () => {
  const context = useOutletContext();

  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        <li
          className={
            context.questionNumber !== 0
              ? styles.birdSpecies
              : styles.birdSpeciesActive
          }
        >
          Warm-up
        </li>
        <li
          className={
            context.questionNumber !== 1
              ? styles.birdSpecies
              : styles.birdSpeciesActive
          }
        >
          Passerines
        </li>
        <li
          className={
            context.questionNumber !== 2
              ? styles.birdSpecies
              : styles.birdSpeciesActive
          }
        >
          Forest birds
        </li>
        <li
          className={
            context.questionNumber !== 3
              ? styles.birdSpecies
              : styles.birdSpeciesActive
          }
        >
          Songbirds
        </li>
        <li
          className={
            context.questionNumber !== 4
              ? styles.birdSpecies
              : styles.birdSpeciesActive
          }
        >
          Predator birds
        </li>
        <li
          className={
            context.questionNumber !== 5
              ? styles.birdSpecies
              : styles.birdSpeciesActive
          }
        >
          Sea birds
        </li>
      </ul>
    </div>
  );
};
