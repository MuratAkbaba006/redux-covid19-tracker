import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCovidDataAsync } from "../redux/CovidSlice/CovidSlice";
const ChooseArea = () => {
  const [value, setValue] = useState("");
  const status = useSelector((state) => state.covid.status);
  const dispatch = useDispatch();
  const handleChange = (value) => {
    setValue(value);
    dispatch(fetchCovidDataAsync(value));
  };

  if (status === "loading") {
    return false;
  }
  return (
    <div className="choose">
      <div className="choose-title">Choose a Spesific Country</div>
      <select
        className="choose-select"
        value={value}
        onChange={(e) => handleChange(e.target.value)}
      >
        <option value="All">All World</option>
        <option value="TR">TURKEY</option>
        <option value="USA">USA</option>
        <option value="DE">GERMANY</option>
        <option value="GB">ENGLAND</option>
      </select>
    </div>
  );
};

export default ChooseArea;
