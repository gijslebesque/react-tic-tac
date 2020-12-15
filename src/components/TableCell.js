const cross = <i className="icon">&#10007;</i>;
const circle = <i className="icon">&#x30;</i>;

export default function TableCell({ coordinates, coordinate, onClickHandler }) {
  let element = null;

  if (coordinates[coordinate[0]][coordinate[1]] === 'x') element = cross;
  else if (coordinates[coordinate[0]][coordinate[1]] === 'o') element = circle;

  return <th onClick={() => onClickHandler(coordinate)}>{element}</th>;
}
