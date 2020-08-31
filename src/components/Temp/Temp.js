import React from 'react'
import './Temp.sass'

const Temp = ({ icon, temp }) => {
  return (
    <div className="weather_temp">
      <img src={icon} className="weather_icon" alt="Weather" />
      <span className="temp">{temp}°C</span>
    </div>
  )
}

export default Temp
