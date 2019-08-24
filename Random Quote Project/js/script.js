/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// An Array of Quotes to display for Random Quote Generator containing objects.

var quotes = [
  {
    quote: 'Imagination is more important than knowledge.',
    source: 'Albert Einstein',
    year: 1931
    },
   {
    quote: 'You talking to me?',
    source: 'Robert DeNiro',
    citation: 'Taxi Driver',
    year:  1976
    },
   {
    quote: 'However difficult life may seen, there is always something you can do and succeed at.',
    source: 'Stephen Hawking',
    year: 1942
    },
   {
    quote: 'It is not in the stars to hold our destiny but in ourselves.',
    source: 'William Shakespeare',
    citation: 'Julius Ceasar',
    year: 1599
  },
  {
    quote: 'A martini. Shaken, not stirred.',
    source: 'Sean Connery',
    citation: 'Goldfinger',
    year: 1964
  },
];

for(property in quotes){
console.log(property, '= ', quotes[property]);
}


// Generate a a Random Quote and Return Random Quote


function getRandomQuote(array) {
  var quoteIndex = Math.floor(Math.random() * (quotes.length));
  for (var i = 0; i < array.length; i++) {
      var randomQuote = array[quoteIndex];
  }
  return randomQuote;
}



//  Print HTML markup in random quote used the if statement if certain objects were not availalbe 

function printQuote(){
  var result = getRandomQuote(quotes);
  var message = "";
  message = "<p class='quote'>" + result.quote + "</p>";
  message += "<p class='source'>" + result.source;
  if(result.citation) {
    message += "<span class='citation'>" + result.citation + "</span>";
  } else {
    message += "";
  }
  if(result.year) {
    message += "<span class='year'>" + result.year + "</span>";
  } else {
    message += "";
  }
  message += "</p>";
  document.getElementById('quote-box').innerHTML = message;
  
};
  
  printQuote();


// On click EventListener invokes PrintQuote function and displays RandomQuote 

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


