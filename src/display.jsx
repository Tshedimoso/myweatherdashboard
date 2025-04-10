import { useEffect, useState } from "react";
import { getWeather } from "./api/weather";

function App(){

    const [weather, setWeather] = useState(null);
  
    useEffect(() => {
      getWeather("Johannesburg").then((data) => {
        setWeather(data);
      });
    }, []);


    return(<div className="p-6">
        {weather ? (
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold">{weather.name}</h2>
            <p>Temp: {weather.main.temp}°C</p>
            <p>Weather: {weather.weather[0].description}</p>
            <p>Humidity: {weather.main.humidity}%</p>
          </div>
        ) : (
          <p>Loading weather...</p>
        )}
      </div>
    )

}

