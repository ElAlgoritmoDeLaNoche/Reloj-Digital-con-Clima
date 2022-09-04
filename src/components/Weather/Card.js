import React from 'react';
import Spinner from './Spinner';

const Card = ({ loadingData, showData, weather, forecast }) => {

  var today = new Date();
  var day = today.getDate();
  var month = today.getMonth() + 1;
  var year = today.getFullYear();
  var date = day + '/' + month + '/' + year;

  var url = "";
  var iconUrl = "";

  var iconUrl3 = "";
  var iconUrl6 = "";
  var iconUrl9 = "";

  var forecastDate3 = "";
  var forecastDate6 = "";
  var forecastDate9 = "";

  if (loadingData) {
    return <Spinner />;
  }

  if (showData) {
    url = "http://openweathermap.org/img/wn/";
    iconUrl = url + weather.weather[0].icon + ".png";

    iconUrl3 = url + forecast.list[1].weather[0].icon + ".png";
    iconUrl6 = url + forecast.list[2].weather[0].icon + ".png";
    iconUrl9 = url + forecast.list[3].weather[0].icon + ".png";

    forecastDate3 = forecast.list[1].dt_txt.substring(8, 10) + '/' + forecast.list[1].dt_txt.substring(5, 7) + '/' + forecast.list[1].dt_txt.substring(0, 4) + ' ' + forecast.list[1].dt_txt.substring(11, 13);
    forecastDate6 = forecast.list[2].dt_txt.substring(8, 10) + '/' + forecast.list[2].dt_txt.substring(5, 7) + '/' + forecast.list[2].dt_txt.substring(0, 4) + ' ' + forecast.list[2].dt_txt.substring(11, 13);
    forecastDate9 = forecast.list[3].dt_txt.substring(8, 10) + '/' + forecast.list[3].dt_txt.substring(5, 7) + '/' + forecast.list[3].dt_txt.substring(0, 4) + ' ' + forecast.list[3].dt_txt.substring(11, 13);
  }

  return (
    <div className="mt-2">

      {
        showData === true ? (
          <>
            <div className="contenedor-data">
              <p className="card-date">{date}</p>
              <div className="contenedor-data-prin">
                <h3 className="card-title">{weather.name}</h3>
                <h2 className="card-temp">{(weather.main.temp - 273.15).toFixed(1)}ºC</h2>
              </div>
              <p className="card-desc"><img src={iconUrl} alt="icon" />{weather.weather[0].description}</p>
            </div>
            <div className="contenedor-data">
              <div className="contenedor-data-prin">
                <h6 className="card-text">Temp Máx: <b>{(weather.main.temp_max - 273.15).toFixed(1)}ºC</b></h6>
                <h6 className="card-text">Temp Mín: <b>{(weather.main.temp_min - 273.15).toFixed(1)}ºC</b></h6>
                <h6 className="card-text">Sen Térm: <b>{(weather.main.feels_like - 273.15).toFixed(1)}ºC</b></h6>
              </div>
              <div className="contenedor-data-prin">
                <h6 className="card-text">Humedad: <b>{weather.main.humidity}%</b></h6>
                <h6 className="card-text">Vel Vien: <b>{weather.wind.speed}m/s</b></h6>
              </div>
            </div>

            <div className="contenedor-data">
              <p className="card-date">{forecastDate3}h</p>
              <div className="contenedor-data-prin">
                <p className="description"><img src={iconUrl3} alt="icon" />{forecast.list[1].weather[0].description}</p>
                <p className="temp"><b>{(forecast.list[1].main.temp - 273.15).toFixed(1)}ºC</b></p>
              </div>
              <p className="card-date">{forecastDate6}h</p>
              <div className="contenedor-data-prin">
                <p className="description"><img src={iconUrl6} alt="icon" />{forecast.list[2].weather[0].description}</p>
                <p className="temp"><b>{(forecast.list[2].main.temp - 273.15).toFixed(1)}ºC</b></p>
              </div>
              <p className="card-date">{forecastDate9}h</p>
              <div className="contenedor-data-prin">
                <p className="description"><img src={iconUrl9} alt="icon" />{forecast.list[3].weather[0].description}</p>
                <p className="temp"><b>{(forecast.list[3].main.temp - 273.15).toFixed(1)}ºC</b></p>
              </div>
            </div>

          </>
        ) : (
          <div className="text-light">
            <h2>Sin datos</h2>
          </div>
        )
      }

    </div>

  );
}

export default Card;