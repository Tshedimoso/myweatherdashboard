import MenuIcon from "./Icons/magnifying-glass"

function SearchBox(){
    return (
    <div className="bg-white/60 mx-auto w-2/5 rounded-full p-4">
    <div className="input-group flex space-x-8 text-3xl text-black  ">
        <label htmlFor="location"><MenuIcon/></label>
        <input type="text" name="location" id="location" placeholder="Search Your Location " />
    </div>


    </div>
    )
}

export default SearchBox 