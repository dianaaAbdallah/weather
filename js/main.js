//Get Days 
let day;
let monthName ;
let tomorrow;
let thirdDay;
let date=new Date();
getCurrentDay()
let currentDate=date.getDay() +" "+monthName;

//current weather
let weather = {
    apiKey: "c2b35ea8cd964365934215007240301",
    fetchWeather: function (city) {
      fetch(`http://api.weatherapi.com/v1/forecast.json?key=${this.apiKey}&q=${city}&days=3`)

        .then((response) => response.json())
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function (data) {

      document.querySelector(".thirdDay").innerHTML =thirdDay;
      document.querySelector(".tomorrow").innerHTML =tomorrow;
      document.querySelector(".Today").innerHTML =day;
      document.querySelector(".currentDate").innerHTML =currentDate;
      document.querySelector(".city").innerHTML = "Weather in " + data.location.name;
      document.querySelector(".long").innerHTML = "( " + data.location.lon + " , " + data.location.lat + " )";
      document.querySelector(".icon").src =data.current.condition.icon;
      document.querySelector(".description").innerText = data.current.condition.text;
      document.querySelector(".temp").innerText =  data.current.temp_c + "°C";
      document.querySelector(".feelslike").innerText =
      "Feels like f: " +
      data.current.feelslike_f +
      "°C  ";
      document.querySelector(".daily_chance_of_rain").innerText =
     data.forecast.forecastday["0"].day.daily_chance_of_rain +"%";
     document.querySelector(".tz_id").innerText =
     data.location.tz_id ;
     ;
   //get data for tomorrow
  
   document.querySelector(".temp2").innerText =  data.forecast.forecastday["1"].day.maxtemp_c + "°C";

  document.querySelector(".icon2").src =data.forecast.forecastday["1"].day.condition.icon;
      document.querySelector(".description2").innerText =data.forecast.forecastday["1"].day.condition.text;
      document.querySelector(".min-temp2").innerText =  data.forecast.forecastday["1"].day.mintemp_c + "°C";
      document.querySelector(".daily_chance_of_rain2").innerText =
       data.forecast.forecastday["1"].day.daily_chance_of_rain +"%";
      //get data for thirty day
  
   document.querySelector(".temp3").innerText =  data.forecast.forecastday["2"].day.maxtemp_c + "°C";

   document.querySelector(".icon3").src =data.forecast.forecastday["2"].day.condition.icon;
       document.querySelector(".description3").innerText =data.forecast.forecastday["2"].day.condition.text;
       document.querySelector(".min-temp3").innerText =  data.forecast.forecastday["2"].day.mintemp_c + "°C";
       document.querySelector(".daily_chance_of_rain3").innerText =
         data.forecast.forecastday["2"].day.daily_chance_of_rain +"%";
    },
    search: function () {
      this.fetchWeather(document.querySelector(".search-bar").value);
    },
  };
  
  document.querySelector(".search button").addEventListener("click", function () {
    weather.search();
  });
 weather.fetchWeather("Cairo")
  function getCurrentDay()
  {
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    const d = new Date();
      day = weekday[d.getDay()];
if(d.getDay()<6)
{
  tomorrow=weekday[d.getDay()+1];
  thirdDay=weekday[d.getDay()+2];
}
else
{
  tomorrow=weekday[0];
  thirdDay=weekday[1];
}
monthName = month[d.getMonth()];
  }
