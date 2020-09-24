import React, { useState, useEffect } from "react";
import axios from "axios";

const WeatherCard = (props) => {
  const [weather, setWeather] = useState("");
  const [temp, setTemp] = useState(0);
  const [time, setTime] = useState("");

  const API_ENDPOINT = "http://api.openweathermap.org/data/2.5/forecast";
  const apiKey = "35cd2eb58d5bb8b0bbe6015ea77d203c";

  useEffect(() => {
    axios
      .get(API_ENDPOINT, {
        params: {
          q: props.value,
          APPID: apiKey,
        },
      })
      .then((results) => {
        const data = results.data.list;
        const temp = Math.floor(data[6].main.temp - 273);
        const time = data[6].dt_txt;
        let weather = data[6].weather[0].main;
        switch (weather) {
          case "Clear":
            weather = "晴れ";
            break;
          case "Clouds":
            weather = "曇り";
            break;
          case "Rain":
            weather = "雨";
            break;
          default:
        }
        console.log(weather);
        setWeather(weather);
        setTemp(temp);
        setTime(time);
        console.log(data);
        console.log(temp);
      })
      .catch(() => {
        console.log("通信に失敗しました");
      });
  }, [props.value]);

  return (
    <div className="weather-wrap">
      <p className="city">{props.value}の天気</p>
      <p className="weather">{weather}</p>
      <p className="temperature">{temp}℃</p>
      <time className="datetime">{time}</time>
    </div>
  );
};

export default WeatherCard;
