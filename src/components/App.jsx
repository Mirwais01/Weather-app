import { useState } from "react";
import SearchBar from "./SearchBar";

function App() {
  const [query, setQuery] = useState("");
  // https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
  const apiKey = "a588e74b18360bd7b2d9e18a0cd9a986";

  return (
    <div className="container">
      <div className="title-container">
        <h1>Weather App</h1>
      </div>
      <div className="main">
        <div className="search-bar">
          <SearchBar />
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
          <div className="forecast-item">
            Please search for a city to view the weather forecast.
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
