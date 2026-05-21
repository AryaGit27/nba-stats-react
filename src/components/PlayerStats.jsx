function PlayerStats({ player }) {

    if (!player) return null;

    // const toPercentage = (val) => {
    //     return val ? (Number(val) * 100).toFixed(1) : "0.00";
    // };

    return (
        <div className="player-stats-container">
            <h2>{player.player} - {player.team}</h2>
            <ul style={{ listStyleType: "none", padding: 0 }}>
                <li>PPG: {player.pts_per_game}</li>
                <li>APG: {player.ast_per_game}</li>
                <li>RPG: {player.trb_per_game}</li>
                {/* <li>STL: {player.stl_per_game}</li>
                <li>BLK: {player.blk_per_game}</li>
                <li>FG%: {toPercentage(player.fg_percent)}%</li>
                <li>3FG%: {toPercentage(player.x3p_percent)}%</li>
                <li>MPG: {player.mp_per_game}</li> */}
            </ul>
        </div>

    );
}

export default PlayerStats;