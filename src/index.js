import './style.css';

const appBody = document.querySelector('.app-container');
const appTitle = document.createElement('h1');
appTitle.innerHTML = 'Leaderboard';
appBody.appendChild(appTitle);
const scoreBoard = document.createElement('div');
scoreBoard.classList.add('score-board');
const scoresList = document.createElement('div');
scoresList.classList.add('scores-list');
scoresList.innerHTML = `<div class="title">
                          Recent scores
                          <button class="refresh-scores">Refresh</button>
                        </div>
                        <div class="scores">
                        </div>`;
const table = document.createElement('table');
table.classList.add('table');
table.innerHTML = `<tr>Name: 100</tr>
                   <tr>Name: 20</tr>
                   <tr>Name: 50</tr>
                   <tr>Name: 78</tr>
                   <tr>Name: 125</tr>
                   <tr>Name: 77</tr>
                   <tr>Name: 42</tr>`;
scoresList.appendChild(table);
scoreBoard.appendChild(scoresList);

const addScore = document.createElement('div');
addScore.classList.add('add-score');
addScore.innerHTML = `<div class="title">Add your score</div>
                      <form class="form">
                        <input type="text" placeholder="Your name" class="name" required>
                        <input type="number" placeholder="Your score" class="score" required>
                        <button type="submit" class="submit">Submit</button>
                      </form>`;
scoreBoard.appendChild(addScore);
appBody.appendChild(scoreBoard);