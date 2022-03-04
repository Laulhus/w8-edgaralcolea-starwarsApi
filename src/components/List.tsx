interface Starship {
  class: string;
}

interface ListProps {
  count: number;
  results: Starship[];
}

const List = (starShips: ListProps): JSX.Element => {
  return <p>{starShips.results[0].class}</p>;
};
export default List;
