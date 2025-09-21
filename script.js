const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const newQuoteBtn = document.getElementById('new-quote');

async function getQuote() {
  try {
    const response = await fetch('https://api.quotable.io/random');
    if (!response.ok) throw new Error('Network response was not ok');
    const data = await response.json();
    quoteText.textContent = `"${data.content}"`;
    authorText.textContent = `— ${data.author}`;
  } catch (error) {
    quoteText.textContent = 'Oops! Could not fetch a quote.';
    authorText.textContent = '';
  }
}

newQuoteBtn.addEventListener('click', getQuote);

// Load an initial quote on page load
getQuote();
