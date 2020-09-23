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
        <option value="">地域を選択してください</option>
        <option value="墨田区">墨田区</option>
        <option value="江東区">江東区</option>
        <option value="台東区">台東区</option>
      </select>
    </div>
  );
};

export default CitySelect;
