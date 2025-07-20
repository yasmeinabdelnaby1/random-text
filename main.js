let generateBtn = document.querySelector(".generate");
let autoBtn = document.querySelector(".auto");
let stopBtn = document.querySelector(".stop");
let quoteDiv = document.querySelector(".quote-display");
let quoteId = document.querySelector(".quote-id");
let autoStatus = document.querySelector(".outo-status");
let intervalId;

generateBtn.onclick = generateQuote
autoBtn.onclick=StartAuto
stopBtn.onclick= stop
//generateBtn.addEventListener("click" ,generateQuote );

async function getQuotes() {
const response = await fetch("quotes.json");
const data = await response.json();
return data ;   
}

async function generateQuote() {
    const quotes = await getQuotes() ;
    const quote = quotes [ Math.floor(Math.random() * quotes.length)];
    quoteDiv.innerHTML = quote.text;
    quoteId.innerHTML = quote.id;

}

function StartAuto() {
    intervalId= setInterval(generateQuote , 2000);
    autoStatus.innerHTML = "تم تفعيل الوضع التلقائي"
}

function stop() {
    clearInterval(intervalId);
    autoStatus.innerHTML = ""
}

