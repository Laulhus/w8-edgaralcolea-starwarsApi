import StarShipList from "../interfaces/StarShipsList";

export interface ListProps {
  starShipsList: StarShipList | undefined;
}

export const List = ({ starShipsList }: ListProps): JSX.Element => {
  return (
    <ul>
      {starShipsList?.results.map((starShip) => (
        <p key={starShip.starship_class}>{starShip.starship_class}</p>
      ))}
    </ul>
  );
};
