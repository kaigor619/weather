import React, { useState } from 'react'
import { connect } from 'react-redux'
import Action from '../../redux/actions'
import './Search.sass'

const Search = ({ term, updateWeather }) => {
  let [label, setLabel] = useState(term)

  function onChange(e) {
    setLabel(e.target.value)
  }
  function onSubmit(e) {
    e.preventDefault()
    updateWeather(label)
  }

  return (
    <form className="search input-group" onSubmit={onSubmit}>
      <input
        type="text"
        className="form-control search_input"
        placeholder="London, Kyiv, Moscow"
        value={label}
        onChange={onChange}
      />
      <div className="input-group-append">
        <button
          type="button"
          className="btn btn-outline-secondary search_btn"
          onClick={onSubmit}
        >
          Search
        </button>
      </div>
    </form>
  )
}

const mapStateToProps = ({ term }) => ({ term })

const mapDispatchToProps = {
  updateWeather: Action.updateWeatherTerm,
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)
