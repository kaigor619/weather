import React from 'react'
import Action from '../../redux/actions'
import { connect } from 'react-redux'

const TableButtons = ({ table, changeTable }) => {
  function saveTable() {
    localStorage.setItem('table', JSON.stringify(table))
  }
  function removeTable() {
    localStorage.removeItem('table')
  }
  function uploadTable() {
    let localTable = localStorage.getItem('table')
    if (localTable) {
      changeTable(JSON.parse(localTable))
    }
  }
  return (
    <div className="btn-group mb-4" role="group">
      <button onClick={saveTable} type="button" className="btn btn-primary">
        Save
      </button>
      <button onClick={uploadTable} type="button" className="btn btn-primary">
        Unload
      </button>
      <button onClick={removeTable} type="button" className="btn btn-primary">
        Remove
      </button>
    </div>
  )
}

const mapStateToProps = ({ table }) => ({ table })
const mapDispatchToProps = {
  changeTable: Action.changeTable,
}

export default connect(mapStateToProps, mapDispatchToProps)(TableButtons)
