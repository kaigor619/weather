export default class WeatherService {
  static _apiKey = 'e183742f468c7c6c9d2a0eb48e5c679f'
  static _apiBase = 'http://api.openweathermap.org/data/2.5/weather'
  static _apiImg = 'https://openweathermap.org/img/wn/'

  static async getWeatherByCity(city) {
    let res = await fetch(
      `${WeatherService._apiBase}?q=${city}&appid=${WeatherService._apiKey}`,
    )

    if (!res.ok) {
      throw new Error(`Could not fetch, received ${res.status}`)
    }
    let weather = await res.json()

    return WeatherService.transformWeather(weather)
  }

  static getImageIcon(icon) {
    return `https://openweathermap.org/img/wn/${icon}.png`
  }
  static getCelcius(kel) {
    return Number(kel - 273.15).toFixed(1)
  }
  static getKm(visibility) {
    return Number(visibility / 1000).toFixed(1)
  }

  static transformWeather({ name, weather, main, wind, visibility, clouds }) {
    return {
      name,
      icon: WeatherService.getImageIcon(weather[0].icon),
      temp: WeatherService.getCelcius(main.temp),
      feels_like: WeatherService.getCelcius(main.feels_like),
      description: weather.description,
      wind_speed: wind.speed,
      pressure: main.pressure,
      humidity: main.humidity,
      visibility: WeatherService.getKm(visibility),
      cloudiness: clouds.all,
    }
  }
}
