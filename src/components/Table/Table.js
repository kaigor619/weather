import React from 'react'
import WeatherOptions from '../WeatherOptions'
import Action from '../../redux/actions'
import { connect } from 'react-redux'
import Temp from '../Temp'
import TableButtons from './TableButtons'
import close from './close.png'
import './Table.sass'

const CityTd = ({ weather, index, removeTableItem }) => {
  let { name, icon, temp } = weather
  return (
    <tr>
      <td>
        <div className="city">{name}</div>
      </td>
      <td>
        <Temp icon={icon} temp={temp} />
      </td>
      <td>
        <WeatherOptions weather={weather} />
      </td>
      <td>
        <div className="remove" onClick={() => removeTableItem(index)}>
          <img src={close} alt="" />
        </div>
      </td>
    </tr>
  )
}

const Table = ({ table, removeTableItem }) => {
  let tr = table.map((item, i) => (
    <CityTd
      key={item.name + i}
      weather={item}
      removeTableItem={removeTableItem}
      index={i}
    />
  ))

  return (
    <div className="weather_table">
      <h2 className="text-center mb-5">Table</h2>

      <TableButtons />

      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th className="text-center" scope="col-2">
              City
            </th>
            <th className="text-center" scope="col">
              Temperature
            </th>
            <th className="text-center" scope="col">
              Main
            </th>
            <th className="text-center" scope="col">
              Remove
            </th>
          </tr>
        </thead>
        <tbody>{tr}</tbody>
      </table>
    </div>
  )
}

const mapStateToProps = ({ table }) => ({ table })
const mapDispatchToProps = {
  removeTableItem: Action.removeTableItem,
}

export default connect(mapStateToProps, mapDispatchToProps)(Table)
