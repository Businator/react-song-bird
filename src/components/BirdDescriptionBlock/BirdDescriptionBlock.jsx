import React from 'react';

import styles from './BirdDescriptionBlock.module.css';
import { useOutletContext } from 'react-router-dom';
import { AudioPlayer } from '../AudioPlayer/AudioPlayer';

export const BirdDescriptionBlock = () => {
  const context = useOutletContext();

  const { name, species, image, description, audio } = context.selectedBird;

  const decriptionBlock = !context.isAnswerSelected ? (
    <>
      <p>Listen to the player.</p>
      <p>Select a bird from the list</p>
    </>
  ) : (
    <>
      <div className={styles.topContent}>
        <img className={styles.img} src={image} alt="bird img" />
        <div className={styles.nameBlock}>
          <h3>{name}</h3>
          <h4>{species}</h4>
        </div>
      </div>
      <div className={styles.actionBlock}>
        <AudioPlayer audio={audio} forPause={context.selectedBird} />
        <p>{description}</p>
      </div>
    </>
  );

  return <div className={styles.container}>{decriptionBlock}</div>;
};
