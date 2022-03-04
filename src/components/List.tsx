import ListProps from "../interfaces/ListProps";

const List = (starShips: ListProps | undefined): JSX.Element => {
  return <p>{starShips?.results[0].class}</p>;
};

export default List;
