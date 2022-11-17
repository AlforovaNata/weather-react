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
 function date() {
   let date = new Date(props.data.dt * 1000);
   let months = [
     "Jan",
     "Feb",
     "Mar",
     "Apr",
     "May",
     "Jun",
     "Jul",
     "Aug",
     "Sep",
     "Oct",
     "Nov",
     "Dec",
   ];

   let month = months[date.getMonth()];
   let today = date.getDate();

   return `${month} ${today}`;
 }

  return (
    <div className="card">
      <div className="WeatherForecast-day">{day()}</div>
      <h6 className="card-subtitle mb-2 text-muted">{date()}</h6>
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
