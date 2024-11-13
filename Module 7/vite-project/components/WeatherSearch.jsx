import { useState } from "react";
import { fetchWeather } from "./ApiTest"

const WeatherSearch = () => {
  const [city, setCity] = useState("");

  const handleFetch = async () => {
    try {
      const data = await fetchWeather(city);
      console.log("Weather Data:", data); // Console log the fetched data
    } catch (error) {
      console.error("Error fetching weather:", error);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name"
      />
      <button onClick={handleFetch}>Fetch Weather</button>
    </div>
  );
};

export default WeatherSearch;