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
        quote: "Timeline? This is no time to talk about time! We don't have the time!",
        author: "Deanna Troi, Star Trek First Contact"
    },

    {
        quote: "Space is big. You just won't believe how vastly, hugely, mind-bogglingly big it is.",
        author: "Douglas Addams, Hitchhikers Guide to the Galaxy"
    },
    {
        quote: "Ya know, you blow up one sun, and suddenly everyone expects you to walk on water.",
        author: "Sam Carter, Stargate SG1"
    },
    {
        quote: "We're Starfleet officers. Weird is part of the job.",
        author: "Capt. Kathryn Janeway, Star Trek Voyager"
    },
    {
        quote: "",
        author: ""
    },




    


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
