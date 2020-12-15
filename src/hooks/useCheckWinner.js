import { useState, useEffect } from 'react';

export const useCheckWinner = (gameField) => {
  const [winner, setWinner] = useState(false);

  useEffect(() => {
    for (let i = 0; i < gameField.length - 2; i++) {
      for (let j = 0; j < gameField[i].length; j++) {
        //Check horizontally
        if (
          gameField[j][i] === gameField[j][i + 1] &&
          gameField[j][i] === gameField[j][i + 2] &&
          gameField[j][i + 1] === gameField[j][i + 2]
        ) {
          setWinner(gameField[j][i]);
          return;
        }
        //Check vertically
        if (
          gameField[i][j] === gameField[i + 1][j] &&
          gameField[i][j] === gameField[i + 2][j] &&
          gameField[i + 1][j] === gameField[i + 2][j]
        ) {
          setWinner(gameField[i][j]);
          return;
        }
        //Check diagonally (left to right)
        if (
          gameField[0][0] === gameField[1][1] &&
          gameField[0][0] === gameField[2][2] &&
          gameField[1][1] === gameField[2][2]
        ) {
          setWinner(gameField[0][0]);
          return;
        }
        //Check diagonally (right to left)
        if (
          gameField[0][2] === gameField[1][1] &&
          gameField[0][2] === gameField[2][0] &&
          gameField[1][1] === gameField[2][0]
        ) {
          setWinner(gameField[0][2]);
          return;
        }
      }
    }

    setWinner(false);
  }, [gameField]);

  return winner;
};
