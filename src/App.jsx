

import About from "./about";
import Navbar from "./components/navbar";
import SearchBox from "./components/search_box";
import Introduction from "./h1";
import { useEffect, useState } from "react";
import { getWeather } from "./api/weather";







function App(){

  const [weather, setWeather] = useState(null);

  useEffect(() => {
    getWeather("Johannesburg").then((data) => {
      setWeather(data);
    });
    
  }, []);

  return(<>
    
    <div className="h-screen bg-landing bg-cover">
      <div className="absolute inset-0 bg-black/200">
       <Navbar/>
        <div className="mt-24">
       <Introduction/>
       <div className=" flex mt-24">
       <SearchBox/>
       <searchButton/>
      </div>
      </div>
      <div className="p-6">
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
      </div>
  
  
 </div>

 <div className="bg-blue-200 h-100">
<About/>

 </div>

 </>);
}

export default App;
