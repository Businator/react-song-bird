import { useNavigate } from 'react-router-dom';

export const MainPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Welcome to "The Songbird" quiz!</h1>
      <h2>You need to listen to the sounds of birds singing and guess them!</h2>
      <p>
        At the beginning of the game, the number of points is 0. If the player
        gave the correct answer on the first attempt, his score increases by 5
        points, each next attempt gives one point less, if the correct answer is
        given only on the last, sixth attempt, the player receives 0 points for
        him. Points for all questions are summed up.
      </p>
      <p>
        Sound and color indication is used for correct and incorrect player
        answers
      </p>
      <p>
        When the player has given the correct answer, the "Next" button is
        activated and he gets the opportunity to move on to the next question.
      </p>
      <p>
        After the last question, a page with the results of the game is
        displayed
      </p>
      <button onClick={() => navigate('/quiz')}>Let's play!</button>
    </div>
  );
};
