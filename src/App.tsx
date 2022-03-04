import { useEffect } from "react";
import { useState } from "react";
import ListProps from "./interfaces/ListProps";

function App() {
  const [starShipList, setStarshipList] = useState<ListProps>();

  const fetchAPI = async () => {
    const response = await fetch("https://swapi.dev/api/starships/");
    const starShipList = await response.json();
    setStarshipList(starShipList);
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  return (
    <div className="container">
      <div id="background-container">
        <header id="header-title">Star Wars Test</header>
        <main id="main-container">
          <h2>Starships:</h2>
          <p id="total-ships">Total ships: {starShipList?.count} </p>
          <h2>Starships by class:</h2>
        </main>
      </div>
    </div>
  );
}

export default App;
