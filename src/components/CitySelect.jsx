import React, { useState } from "react";
import citiesJson from "../cities.json";

const CitySelect = () => {
  return (
    <div className="weather-select-wrap">
      <select className="weather-select" name="" id="">
        <option value="">地域を選択してください</option>
        <option value="">墨田区</option>
        <option value="">江東区</option>
        <option value="">台東区</option>
      </select>
    </div>
  );
};

export default CitySelect;
