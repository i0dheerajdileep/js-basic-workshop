const Quote = require('inspirational-quotes');
quote = Quote.getRandomQuote()

var cowsay = require("cowsay");
console.log(cowsay.say({
    text : quote
}));