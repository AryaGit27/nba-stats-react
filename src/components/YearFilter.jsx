function YearFilter({ selectedYear, onYearChange }) {
    const startYear = 1980;
    const currentYear = new Date().getFullYear();
    const length = currentYear - startYear + 1;
    const years = Array.from({ length }, (_, i) => startYear + i).reverse();

    const formatSeason = (year) => {
        const prevYear = year - 1;
        const shortYear = year.toString().slice(-2);
        return `${prevYear}-${shortYear}`;
    };

    return (
        <div style={{ marginBottom: "20px" }}>
            <label htmlFor="year-select" style={{ marginRight: "10px" }}>Select Season:</label>
            <select
                id="year-select"
                value={selectedYear}
                onChange={(e) => onYearChange(Number(e.target.value))}
            >
                {years.map(year => (
                    <option key={year} value={year}>
                        {formatSeason(year)}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default YearFilter;