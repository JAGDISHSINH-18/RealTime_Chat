document.addEventListener('DOMContentLoaded', getQuote);

document.getElementById('new-quote').addEventListener('click', getQuote);

async function getQuote() {
  const response = await fetch('/quote');
  const data = await response.json();
  document.getElementById('quote').textContent = data.quote;
}