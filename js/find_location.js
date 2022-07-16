//these are api keys you can get for free If you want your own, they're free
ipinfo_token = "124667c8994bc6";
weather_token = "e3e67c3cef974039f2ccd4fb5fea822e";
var hemisphere = "None";

//if the api doesn't work, then this replaced the background with generic background and assumes the hemisphere is northern
function default_bg(){
	document.getElementById("greg").style.backgroundImage = "url('css/bg9.jpg')";
	const phase = getLunarPhaseNorthern(date);
	if(document.getElementById("tim")) document.getElementById("tim").innerHTML = ( phase );
}

fetch('https://api.ipify.org/?format=json') //get the ip address
  .then(response => response.json())
  .then(function(ip){
	  
	  let url = "https://ipinfo.io/"+ip.ip.toString()+"?token="+ipinfo_token;//get the location from ip address
	  fetch(url)
		.then(response => response.json())
		.then(function(data){
			
			let url2="https://api.openweathermap.org/data/2.5/weather?zip="+data.postal.toString()+","+data.country.toString()+"&appid="+weather_token;
			fetch(url2)
			.then(response => response.json()) //get weather data from location
			.then(function(weather_data){
				
				//choose background and modify features depending on background chosen
				this_time = "Day";
				var now = new Date().getTime() / 1000;
				if ( now>weather_data.sys.sunrise && now<weather_data.sys.sunset ){
					this_time = "Day";
					if (weather_data.weather[0].main=="Snow" || weather_data.weather[0].main=="Clear" || 
					weather_data.weather[0].main=="Smoke" || weather_data.weather[0].main=="Clouds" ){
						document.getElementById("backtotop").style.color = "black";
					}
					if (weather_data.weather[0].main=="Clouds"){
						if( document.getElementById("melogo") ){
							document.getElementById("melogo").src="logos/MeLogo3-white-outline.png";
						}
					};
				}
				else{
					this_time = "Night";
					if (weather_data.weather[0].main=="Clouds" || weather_data.weather[0].main=="Snow" ||
					weather_data.weather[0].main=="Ash" || weather_data.weather[0].main=="Clear" ||
					weather_data.weather[0].main=="Dust" || weather_data.weather[0].main=="Sand" ||
					weather_data.weather[0].main=="Smoke"
					){
						if( document.getElementById("melogo") )	document.getElementById("melogo").src="logos/MeLogo3-white-outline.png";
					};
				};
				document.getElementById("greg").style.backgroundImage = "url('js/weather_bg/"+weather_data.weather[0].main+this_time+".jpg')";
				
				//calculate distance in miles from lat and long
				var latangle = (weather_data.coord.lat-40.5);
				if (latangle<-180){
					latangle = 360+latangle;
				}
				var latlength = latangle/180.0*3958.8*Math.PI;
				var lonangle = (weather_data.coord.lon+80.0);
				if (lonangle>180){
					lonangle = 360-lonangle;
				}
				var lonlength = lonangle/180.0*3958.8*Math.PI;
				var distance = Math.sqrt( latlength*latlength+lonlength*lonlength);
				
				//fill out words
				var temp_message = "";
				if (weather_data.main.temp < 283.15){
					temp_message = "Keep warm inside while you checkout my resume."
				}else if ( weather_data.main.temp > 305.372 ){
					temp_message = "Stay cool inside while you checkout my resume."
				}else if ( weather_data.weather[0].main=="Rain" ){
					temp_message = "Stay dry inside while you checkout my resume."
				}
				if(document.getElementById("linkedin")){
					if (temp_message == ""){
						document.getElementById("linkedin").innerHTML = "Check out my resume and then offer me a job. &#129488";
					}else{
						document.getElementById("linkedin").innerHTML = temp_message;
					}
				}
				if(document.getElementById("upwork")){
					document.getElementById("upwork").innerHTML = "Just because we're "+distance.toFixed(2)+" miles apart, doesn't mean we can't work together!";
				}
				
				
				//add moon phase at bottom
				if (weather_data.coord.lat > 0.0){
					const phase = getLunarPhaseNorthern(date);
					if(document.getElementById("tim")) document.getElementById("tim").innerHTML = ( phase );
				}else{
					const phase = getLunarPhaseSouthern(date);
					if(document.getElementById("tim")) document.getElementById("tim").innerHTML = ( phase );
				}
				
				
			})
			.catch(function(error) {
			  console.log(error);
			  default_bg();
			});
			
			
			
		})
		.catch(function(error) {
		  console.log(error);
		  default_bg();
		});
	  
  })
  .catch(function(error) {
	console.log(error);
	default_bg();
  });

//adds a random cat fact to instagram
fetch('https://catfact.ninja/fact')
.then(response => response.json())
.then(function(fact){
	if(document.getElementById("insta")){
		document.getElementById("insta").innerHTML = "Fun Fact: "+fact.fact;
	}
})
.catch(function(error) {
  console.log(error);
});