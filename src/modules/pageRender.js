export default function renderPage() {
  const appBody = document.querySelector('.app-container');
  const appTitle = document.createElement('h1');
  appTitle.innerHTML = 'Leaderboard';
  appBody.appendChild(appTitle);
  const scoreBoard = document.createElement('div');
  scoreBoard.classList.add('score-board');
  const scoresList = document.createElement('div');
  scoresList.classList.add('scores-list');
  scoresList.innerHTML = `<div class="title">
                          <h3>Recent scores</h3>
                          <button class="refresh-scores">Refresh</button>
                        </div>
                        <div class="scores">
                        </div>`;
  const table = document.createElement('table');
  table.classList.add('table');
  table.innerHTML = ` <tbody>
<tr><td>Name: 100</td></tr>
<tr><td>Name: 20</td></tr>
<tr><td>Name: 50</td></tr>
<tr><td>Name: 78</td></tr>
<tr><td>Name: 125</td></tr>
<tr><td>Name: 77</td></tr>
<tr><td>Name: 42</td></tr>
</tbody>`;
  scoresList.appendChild(table);
  scoreBoard.appendChild(scoresList);

  const addScore = document.createElement('div');
  addScore.classList.add('add-score');
  addScore.innerHTML = `<div class="title"><h3>Add your score</h3></div>
                      <form class="form">
                        <input type="text" placeholder="Your name" class="name" required>
                        <input type="number" placeholder="Your score" class="score" required>
                        <div class="submit-btn"><button type="submit" class="submit">Submit</button></div>
                      </form>`;
  scoreBoard.appendChild(addScore);
  appBody.appendChild(scoreBoard);
}