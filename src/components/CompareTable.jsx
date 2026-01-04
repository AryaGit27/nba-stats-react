function CompareTable({ player1, player2 }) {
    const stats = [
        { label: "Points Per Game", key: "pts_per_game" },
        { label: "Assists Per Game", key: "ast_per_game" },
        { label: "Rebounds Per Game", key: "trb_per_game" }
    ];

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
                                    {aValue}
                                </td>
                                <td style={{ textAlign: 'center', color: bValue > aValue ? "#2ecc71" : "inherit", fontWeight: "bold" }}>
                                    {bValue}
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