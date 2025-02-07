// const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;




const fun= async ()=>{
    const city=document.getElementById("cityname").value;

    const  mykey="8a54d0096b9e4d6560ca727b75d3087e";
   const tempval= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${mykey}&units=metric`);
    if(tempval.ok){
        const result= await tempval.json();
        
        
        document.getElementById('temp').innerHTML=`<h2>${result.name}, ${result.sys.country}</h2>
            <p><b>Temperature: ${result.main.temp}°C<b></p>
            <p>Weather: ${result.weather[0].description}</p>
            <p>Humidity: ${result.main.humidity}%</p>
            <p>Wind Speed: ${result.wind.speed} m/s</p>
            
        `;
        if((result.main.temp) >=10){
            document.getElementById("temp").innerHTML+=`<img src="4814268.png" id="image" alt ="description"/>`;
        }
    }
    else{
        document.getElementById('temp').innerHTML="Sorry city is not found";
    }

};

document.getElementById("cityname").addEventListener("keypress",pressing=(doyouclick)=>{
    if(doyouclick.key=="Enter"){
        document.getElementById('search').click();
    }

})
