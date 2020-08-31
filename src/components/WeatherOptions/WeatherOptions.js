import React from 'react'
import './WeatherOptions.sass'

const WeatherOptions = ({ weather }) => {
  let { wind_speed, pressure, humidity, visibility, cloudiness } = weather

  return (
    <ul className="list-unstyled weather_options">
      <li>
        <b>Speed:</b> <span> {wind_speed}m/s NNE</span>
      </li>
      <li>
        <b>Pressure:</b> <span> {pressure}hPa</span>
      </li>
      <li>
        <b>Humidity:</b> <span> {humidity}%</span>
      </li>
      <li>
        <b>Visibility:</b> <span> {visibility} km</span>
      </li>
      <li>
        <b>Cloudiness:</b> <span> {cloudiness}%</span>
      </li>
    </ul>
  )
}

export default WeatherOptions
