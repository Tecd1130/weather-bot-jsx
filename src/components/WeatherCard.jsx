import React, { useState, useEffect } from "react";
import axios from "axios";

const WeatherCard = () => {
  // const [weather, setWeather] = useState([]);
  const [temp, setTemp] = useState(0);
  const [time, setTime] = useState("");

  const API_ENDPOINT = "http://api.openweathermap.org/data/2.5/forecast";
  const city = "Tokyo";
  const apiKey = "35cd2eb58d5bb8b0bbe6015ea77d203c";

  useEffect(() => {
    axios
      .get(API_ENDPOINT, {
        params: {
          q: city,
          APPID: apiKey,
        },
      })
      .then((results) => {
        const data = results.data.list;
        const temp = Math.floor(data[6].main.temp - 273);
        const time = data[6].dt_txt;
        setTemp(temp);
        setTime(time);
        console.log(data);
        console.log(temp);
      })
      .catch(() => {
        console.log("通信に失敗しました");
      });
  }, []);

  return (
    <div className="weather-wrap">
      <p className="weather">{city}</p>
      <p className="temperature">{temp}℃</p>
      <time className="datetime">{time}</time>
    </div>
  );
};

export default WeatherCard;
