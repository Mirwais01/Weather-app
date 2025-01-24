import { createContext, useContext, useState } from "react";

const GlobalContext = createContext();
const apiKey = "a588e74b18360bd7b2d9e18a0cd9a986";

function GlobalContextProv({ children }) {
  const [query, setQuery] = useState("");

  const getCoordinates = async (city, apiKey) => {
    const response = await fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${apiKey}`
    );
    const data = await response.json();
    if (data.length > 0) {
      return { lat: data[0].lat, lon: data[0].lon };
    } else {
      throw new Error("City not found");
    }
  };

  const getWeatherForecast = async (lat, lon, cnt, apiKey) => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${lon}&cnt=${cnt}&appid=${apiKey}`
    );
    const data = await response.json();
    return data;
  };

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const { lat, lng } = await getCoordinates(query, apiKey);
      const forecast = await getWeatherForecast(lat, lng, 10, apiKey);
      console.log(forecast);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <GlobalContext.Provider value={{ handleSubmit, query, setQuery }}>
      {children}
    </GlobalContext.Provider>
  );
}

function useGlobalContext() {
  return useContext(GlobalContext);
}

export { GlobalContextProv, useGlobalContext };
