import React, { useEffect, useState } from "react";
import "./FrontPage.css"


 function FrontPage(){
    const [landingPage,setLandingPage]=useState();



    useEffect(()=>{

        const apiKey = "f385d60a75ee40637e94abcbb53639ea";
        const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

        const searchBox = document.querySelector(".search input");
        const searchBtn = document.querySelector(".search button");
        const wetherIcon = document.querySelector(".wether-icon");

        async function checkWeather(city){
            const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

            if(response.status == 404){
                document.querySelector(".error").style.display = "block";
                document.querySelector(".wether").style.display = "none";
            }else{

                var data = await response.json();

                document.querySelector(".city").innerHTML = data.name;
                document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
                document.querySelector(".huminity").innerHTML = data.main.humidity + "%";
                document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

                if(data.weather[0].main == "Clouds"){
                    wetherIcon.src = "data:image/png;base64,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"
                }
                else if(data.weather[0].main == "Clear"){
                    wetherIcon.src = "data:image/png;base64,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"
                }
                else if(data.weather[0].main == "Rain"){
                    wetherIcon.src = "https://icon-library.com/images/raining-icon/raining-icon-1.jpg"
                }
                else if(data.weather[0].main == "Mist"){
                    wetherIcon.src = "https://cdn1.iconfinder.com/data/icons/weather-forecast-meteorology-color-1/128/weather-foggy-sunny-512.png"
                }
                else if(data.weather[0].main == "Drizzle"){
                    wetherIcon.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_YosMBWm0Xl3dect-eQOlhniGN2aBQeqDrQ&usqp=CAU"
                }

                document.querySelector(".wether").style.display = "block";
                document.querySelector(".error").style.display = "none";
            }

        }

        searchBtn.addEventListener("click", ()=>{
            checkWeather(searchBox.value);

        })

    });
        
         

    return(
        
        <div className="card">
            <div className="search">
                <input type="text" placeholder="Enter the city name" spellcheck="false" />
                <button><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                         </svg>
                </button>
            </div>
            <div class="error">
                <p>Invalid city name</p>
            </div>
            <div className="wether">
                <div>
                        <img src="https://icon-library.com/images/raining-icon/raining-icon-1.jpg" class="wether-icon"/>
                </div>
                <h1 class="temp">22°c</h1>
                <h2 class="city">New York</h2>
                <div className="details">
                    <div className="col">
                        <button class="h-btn">
                        <img src="https://cdn-icons-png.flaticon.com/512/9342/9342439.png"/>
                        </button>
                        <div>
                            <p class="huminity">50%</p>
                            <p>Humidity</p>
                        </div>
                    </div>
                    <div class="col">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHbxAB-zkajFJUeK--eCyqyL9_zbMHIKQ9uWii5-O8LLAfca2HWaS3iY2LuNTy-T3R4kM&usqp=CAU" class="wind-img"/>
                    <div>
                        <p class="wind">15 km/h</p>
                        <p>Wind Speed</p>
                    </div>
                </div>
                </div>
            </div>
        </div>

    )
}
export default FrontPage