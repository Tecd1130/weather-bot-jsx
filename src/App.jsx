import React, { useState, useCallback } from "react";
import { Header, CitySelect, WeatherCard } from "./components/index";

import "./assets/css/reset.css";
import "./assets/css/style.scss";

const App = () => {
  const [weather, setWeather] = useState([]);
  const [city, setCity] = useState("");

  const handleCity = useCallback(() => {
    setCity("test");
  }, [setCity]);

  return (
    <div>
      <Header></Header>
      <CitySelect city={city}></CitySelect>
      <WeatherCard></WeatherCard>
    </div>
  );
};

export default App;
