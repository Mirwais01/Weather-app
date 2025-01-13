import { useEffect, useState } from "react";
import SearchBar from "./SearchBar";

function App() {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  const apiKey = "a588e74b18360bd7b2d9e18a0cd9a986";

  useEffect(
    function () {
      async function getData() {
        try {
          setLoading(true);
          const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${apiKey}&units=metric`
          );
          const rData = await response.json();
          setData(rData);
          console.log(rData);
        } catch (e) {
          setError(e);
        } finally {
          setLoading(false);
        }
      }
      getData();
    },
    [query]
  );

  return (
    <div className="container">
      <div className="title-container">
        <h1>Weather App</h1>
      </div>
      <div className="main">
        <div className="search-bar">
          <SearchBar query={query} setQuery={setQuery} />
          <button id="search-btn">Search</button>
        </div>
        <div className="forecast-tabs">
          <button className="tab-btn active">Today</button>
          <button className="tab-btn">Hourly</button>
          <button className="tab-btn">10 Day</button>
          <button className="tab-btn">Weekend</button>
          <button className="tab-btn">Monthly</button>
        </div>
        <div className="forecast-display" id="forecast-display">
          {loading ? (
            <h1>Loading...</h1>
          ) : (
            <div className="forecast-item">
              Please search for a city to view the weather forecast.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
