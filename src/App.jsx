import Navbar from "./components/navbar";
import SearchBox from "./components/search_box";
import Introduction from "./h1";




function App(){
  return(<>
    
    <div className="h-screen bg-landing bg-cover">
      <div className="absolute inset-0 bg-black/200">
       <Navbar/>
        <div className="mt-24">
       <Introduction/>
       <div className="mt-24">
       <SearchBox/>
      </div>
      </div>
      </div>
  
  
 </div>

 <div className="bg-blue-300 h-24">


 </div>

 </>);
}

export default App;
