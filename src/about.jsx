import Bulb from "./components/Icons/lightbulb"
import Paragraph from "./paragraph"

function About(){
    return(
        <div className="p-4 flex space-x-0 ">
<Bulb/>
<span className="text-black text-2xl mt-5  font-bold ">Accurate Forecast</span>
<Paragraph/>
        </div>
    )
}

export default About