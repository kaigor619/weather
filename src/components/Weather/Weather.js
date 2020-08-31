import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import WeatherOptions from '../WeatherOptions'
import Spinner from '../Spinner'
import Temp from '../Temp'
import Error from '../Error'
import Action from '../../redux/actions'
import date from 'date-and-time'
import './Weather.sass'

const Weather = ({ weather, uploadWeather, addToTable, error }) => {
  useEffect(() => {
    uploadWeather()
  }, [])

  function clickAdd() {
    addToTable([weather])
  }

  if (error) {
    return (
      <div className="weather">
        <Error />
      </div>
    )
  }

  if (!weather || weather === {})
    return (
      <div className="weather">
        <Spinner />
      </div>
    )

  let myDate = date.format(new Date(), 'HH:mm:ss ddd, MMM DD YYYY ')

  return (
    <div className="weather">
      <div className="row">
        <div className="col-4">
          <div className="location">
            <h4>
              <span className="location_icon">
                <i className="fa fa-map-marker" aria-hidden="true"></i>
              </span>
              {weather.name}
            </h4>
            <p className="text-secondary">{myDate}</p>
          </div>
          <div className="mt-3">
            <Temp icon={weather.icon} temp={weather.temp} />
          </div>
          <p className="mt-3">
            Feels like {weather.feels_like}°C. {weather.description}
          </p>

          <button className="btn btn-primary" onClick={clickAdd}>
            Add to table
          </button>
        </div>
        <div className="col-auto">
          <WeatherOptions weather={weather} />
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = ({ weather, error }) => ({ weather, error })

const mapDispatchToProps = {
  uploadWeather: Action.updateWeatherTerm,
  addToTable: Action.addToTable,
}

export default connect(mapStateToProps, mapDispatchToProps)(Weather)
