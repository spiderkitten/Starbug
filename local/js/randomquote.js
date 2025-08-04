const generateQuote = function() {
    const quotes = [
    {
        quote1: "Give a man a fire and he's warm for a day, but set fire to him and he's warm for the rest of his life.",
        quote2: "",
        author: "Terry Pratchett, Jingo"
    },
    {
        quote1: "And crawling on the planet's face, some insects, called the human race... lost in time... and lost in space... and meaning.",
        quote2: "",
        author: "The Criminologiest, RHPS"
    },
    {
        quote1: "Timeline? This is no time to talk about time! We don't have the time!",
        quote2: "",
        author: "Deanna Troi, Star Trek First Contact"
    },

    {
        quote1: "Space is big. You just won't believe how vastly, hugely, mind-bogglingly big it is.",
        quote2: "",
        author: "Douglas Addams, Hitchhiker's Guide to the Galaxy"
    },
    {
        quote1: "Ya know, you blow up one sun, and suddenly everyone expects you to walk on water.",
        quote2: "",
        author: "Sam Carter, Stargate SG1"
    },
    {
        quote1: "We're Starfleet officers. Weird is part of the job.",
        quote2: "",
        author: "Capt. Kathryn Janeway, Star Trek Voyager"
    },
    {
        quote1: "Rude alert! Rude alert! An electrical fire has knocked out my voice recognition unicycle! Many wurlitzers are missing from my database. Abandon shop! This is not a daffodil. Repeat: this is not a daffodil.",
        quote2: "",
        author: "Holly, Red Dwarf"
    },
    {
        quote1: "Call it extreme if you like, but I propose we hit it hard and hit it fast with a major - and I mean major - leaflet campaign",
        quote2: "",
        author: "Rimmer, Red Dwarf"
    },
    {
        quote1: "As the days go by, we face the increasing inevitability that we are alone in a godless, uninhabited, hostile and meaningless universe. Still, you've got to laugh, haven't you?",
        quote2: "",
        author: "Holly, Red Dwarf"
    },
    {
        quote1: "Hammond is insisting SG-1 needs a socio-political nerd to offset our overwhelming coolness.",
        quote2: "",
        author: "Jack O'Neill, Stargate SG1"
    }


    

/* template
,
    {
        quote1: "",
        quote2: "",
        author: ""
    }
*/


];

    let arrayIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quotes1").innerHTML = quotes[arrayIndex].quote1;
    document.getElementById("quotes2").innerHTML = quotes[arrayIndex].quote2;
    document.getElementById("author").innerHTML = quotes[arrayIndex].author;

    
}
window.onload = function() {
    generateQuote();
    document.getElementById("generate").addEventListener('click', generateQuote);
}
