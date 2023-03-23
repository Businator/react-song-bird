import { Link, NavLink, Outlet } from 'react-router-dom';
import style from './App.module.css';

import logo from './assets/images/logo.svg';
import { useCallback, useEffect, useState } from 'react';
import birdsDataEn from './mocks/birdsData';

export const App = () => {
  const [listOfBirds, setListOfBirds] = useState([]);
  const [guessedBird, setGuessedBird] = useState({});
  const [score, setScore] = useState(0);
  const [count, setCount] = useState(5);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [isAnswerSelected, setIsAnswerSelected] = useState(false);
  const [selectedBird, setSelectedBird] = useState({});
  const [isСorrectAnswer, setIsСorrectAnswer] = useState(false);
  const [isDisabledButton, setIsDisabledButton] = useState(true);

  useEffect(() => {
    setListOfBirds(birdsDataEn[0]);
    setGuessedBird(
      birdsDataEn[0][Math.floor(Math.random() * birdsDataEn[0].length)]
    );
  }, []);

  const context = {
    listOfBirds,
    setListOfBirds,
    guessedBird,
    setGuessedBird,
    score,
    setScore,
    questionNumber,
    setQuestionNumber,
    count,
    setCount,
    isAnswerSelected,
    setIsAnswerSelected,
    selectedBird,
    setSelectedBird,
    isСorrectAnswer,
    setIsСorrectAnswer,
    isDisabledButton,
    setIsDisabledButton,
  };

  const changeQuestion = useCallback(() => {
    setListOfBirds(birdsDataEn[questionNumber]);
    setGuessedBird(
      birdsDataEn[questionNumber][
        Math.floor(Math.random() * birdsDataEn[0].length)
      ]
    );
  }, [questionNumber]);

  useEffect(() => {
    changeQuestion();
  }, [changeQuestion]);

  console.log(guessedBird);

  return (
    <div className={style.app}>
      <header>
        <nav>
          <img src={logo} alt="logo" className={style.logo} />
          <div className={style.linksBlock}>
            <NavLink to={'/'}>Main Page</NavLink>
            <NavLink to={'quiz'}>Quiz</NavLink>
            <NavLink to={'results'}>Results</NavLink>
          </div>
        </nav>
      </header>
      <main>
        <Outlet context={context} />
      </main>
      <footer>
        <nav>
          <Link to="https://github.com/Businator" target="_blank">
            <img
              src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
              alt="logo github"
              className={style.github}
            />
          </Link>
          <Link to="https://rs.school/js/" target="_blank">
            <img
              src="https://rs.school/images/rs_school_js.svg"
              alt="logo rs_school"
              className={style.rsSchool}
            />
          </Link>
        </nav>
      </footer>
    </div>
  );
};
