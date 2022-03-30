const button = document.querySelector("button");
const container = document.querySelector(".container");

button.addEventListener("click", async (e) => {
    try {
        const res = await fetch("https://api.adviceslip.com/advice");
        const data = await res.json();
        const quoteId = document.querySelector("#advice-id");
        quoteId.innerText = `ADVICE #${data.slip.id}`;
        const quote = document.querySelector("#advice-quote");
        quote.innerText = data.slip.advice;
    }
    catch (err) {
        console.log(err);
    }
});
