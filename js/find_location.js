
function default_bg(){
	document.getElementById("greg").style.backgroundImage = "url('css/bg9.jpg')";
}

fetch('https://api.ipify.org/?format=json')
  .then(response => response.json())
  .then(function(ip){
	  
	  let url = "https://ipinfo.io/"+ip.ip.toString()+"?token="+secrets.IPINFO_TOKEN;
	  fetch(url)
		.then(response => response.json())
		.then(function(data){
			
			let url2="https://api.openweathermap.org/data/2.5/weather?zip="+data.postal.toString()+","+data.country.toString()+"&appid="+weather_token;
			fetch(url2)
			.then(response => response.json())
			.then(function(weather_data){
				document.getElementById("greg").style.backgroundImage = "url('js/weather_bg/"+weather_data.weather[0].main.toString()+".jpg')";
				
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


document.getElementById("intro").innerHTML = "That's me. This is what I'm doing right now.";
document.getElementById("github").innerHTML = "See my contributions to collaborations as well as individual projects.";
document.getElementById("upwork").innerHTML = "Hire me as a freelancer.";
document.getElementById("linkedin").innerHTML = "Look at my resume.";
document.getElementById("insta").innerHTML = "Look at pictures of my cat Rockstar.";
console.log("drugs");

//get use ipinfo
//get weather based off of zip code
//modify css 
