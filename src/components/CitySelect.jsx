import React from "react";
// import citiesJson from "../cities.json";

const CitySelect = (props) => {
  return (
    <div className="weather-select-wrap">
      <select
        className="weather-select"
        value={props.value}
        onChange={props.handleChange}
      >
        <option disabled selected value="">
          地域を選択してください
        </option>
        <option value="東京都">東京</option>
        <option value="大阪府">大阪</option>
        <option value="札幌市">札幌</option>
      </select>
    </div>
  );
};

export default CitySelect;
