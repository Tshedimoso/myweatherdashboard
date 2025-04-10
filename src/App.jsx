

import About from "./about";
import Navbar from "./components/navbar";
import SearchBox from "./components/search_box";
import Introduction from "./h1";
import searchButton from "./components/btn";
import { useNavigate } from "react-router-dom";
import { useState } from "react";







function App(){
  const [city, setCity] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim() !== "") {
      navigate(`/weather?city=${encodeURIComponent(city)}`);
    }
  };
  
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
      
        
      </div>
      </div>
  
  
 

 <div className="bg-blue-200 h-100">
<About/>

 </div>

 </>);
}

export default App;
