import React from 'react';

import birdImg from '../../assets/images/bird.jpg';
import styles from './PuzzleBlock.module.css';
import { useOutletContext } from 'react-router-dom';

export const PuzzleBlock = () => {
  const context = useOutletContext();
  const { name, image, audio } = context.guessedBird;

  return (
    <div className={styles.container}>
      <img
        className={styles.img}
        src={!context.isСorrectAnswer ? birdImg : image}
        alt="stub bird"
      />
      <div>
        <h2>Score: {context.score}</h2>
        <h2>{!context.isСorrectAnswer ? '******' : name}</h2>
        <audio src={audio} controls></audio>
      </div>
    </div>
  );
};
