import MenuIcon from "./Icons/magnifying-glass"

function SearchBox(){
    return (
        
    <div className="bg-white/60 mx-auto w-2/5 rounded-full p-4">
    <div className="input-group flex space-x-8 text-3xl text-black  ">
    <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
        
    </div>


    </div>
    
    )
}

export default SearchBox 