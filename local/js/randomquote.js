const generateQuote = function() {
    const quotes = [
    {
        quote: "Give a man a fire and he's warm for a day, but set fire to him and he's warm for the rest of his life.",
        author: "Terry Pratchett, Jingo"
    },
    {
        quote: "And crawling on the planet's face, some insects, called the human race... lost in time... and lost in space... and meaning.",
        author: "The Criminologiest, RHPS"
    },
    {
        quote: "A mental mind fuck can be nice.",
        author: "Dr Frank N Furter, RHPS"
    },
    {
        quote: "And crawling on the planet's face, some insects, called the human race... lost in time... and lost in space... and meaning.",
        author: "The Criminologiest, RHPS"
    }


/* template
,
    {
        quote: "",
        author: ""
    }
*/


];

    let arrayIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quotes").innerHTML = quotes[arrayIndex].quote;
    document.getElementById("author").innerHTML = quotes[arrayIndex].author;

}
window.onload = function() {
    generateQuote();
    document.getElementById("generate").addEventListener('click', generateQuote);
}
