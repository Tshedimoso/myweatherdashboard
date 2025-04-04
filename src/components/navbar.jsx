import Logo from "./assets/logo";
import Buttons from "./option_buttons";
/*import MenuIcon from "./Icons/magnifying-glass";
import SearchBox from "./search_box";*/
function Navbar(){
    return (
        
    <div className="p-4 flex justify-between " >
         <Logo/>
        <span className="text-white text-4xl font-bold ">Weather</span>
        <Buttons/>
</div>);


}

export default Navbar 