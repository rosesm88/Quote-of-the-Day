
var quotes = [
  {
    number: 1,
    text: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "Nelson Mandela"
  },
  {
    number: 2,
    text: "The way to get started is to quit talking and begin doing.",
    author: "Walt Disney"
  },
  {
    number: 3,
    text: "If life were predictable it would cease to be life, and be without flavor.",
    author: "Eleanor Roosevelt"
  },
  {
    number: 4,
    text: "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
    author: "Oprah Winfrey"
  },
  {
    number: 5,
    text: "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
    author: "James Cameron"
  },
  {
    number: 6,
    text: "Life is what happens when you're busy making other plans.",
    author: "John Lennon"
  },
  {
    number: 7,
    text: "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
    author: "Mother Teresa"
  },
  {
    number: 8,
    text: "In the end, it's not the years in your life that count. It's the life in your years.",
    author: "Abraham Lincoln"
  },
  {
    number: 9,
    text: "Life is 10% what happens to us and 90% how we react to it.",
    author: "Charles R. Swindoll"
  },
  {
    number: 10,
    text: "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.",
    author: "Helen Keller"
  }
];

var lastQuote;

var quoteText = document.querySelector("#quote");
var quoteAuthor = document.querySelector("#author");

function getRandomQuote() {
  var quote = quotes[Math.floor(Math.random() * quotes.length)];
  while (quote === lastQuote) {
    quote = quotes[Math.floor(Math.random() * quotes.length)];
  }
  lastQuote = quote;
  return quote;
}

function setQuote() {
  var quote = getRandomQuote();
  var quoteNumber = quote.number;
  var quoteContent = quote.text;
  var quoteAuthorName = quote.author;

    quoteText.textContent = quoteNumber + ". " + quoteContent;
    quoteAuthor.textContent = "- " + quoteAuthorName;
  
}

