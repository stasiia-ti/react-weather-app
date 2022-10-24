import React, { userState } from "react";
import axios from "axios";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";

export default function Weather(props) {
  const [city, setCity] = userState(props.defaultCity);   
  const [ready, setReady] = userState(false);
  const [weatherData, setWeatherData] = userState({});
  function handleResponse(response) {
    //console.log(response.data);
    setWeatherData({
      temperature: response.data.main.temp,
      himidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name
    });

    setReady(true);
  }

  function search() {
    const apiKey = "98f63ab964a6f17c8f87a4018e522a54";
    let city = "New York";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
    //search for a city
  }

  function handelCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="serch"
                placeholder="Enter a city..."
                className="form-control"
                autoFocus="on"
                onChange={handelCityChange}
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-80"
              />
            </div>
          </div>
        </form>
        <WeatherInfo data={weatherData.date}/>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}