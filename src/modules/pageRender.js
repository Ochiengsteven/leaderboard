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
                          <button class="refresh-scores" id="page-refresh">Refresh</button>
                        </div>
                        <div class="scores" id="score-table">
                        </div>`;
  scoreBoard.appendChild(scoresList);

  const addScore = document.createElement('div');
  addScore.classList.add('add-score');
  addScore.innerHTML = `<div class="title"><h3>Add your score</h3></div>
                      <form class="form">
                        <div class="input-box">
                          <input type="text" class="name" id="name-input" required>
                          <span>Your name</span>
                        </div>
                        <div class="input-box">
                          <input type="number" class="score" id="value-input" required>
                          <span>Your score</span>
                        </div>
                        <div class="submit-btn"><button type="submit" class="submit">Submit</button></div>
                      </form>`;
  scoreBoard.appendChild(addScore);
  appBody.appendChild(scoreBoard);
}