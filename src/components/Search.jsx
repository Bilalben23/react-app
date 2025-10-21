function Search({ value, onSearchChange }) {
  return (
    <div className="flex justify-center flex-1 animate-fade-in-up">
      <input
        type="search"
        name="search"
        id="search"
        placeholder="Search for solutions..."
        className="w-full h-10 px-4 text-gray-700 placeholder-gray-400 transition-colors duration-500 ease-in-out bg-transparent border-b-2 rounded min-w-52 sm:w-96 border-secondary-100 outline-0 focus:border-secondary"
        onChange={(e) => onSearchChange(e.target.value)}
        value={value}
      />
    </div>
  );
}

export default Search;
