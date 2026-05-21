import React from "react";
import { useState, useEffect } from "react";
import Papa from "papaparse";
import PlayerSearch from "./components/PlayerSearch";
import PlayerStats from "./components/PlayerStats";
import CompareTable from "./components/CompareTable";
import YearFilter from "./components/YearFilter";
import playersCSV from "./data/players.csv";
import "./App.css";

function App() {
  const [player1, setPlayer1] = useState(null);
  const [player2, setPlayer2] = useState(null);
  const [allPlayers, setAllPlayers] = useState([]);
  const [selectedYear, setSelectedYear] = useState(2026);

  useEffect(() => {
    fetch(playersCSV)
      .then(res => res.text())
      .then(csvText => {
        Papa.parse(csvText, {
          header: true,
          dynamicTyping: true,
          skipEmptyLines: true,
          complete: results => setAllPlayers(results.data)
        });
      })
      .catch(err => console.error("Error fetching data:", err));
  }, []);

  const playersForYear = allPlayers.filter(p => p.season === selectedYear);

  const handleYearChange = (newYear) => {
    setSelectedYear(newYear);
    setPlayer1(null);
    setPlayer2(null);
  };

  return (
    <div className="App">
      <img src="/nba.png" className="nba-logo" />
      <img src="/hoop.png" className="hoop-image" />
      <div className="search-bar-container">
        <h1 style={{ color: "rgba(110, 59, 1, 1)" }}>NBA Player Stats</h1>
        
        <YearFilter selectedYear={selectedYear} onYearChange={handleYearChange} />

        <div className="players-wrapper">
          <div className="player-column">
            <h2 style={{ marginTop: "20px" }}>Player 1:</h2>
            <PlayerSearch players={playersForYear} selectedPlayer={player1} onSelect={setPlayer1} onClear={() => setPlayer1(null)} />
              {!(player1 && player2) &&
            <PlayerStats player={player1} />
              }
          </div>

          <div className="player-column">
            <h2 style={{ marginTop: "20px" }}>Player 2:</h2>
            <PlayerSearch players={playersForYear} selectedPlayer={player2} onSelect={setPlayer2} onClear={() => setPlayer2(null)} />
              {!(player1 && player2) &&
            <PlayerStats player={player2} />
              }
          </div>
        </div>

        {player1 && player2 && (
          <CompareTable player1={player1} player2={player2} />
        )}

        {player1 && player2 && (
          <button onClick={() => { setPlayer1(null); setPlayer2(null); }} style={{ paddingLeft: '2px', paddingRight: '2px' }}>
            RESET
          </button>
        )}

      </div>
    </div>
  );
}

export default App;