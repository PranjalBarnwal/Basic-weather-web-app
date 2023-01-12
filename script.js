const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'be7ebdebbbmsh77ce63ec2e881c5p1e2d10jsnaf071c32ed84',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
// const weatherApi = {
//   key: "be7ebdebbbmsh77ce63ec2e881c5p1e2d10jsnaf071c32ed84",
//   baseUrl: "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=",
// };
const inputSearchValue = document.querySelector("#search");
inputSearchValue.addEventListener("keypress", (event) => {
  if (event.keyCode == 13) {console.log(inputSearchValue.value);
  getWeatherReport(inputSearchValue.value);}
});

const getWeatherReport = (city) => {
fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${inputSearchValue.value}`, options)
    .then((data) => data.json())
    .then((data)=>showWeatherReport(data))
    .catch(err=>console.error(err))
    
};

function showWeatherReport(weather) {
    
  console.log(weather);
  document.querySelector(".name").innerHTML=`${inputSearchValue.value}`;
  document.querySelector(".temp").innerHTML=`Temperature-${weather.temp}°C`;
  document.querySelector(".min-max-temp").innerHTML=`${weather.min_temp}°C(min)/${weather.max_temp}°C(max)`;
  document.querySelector(".humidity").innerHTML=`Humidity-${weather.humidity}%`;


}
