//get kosher programming joke
fetch('https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single')
.then(response => response.json())
.then(function(fact){
	if (fact.joke.includes('"')){
		document.getElementById("github").innerHTML = fact.joke;
	}else{
		document.getElementById("github").innerHTML = '"'+fact.joke+'"';
	};
})
.catch(function(error) {
  console.log(error);
});