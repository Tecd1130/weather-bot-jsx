import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import clear from "../assets/img/img_clear.png";
import cloud from "../assets/img/img_cloud.png";
import rain from "../assets/img/img_rain.png";

const WeatherCard = (props) => {
  const [weatherCards, setWeatherCards] = useState([]);
  const [weather, setWeather] = useState("");
  const [temp, setTemp] = useState(0);
  const [time, setTime] = useState("");
  const [img, setImg] = useState("");

  const isFirstRender = useRef(false);

  const API_ENDPOINT = "http://api.openweathermap.org/data/2.5/forecast";
  const apiKey = "35cd2eb58d5bb8b0bbe6015ea77d203c";

  useEffect(() => {
    isFirstRender.current = true;
  }, []);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
    } else {
      axios
        .get(API_ENDPOINT, {
          params: {
            q: props.value,
            APPID: apiKey,
          },
        })
        .then((results) => {
          const data = results.data.list;
          const temp = Math.floor(data[0].main.temp - 273);

          const week = new Array(
            "(日)",
            "(月)",
            "(火)",
            "(水)",
            "(木)",
            "(金)",
            "(土)"
          );

          const date = new Date(data[0].dt_txt);
          const time = date.getHours() + 9;
          const month = date.getMonth() + 1;
          const day =
            month +
            "/" +
            date.getDate() +
            week[date.getDay()] +
            time +
            ":00:00";

          let weather = data[0].weather[0].main;
          let img = "";
          switch (weather) {
            case "Clear":
              weather = "晴れ";
              img = clear;
              break;
            case "Clouds":
              weather = "くもり";
              img = cloud;
              break;
            case "Rain":
              weather = "雨";
              img = rain;
              break;
            default:
          }
          setWeather(weather);
          setTemp(temp);
          setTime(day);
          setImg(img);
          setWeatherCards(data);
          console.log(data);
        })
        .catch(() => {
          console.log("通信に失敗しました");
        });
    }
  }, [props.value]);

  return (
    <div className="weather-wrap">
      <h2 className="city">{props.value}</h2>
      <ul>
        {/* {weatherCards.map((item) => {
          return (
            <li>
              <p className="weather">{item.dt_txt}</p>
              <p className="temperature">{item.main.temp}℃</p>
              <time className="datetime">{item.date}</time>
            </li>
          );
        })} */}
      </ul>
      <div className="weather-box">
        <img src={img} alt="" />
        <p className="weather">{weather}</p>
      </div>
      <p className="temperature">{temp}℃</p>
      <time className="datetime">{time}</time>
    </div>
  );
};

export default WeatherCard;
