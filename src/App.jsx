import React, { useState } from "react";
import { Header, CitySelect, WeatherCard } from "./components/index";

import "./assets/css/reset.css";
import "./assets/css/style.scss";

const App = () => {
  // const [weather, setWeather] = useState([]);
  // const [city, setCity] = useState("");
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
    console.log(value);
  };

  return (
    <div>
      <Header></Header>
      <CitySelect value={value} handleChange={handleChange}></CitySelect>
      <WeatherCard value={value}></WeatherCard>
    </div>
  );
};

export default App;
