import React from "react";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let tempereture = Math.round(props.data.temp.max);
    return `${tempereture}°`;
  }

  function minTemperature() {
    let tempereture = Math.round(props.data.temp.min);
    return `${tempereture}°`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div>
      <div className="WeatherForecast-day">{day()}</div>
      <div className="WeatherIcon">
        <img
          src={`http://openweathermap.org/img/wn/${props.data.weather[0].icon}.png`}
          alt=""
          width="42px"
        />
      </div>
      <div className="WeatherForecast-temperature">
        <span className="WeatherForecast-temperature-max">
          {maxTemperature()}
        </span>
        <span className="WeatherForecast-temperature-min">
          {minTemperature()}
        </span>
      </div>
    </div>
  );
}
