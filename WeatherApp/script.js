// // const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;




// const fun= async ()=>{
//     const city=document.getElementById("cityname").value;

//     const  mykey="8a54d0096b9e4d6560ca727b75d3087e";
//    const tempval= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${mykey}&units=metric`);
//     if(tempval.ok){
//         const result= await tempval.json();
        
        
//         document.getElementById('temp').innerHTML=`<h2>${result.name}, ${result.sys.country}</h2>
//             <p><b>Temperature: ${result.main.temp}°C<b></p>
//             <p>Weather: ${result.weather[0].description}</p>
//             <p>Humidity: ${result.main.humidity}%</p>
//             <p>Wind Speed: ${result.wind.speed} m/s</p>
            
//         `;
//         if((result.main.temp) >=10){
//             document.getElementById("temp").innerHTML+=`<img src="4814268.png" id="image" alt ="description"/>`;
//         }
//     }
//     else{
//         document.getElementById('temp').innerHTML="Sorry city is not found";
//     }

// };

// document.getElementById("cityname").addEventListener("keypress",pressing=(doyouclick)=>{
//     if(doyouclick.key=="Enter"){
//         document.getElementById('search').click();
//     }


// })

/*
{
  "coord": {
    "lon": -0.13,
    "lat": 51.51
  },
  "weather": [
    {
      "id": 801,
      "main": "Clouds",
      "description": "few clouds",
      "icon": "02d"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 280.32,
    "feels_like": 277.59,
    "temp_min": 279.25,
    "temp_max": 281.65,
    "pressure": 1012,
    "humidity": 81
  },
  "visibility": 10000,
  "wind": {
    "speed": 4.12,
    "deg": 80
  },
  "clouds": {
    "all": 21
  },
  "dt": 1618317046,
  "sys": {
    "type": 1,
    "id": 1414,
    "country": "GB",
    "sunrise": 1618290192,
    "sunset": 1618342643
  },
  "timezone": 0,
  "id": 2643743,
  "name": "London",
  "cod": 200
}
 */

const  fun=async ()=>{
      const mykey="8a54d0096b9e4d6560ca727b75d3087e";
      const city=document.getElementById("cityname").value;
      const result=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${mykey}&units=metric`);
   if (result.ok){
      var final=await result.json();// json file is changed to js object
      var temprature=final.main.temp;
      var weatherdesc=final.weather[0].description;//humidity, wind speed
      var humidity=final.main.humidity;
      var windspeed=final.wind.speed;
      document.getElementById("temp").innerHTML=`
      <p>${final.name}, ${final.sys.country}</P>
      <p>Temprature: ${temprature}°C</p>
      <p>Condition: ${weatherdesc}</p>
      <p>Humidity: ${humidity}</p>
      <p>Wind Speed: ${windspeed}</p>`;
    if(temprature>=10){
        document.getElementById("temp").innerHTML+=`<img src="4814268.png " id="image"     alt="Weather Description"/>`;
    }
    }
    else{
        document.getElementById("temp").innerHTML="City Cannot be accessed";
    } 
     
}
document.getElementById('cityname').addEventListener("keypress",(clicks)=>{
    if(clicks.key=="Enter"){
        document.getElementById('search').click();
    }
});
window.onload=()=>{
  document.querySelectorAll('.city').forEach((element)=>{
    element.classList.add("visible");
  });
};