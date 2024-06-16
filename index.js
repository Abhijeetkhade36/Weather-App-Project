const apikey="db3f8ddbc02778af0adce2081a50794e";
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchbtn=document.querySelector("[data-sbtn]");
const citytemp=document.querySelector("[data-temp]");
const cityname=document.querySelector("[data-cityname]");
const ipfield=document.querySelector("[data-ipfield]");
const Humidity=document.querySelector(".Humidity");
const WindSpeed=document.querySelector(".WindSpeed");
const wheathericon=document.querySelector(".wheathericon");
const incname=document.querySelector(".incname");
let data;
async function Chakewheather(city)
{
    const response=await fetch(apiurl+city+`&appid=${apikey}`);
    data=await response.json();
    console.log(data);
}

searchbtn.addEventListener('click',()=>{
Chakewheather(ipfield.value);
if(data.message=="city not found")
    {
     incname.style.display="block";
    }
    else{
        incname.style.display="none";
cityname.innerHTML=data.name;
citytemp.innerHTML=Math.round(data.main.temp)+"°C";
Humidity.innerHTML=data.main.humidity+"%";
WindSpeed.innerHTML=data.wind.speed+" km/h";
if(data.weather[0].main == "Clouds")
    {
     wheathericon.src="./weather-app-img/images/clouds.png";
    }
     if(data.weather[0].main == "Drizzle")
        {
            wheathericon.src="./weather-app-img/images/drizzle.png";
        }
     if(data.weather[0].main == "Mist")
            {
                wheathericon.src="./weather-app-img/images/mist.png";
            }
     if(data.weather[0].main == "Rain")     
        {        wheathericon.src="./weather-app-img/images/rain.png";
                }
     if(data.weather[0].main == "Snow")
                    {
                        wheathericon.src="./weather-app-img/images/snow.png";
                    }
      if(data.weather[0].main == "Clear")
                        {
                            wheathericon.src="./weather-app-img/images/clear.png";
                        }
                
    
                    }

})