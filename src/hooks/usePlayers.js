import { useEffect, useState } from "react";
import Papa from "papaparse";
import playersCSV from "../data/players.csv";

export default function usePlayers() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetch(playersCSV)
      .then(res => res.text())
      .then(csvText => {
        Papa.parse(csvText, {
          header: true,
          dynamicTyping: true,
          complete: results => setPlayers(results.data)
        });
      });
  }, []);

  return players;
}