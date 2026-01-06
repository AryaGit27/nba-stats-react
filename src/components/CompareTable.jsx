function CompareTable({ player1, player2 }) {
    const stats = [
        { label: "Points Per Game", key: "pts_per_game" },
        { label: "Assists Per Game", key: "ast_per_game" },
        { label: "Rebounds Per Game", key: "trb_per_game" },
        { label: "Steals Per Game", key: "stl_per_game" },
        { label: "Blocks Per Game", key: "blk_per_game" },
        { label: "FG%", key: "fg_percent" },
        { label: "3P%", key: "x3p_percent" },
        { label: "Minutes Per Game", key: "mp_per_game" }
    ];

    const formatValue = (value, key) => {
        if(value === null || value === undefined) return "-";
        
        const numValue = Number(value);

        if(key.includes("percent")){
            
            return (Math.round(numValue * 1000) / 10) + "%";
        }

        return numValue.toFixed(1);
    };

    return (
        <div className="table-container">
            <table className="comparison-table">
                <thead>
                    <tr>
                        <th style={{ textAlign: 'center' }}>Stat</th>
                        <th style={{ textAlign: 'center' }}>{player1.player}</th>
                        <th style={{ textAlign: 'center' }}>{player2.player}</th>
                    </tr>
                </thead>
                <tbody>
                    {stats.map(stat => {
                        const aValue = player1[stat.key];
                        const bValue = player2[stat.key];

                        return (
                            <tr key={stat.key}>
                                <td className="stat-label">{stat.label}</td>
                                <td style={{ textAlign: 'center', color: aValue > bValue ? "#2ecc71" : "inherit", fontWeight: "bold" }}>
                                    {formatValue(aValue, stat.key)}
                                </td>
                                <td style={{ textAlign: 'center', color: bValue > aValue ? "#2ecc71" : "inherit", fontWeight: "bold" }}>
                                    {formatValue(bValue, stat.key)}
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default CompareTable;