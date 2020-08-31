import React from 'react'
import Search from '../Search'
import Weather from '../Weather'
import Table from '../Table'
import './App.css'

function App() {
  return (
    <div className="weather_app">
      <div className="container">
        <h1 className="app_title text-center mt-5 mb-5">Weather</h1>
        <Search />
        <Weather />
        <Table />
      </div>
    </div>
  )
}

export default App
