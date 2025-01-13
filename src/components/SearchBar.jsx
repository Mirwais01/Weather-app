function SearchBar({ query, setQuery }) {
  return (
    <div>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        type="text"
        id="city-input"
        placeholder="Enter city name"
      />
    </div>
  );
}

export default SearchBar;
