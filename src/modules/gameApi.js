// eslint-disable-next-line no-unused-vars
const display = (scores) => {
  const scoresTable = document.getElementById('score-table');
  scoresTable.innerHTML = '';
  const table = document.createElement('table');
  table.classList.add('table');

  const tbody = document.createElement('tbody');

  scores.forEach((item, index) => {
    const row = document.createElement('tr');
    row.classList.add(index % 2 === 0 ? 'even' : 'odd');
    const cell = document.createElement('td');
    cell.textContent = `${item.user}: ${item.score}`;
    row.appendChild(cell);
    tbody.appendChild(row);
  });

  table.appendChild(tbody);
  scoresTable.appendChild(table);
};