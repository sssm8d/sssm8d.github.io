//java code has a different comment notation

//list of chosen emojis
let emojis2 = [128212,128213,128214,128215,128216,128217,127183,128218,128220,127744,127752,127756,127758,128081]
//let emojis1 = [128128,128214,128218,128221,128225,128568,128640,128701,129496,129497,129498	]
//emojis = emojis.concat(emojis1)

//get random number for list
var randomNumber2 = Math.floor(Math.random() * emojis2.length);
	
//put the emoji id number into the format the html page will accept (&#000000)
var thisEmoji2 = "&#"+emojis2[randomNumber2].toString()+"; ";

//insert into div named jeff
document.getElementById("jeff").innerHTML = ( thisEmoji2 );