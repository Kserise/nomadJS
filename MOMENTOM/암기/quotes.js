const quotes = [
    {
        quotes:"Don't dwell on the past.",
        author:"Kim yeongmin"
    },
    {
        quotes:"Believe in yourself.",
        author:"Song"
    },
    {
        quotes:"Seize the day.",
        author:"Jung"
    },
    {
        quotes:"You only live once.",
        author:"Dong"
    },
    {
        quotes:"Love yourself.",
        author:"Suk"
    },
    {
        quotes:"Where there is a will there is a way.",
        author:"Ryan"
    },
    {
        quotes:"Don't beat yourself up.",
        author:"Yeong"
    },
    {
        quotes:"Life is a journey.",
        author:"June"
    },
    {
        quotes:"Don't dream, Be it.",
        author:"E"
    },
    {
        quotes:"No pain, No gain.",
        author:"Min"
    }
]

const quote = document.querySelector("#quotes span:first-child");
const author = document.querySelector("#quotes span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quotes;
author.innerText = todaysQuote.author;