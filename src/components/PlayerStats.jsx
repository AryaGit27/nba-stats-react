function PlayerStats({ player }) {

    if (!player) return null;

    return (
        <div className="player-stats-container">
            <h2>{player.player} - {player.team}</h2>
            <ul style={{ listStyleType: "none", padding: 0 }}>
                <li>PPG: {player.pts_per_game}</li>
                <li>APG: {player.ast_per_game}</li>
                <li>RPG: {player.trb_per_game}</li>
            </ul>
        </div>

    );
}

export default PlayerStats;