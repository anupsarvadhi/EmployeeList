import React from 'react'
import '../ListType/mainlist.css'

const list = (props) => {
  return (
    <>
      <tr>
        <td style={{ color: '#FF7F50', fontWeight: '600' }}>
          {
            <img
              className="img-icon "
              src={require(`../Employees Image/${props.img}`)}
              alt=""
            />
          }
          &nbsp;&nbsp;
          {props.name}
        </td>
        <td>{props.employeeId}</td>
        <td>{props.email}</td>
        <td>{props.mobile}</td>
        <td>{props.joinDate}</td>
        <td>{props.role}</td>
      </tr>
    </>
  )
}

export default list
