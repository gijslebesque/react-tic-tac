import { useState } from 'react';
import Header from './components/Header';
import TableCell from './components/TableCell';
import { useCheckWinner } from './hooks/useCheckWinner';

const initGame = [
  [NaN, NaN, NaN],
  [NaN, NaN, NaN],
  [NaN, NaN, NaN],
];

function App() {
  const [currentPlayer, setCurrentPlayer] = useState('x');
  const [coordinates, setCoordinate] = useState(initGame);
  const winner = useCheckWinner(coordinates);

  const onClickHandler = (coordinate) => {
    //need deepclone;
    const co = coordinates.map((e) => e.map((l) => l));
    if (!co[coordinate[0]][coordinate[1]] && !winner) {
      co[coordinate[0]][coordinate[1]] = currentPlayer;
      setCoordinate(co);
      setCurrentPlayer(currentPlayer === 'x' ? 'o' : 'x');
    }
  };

  return (
    <>
      <Header winner={winner} />
      <section>
        <table>
          {coordinates.map((el, rowIndex) => {
            return (
              <tr>
                {el.map((_, tableIndex) => {
                  return (
                    <TableCell
                      onClickHandler={onClickHandler}
                      coordinate={[rowIndex, tableIndex]}
                      coordinates={coordinates}
                    />
                  );
                })}
              </tr>
            );
          })}
        </table>

        {winner && (
          <button onClick={() => setCoordinate(initGame)}>New Game </button>
        )}
      </section>
    </>
  );
}

export default App;
