/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import './style.css';
import renderPage from './modules/pageRender.js';

document.addEventListener('DOMContentLoaded', () => {
  renderPage();

  // eslint-disable-next-line no-unused-vars
  const gameID = 'dB9kTdIB86xI5HWMv3yV';
  const baseURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';
  const requestURL = `${baseURL}games/${gameID}/scores/`;

  const form = document.querySelector('form');

  // POST scores to the API
  const createScore = async (inputName, inputValue) => {
    const response = await fetch(requestURL, {
      method: 'POST',
      body: JSON.stringify({
        user: inputName,
        score: inputValue,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    const data = await response.json();
    form.reset();
  };
});
