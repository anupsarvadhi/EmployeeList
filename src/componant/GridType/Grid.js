import React from 'react'
import './grid.css'

const Grid = (props) => {
  return (
    <>
      <div className="GridBox">
        {/* <img
          className="grid-icon"
          src={require(`../Employees Image/${props.img}`)}
          alt=""
        /> */}
        <p className="employee-name">
          {props.fname}&nbsp;{props.lname}
        </p>
        <div>
          <p className="employee-role">{props.role}</p>
        </div>
      </div>
    </>
  )
}

export default Grid
