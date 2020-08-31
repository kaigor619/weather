import React from 'react'

const Error = () => {
  let style = {
    marginTop: '100px',
    marginBottom: '100px',
  }
  return (
    <div className="error text-center" style={style}>
      <h3 className="text-danger">Something was wrong</h3>
    </div>
  )
}

export default Error
