import { useState } from "react";
import usePlayers from "../hooks/usePlayers";

function PlayerSearch({ selectedPlayer, onSelect, onClear }) {
    const [query, setQuery] = useState("");
    const players = usePlayers();


    const filteredPlayers = players.filter(player => {
        if (!query) return false;

        const lowerQuery = query.toLowerCase();
        const nameParts = player.player.split(" ");
        const firstName = nameParts[0].toLowerCase();
        const lastName = nameParts[1]?.toLowerCase() || "";

        return (
            firstName.startsWith(lowerQuery) || (lastName && lastName.startsWith(lowerQuery))
        );
    });

    const handleClear = () => {
        setQuery("");
        onClear();
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Search players..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                disabled={!!selectedPlayer}
            />

            <button onClick={handleClear} disabled={!selectedPlayer && !query} style={{ paddingLeft: '2px', paddingRight: '2px' }}>Clear</button>

            {query.length > 0 && !selectedPlayer && (
                <ul
                    style={{
                        margin: 0,
                        padding: "5px",
                        listStyle: "none",
                        border: "1px solid black",
                        borderRadius: "4px",
                        maxHeight: "120px",
                        overflowY: "auto",
                        width: "200px",
                        position: "absolute",
                        background: "#fff",
                        zIndex: 10
                    }}
                >
                    {filteredPlayers.length > 0 ? (
                        filteredPlayers.map(player => (
                            <li
                                key={player.personId}
                                onClick={() => {
                                    onSelect(player);
                                    setQuery("");
                                }}
                                style={{ cursor: "pointer" }}
                            >
                                {player.player} - {player.team}
                            </li>
                        ))
                    ) : (
                        <p style={{ marginTop: '10px' }}>No players found...</p>
                    )}
                </ul>
            )}

        </div>
    )
}

export default PlayerSearch;