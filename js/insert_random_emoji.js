
//java code has a different comment notation

//generate a random number in the range 0-150
let emojis = [9749,9996,9997,9999,10002,10024,127183,127378,127384,127744,127752,127756,127758,127794,127849,127918,128008,128049,128062,128126]
let emojis1 = [128128,128214,128218,128221,128225,128568,128640,128701,129496,129497,129498	]
emojis = emojis.concat(emojis1)
var randomNumber = Math.floor(Math.random() * emojis.length);
	
//put the emoji id number into the format the html page will accept (&#000000)
var thisEmoji = "&#"+emojis[randomNumber].toString();

//insert into div named tim
document.getElementById("tim").innerHTML = ( thisEmoji );
	