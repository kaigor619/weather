import React from 'react'
import './Spinner.css'

const Spinner = () => {
  return (
    <div className="spinner_canvas">
      <div className="spinner">
        <div className="lds-css ng-scope">
          <div className="lds_spinner">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Spinner
