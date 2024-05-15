class MultiplicationTable {
    static generateTable() {
        const table = document.getElementById('multiplicationTable');

        for (let i = 1; i <= 12; i++) {
            const row = table.insertRow(-1);
            for (let j = 1; j <= 12; j++) {
                const cell = row.insertCell(-1);
                cell.textContent = i * j;
            }
        }
    }
}

MultiplicationTable.generateTable();
