import React, { useState } from "react";
import { Header, CitySelect, WeatherCard } from "./components/index";

import "./assets/css/reset.css";
import "./assets/css/style.scss";

const App = () => {
  // const [weather, setWeather] = useState([]);
  // const [city, setCity] = useState("");
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
    setOpen(true);
  };

  return (
    <div>
      <Header></Header>
      <CitySelect value={value} handleChange={handleChange}></CitySelect>
      <div className="show" style={{ display: open ? "block" : "none" }}>
        <WeatherCard value={value}></WeatherCard>
      </div>
    </div>
  );
};

export default App;
