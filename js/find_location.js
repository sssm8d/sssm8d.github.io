//these are api keys you can get for free If you want your own, they're free
ipinfo_token = "124667c8994bc6";
weather_token = "e3e67c3cef974039f2ccd4fb5fea822e";
var hemisphere = "None";

function default_bg(){
	document.getElementById("greg").style.backgroundImage = "url('css/bg9.jpg')";
	
	document.getElementById("intro").innerHTML = "That's me. This is what I'm doing right now.";
	document.getElementById("github").innerHTML = "See my contributions to collaborations as well as individual projects.";
	// document.getElementById("upwork").innerHTML = "Hire me as a freelancer.";
	document.getElementById("linkedin").innerHTML = "Look at my resume.";
	document.getElementById("insta").innerHTML = "Look at pictures of my cat Rockstar.";
	
	//generate a random number
	let emojis = [9749,9996,9997,9999,10002,10024,127183,127378,127384,127744,127752,127756,127758,127794,127849,127918,128008,128049,128062,128126]
	let emojis1 = [128128,128214,128218,128221,128225,128568,128640,128701,129496,129497,129498	]
	emojis = emojis.concat(emojis1)
	var randomNumber = Math.floor(Math.random() * emojis.length);
		
	//put the emoji id number into the format the html page will accept (&#000000)
	const phase = getLunarPhaseNorthern(date);
	document.getElementById("tim").innerHTML = ( phase );
}

fetch('https://api.ipify.org/?format=json')
  .then(response => response.json())
  .then(function(ip){
	  
	  let url = "https://ipinfo.io/"+ip.ip.toString()+"?token="+ipinfo_token;
	  fetch(url)
		.then(response => response.json())
		.then(function(data){
			
			let url2="https://api.openweathermap.org/data/2.5/weather?zip="+data.postal.toString()+","+data.country.toString()+"&appid="+weather_token;
			fetch(url2)
			.then(response => response.json())
			.then(function(weather_data){
				this_time = "Day";
				
				var now = new Date().getTime() / 1000;
				if ( now>weather_data.sys.sunrise && now<weather_data.sys.sunset ){
					this_time = "Day";
					if (weather_data.weather[0].main=="Snow" || weather_data.weather[0].main=="Clear" || 
					weather_data.weather[0].main=="Smoke" || weather_data.weather[0].main=="Clouds"){
						document.getElementById("backtotop").style.color = "black";
					}
				}
				else{
					this_time = "Night";
				}
				document.getElementById("greg").style.backgroundImage = "url('js/weather_bg/"+weather_data.weather[0].main+this_time+".jpg')";
				
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
				
				var temp_message = "";
				if (weather_data.main.temp < 283.15){
					temp_message = "Keep warm inside while you checkout my resume."
				}else if ( weather_data.main.temp > 305.372 ){
					temp_message = "Stay cool inside while you checkout my resume."
				}
				
				
				//fill out words
				document.getElementById("intro").innerHTML = "That's me. This is what I'm doing right now.";
				document.getElementById("github").innerHTML = "See my contributions to collaborations as well as individual projects.";
				if (temp_message == ""){
					document.getElementById("linkedin").innerHTML = "Look at my resume.";
				}else{
					document.getElementById("linkedin").innerHTML = temp_message;
				}
				document.getElementById("upwork").innerHTML = "Just because we're "+distance.toFixed(2)+" miles apart, doesn't mean we can't work together!";
				document.getElementById("insta").innerHTML = "Look at pictures of my cat Rockstar.";
				
				//add mon phase at bottom
				if (weather_data.coord.lat > 0.0){
					const phase = getLunarPhaseNorthern(date);
					document.getElementById("tim").innerHTML = ( phase );
				}else{
					const phase = getLunarPhaseSouthern(date);
					document.getElementById("tim").innerHTML = ( phase );
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

//get use ipinfo
//get weather based off of zip code
//modify css 
