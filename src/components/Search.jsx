function Search({ value, onSearchChange }) {
  return (
    <div className="flex justify-center animate-fade-in-up">
      <input
        type="search"
        name="search"
        id="search"
        placeholder="Search for solutions ..."
        className="min-w-48 w-96 h-10 rounded border-b-2 border-secondary100 
        bg-transparent outline-0 px-4 text-gray-700 placeholder-gray-400
        transition-all duration-500 ease-in-out 
        focus:border-secondary"
        onChange={(e) => onSearchChange(e.target.value)}
        value={value}  
      />
    </div>
  );
}

export default Search;
