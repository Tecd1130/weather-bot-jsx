import React, { useState } from "react";
import axios from "axios";

const PushSlack = (props) => {
  const [weather, setWeather] = useState("");
  const [temp, setTemp] = useState(0);

  const API_ENDPOINT = "http://api.openweathermap.org/data/2.5/weather";
  const apiKey = "35cd2eb58d5bb8b0bbe6015ea77d203c";

  const onClick = () => {
    axios
      .get(API_ENDPOINT, {
        params: {
          q: props.value,
          APPID: apiKey,
        },
      })
      .then((results) => {
        const data = results.data;
        const temp = Math.floor(data.main.temp - 273);

        let weather = data.weather[0].main;
        switch (weather) {
          case "Clear":
            weather = "晴れ";
            break;
          case "Clouds":
            weather = "くもり";
            break;
          case "Rain":
            weather = "雨";
            break;
          default:
        }
        setWeather(weather);
        setTemp(temp);
        console.log(weather);
        console.log(temp);

        const payload = {
          text:
            props.value +
            "の天気\n" +
            "\n" +
            "天気：" +
            weather +
            "\n" +
            "気温：" +
            temp +
            "℃\n",
        };

        const url =
          "https://hooks.slack.com/services/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";

        fetch(url, {
          method: "POST",
          body: JSON.stringify(payload),
        }).then(() => {
          alert("送信が完了しました");
        });
      })
      .catch(() => {
        console.log("通信に失敗しました");
      });
  };

  return (
    <button className="push-btn" onClick={onClick}>
      現在の天気をSlackに送信します
    </button>
  );
};

export default PushSlack;
