import WithName from "../logo2";
import Buttons from "./option_buttons";
/*import MenuIcon from "./Icons/magnifying-glass";
import SearchBox from "./search_box";*/
function Navbar(){
    return (
        
    <div className="p-4 flex justify-between " >
         <WithName/>
        <Buttons/>
</div>);


}

export default Navbar 