const quotes = document.getElementById("quotes");
const author = document.getElementById("author");
const newQuotes = document.getElementById("newQuotes");
let realData = "";
const getNewQuotes = () => {
  let Rnum = Math.floor(Math.random() * 10);

   quotes.innerText = `${realData[Rnum].text}`;
   author.innerText = `${realData[Rnum].author}`;
};
const getQuotes = async () => {
  const api = "./quotes.json";
  try {
    let data = await fetch(api);
    realData = await data.json();
    getNewQuotes();
    // console.log(realData);
  } catch (error) {}
};
newQuotes.addEventListener('click',getNewQuotes)
getQuotes();