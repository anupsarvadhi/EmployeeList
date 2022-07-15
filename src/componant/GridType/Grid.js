import React from 'react'
import './grid.css'
import employeeDetails from '../employeelist.json'

const Grid = () => {
  return (
    <>
      <div className="container grid-div p-0 d-grid">
        {employeeDetails.map((item, i) => {
          return (
            <div className="GridBox">
              <img
                className="grid-icon"
                src={require(`../Employees Image/${item.img}`)}
                alt=""
              />
              <p className="employee-name">{item.name}</p>
              <div>
                <p className="employee-role">{item.role}</p>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Grid
