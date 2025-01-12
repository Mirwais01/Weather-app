function App() {
  return (
    <div className="container">
      <div className="title-container">
        <h1>Weather App</h1>
      </div>
      <div className="main">
        <div className="search-bar">
          <input type="text" id="city-input" placeholder="Enter city name" />
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
