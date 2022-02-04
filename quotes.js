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

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQyote = quotes[Math.floor(Math.random() * quotes.length)];

/*
    Math.floor == 내림, Math.ceil == 올림, Math.round == 반올림
*/

quote.innerText = todaysQyote.quotes;
author.innerText = todaysQyote.author;