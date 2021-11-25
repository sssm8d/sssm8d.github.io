var t = 500;

function default_bg(){
	document.getElementById("greg").style.backgroundImage = "url('bg9.jpg')";
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
				setTimeout(function(){document.getElementById("greg").style.backgroundImage = "url('js/weather_bg/"+weather_data.weather[0].main.toString()+".jpg')";}, t);
				t=t+500;
				
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


setTimeout(function(){document.getElementById("intro").innerHTML = "That's me. This is what I'm doing right now.";}, t);
t=t+500;
setTimeout(function(){document.getElementById("github").innerHTML = "See my contributions to collaborations as well as individual projects.";}, t);
t=t+500;
setTimeout(function(){document.getElementById("upwork").innerHTML = "Hire me as a freelancer.";}, t);
t=t+500;
setTimeout(function(){document.getElementById("linkedin").innerHTML = "Look at my resume.";}, t);
t=t+500;
setTimeout(function(){document.getElementById("insta").innerHTML = "Look at pictures of my cat Rockstar.";}, t);
t=t+500;

//get use ipinfo
//get weather based off of zip code
//modify css 