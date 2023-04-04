import React, { useCallback, useEffect, useRef, useState } from 'react';
import { IoPlaySharp, IoPauseSharp } from 'react-icons/io5';
import { IoMdVolumeHigh, IoMdVolumeOff } from 'react-icons/io';
import { formatTime } from './../../utils/formatTime';
import styles from './AudioPlayer.module.css';

export const AudioPlayer = ({ audio, forPause }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [timeProgress, setTimeProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [muteVolume, setMuteVolume] = useState(false);

  const audioRef = useRef();
  const progressBarRef = useRef();
  const playAnimationRef = useRef();

  const repeat = useCallback(() => {
    try {
      const currentTime = audioRef.current.currentTime;
      setTimeProgress(currentTime);
      progressBarRef.current.value = currentTime;
      progressBarRef.current.style.setProperty(
        '--range-progress',
        `${(progressBarRef.current.value / duration) * 100}%`
      );
      playAnimationRef.current = requestAnimationFrame(repeat);
    } catch {
      return;
    }
  }, [audioRef, duration, progressBarRef, setTimeProgress]);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
      playAnimationRef.current = requestAnimationFrame(repeat);
    } else {
      audioRef.current.pause();
      cancelAnimationFrame(playAnimationRef.current);
    }
  }, [isPlaying, audioRef, repeat]);

  useEffect(() => {
    setIsPlaying(false);
    setTimeProgress(0);
    progressBarRef.current.value = 0;
    progressBarRef.current.style.setProperty('--range-progress', `0`);
  }, [forPause]);

  useEffect(() => {
    if (audioRef) {
      audioRef.current.muted = muteVolume;
    }
  }, [audioRef, muteVolume]);

  const handleProgressChange = () => {
    audioRef.current.currentTime = progressBarRef.current.value;
  };

  const onLoadedMetadata = () => {
    const seconds = audioRef.current.duration;
    setDuration(seconds);
    progressBarRef.current.max = seconds;
  };

  return (
    <div className={styles.container}>
      <button
        className={styles.button}
        onClick={() => {
          setIsPlaying((prev) => !prev);
        }}
      >
        {isPlaying ? <IoPauseSharp /> : <IoPlaySharp />}
      </button>
      <div>
        <input
          className={styles.range}
          type="range"
          ref={progressBarRef}
          defaultValue="0"
          onChange={handleProgressChange}
        />
        <div className={styles.timeBlock}>
          <span className={styles.time}>{formatTime(timeProgress)}</span>
          <span className={styles.time}>{formatTime(duration)}</span>
        </div>
      </div>
      <button
        className={styles.button}
        onClick={() => setMuteVolume((prev) => !prev)}
      >
        {muteVolume ? <IoMdVolumeOff /> : <IoMdVolumeHigh />}
      </button>
      <audio
        ref={audioRef}
        src={audio}
        onLoadedMetadata={onLoadedMetadata}
        onEnded={() => {
          setIsPlaying(false);
        }}
      />
    </div>
  );
};
