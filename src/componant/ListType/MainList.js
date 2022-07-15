import React from 'react'
import '../ListType/mainlist.css'
import { FaBars } from 'react-icons/fa'
import { FaGripHorizontal } from 'react-icons/fa'
import { FaPlus } from 'react-icons/fa'
import Table from 'react-bootstrap/Table'
import employeeDetails from '../employeelist.json'
import Grid from '../GridType/Grid'
import List from './List.js'
import { useState } from 'react'
import FormModal from './FormModal'

const MainList = () => {
  const [isShown, setHidden] = useState(true)
  const [modalShow, setModalShow] = useState(false)
  // const [employees, setemployeeDetails] = useState(employeeDetails)

  const hideList = () => setHidden(false)
  const showList = () => setHidden(true)
  const formOpen = () => setModalShow(true)

  return (
    <>
      <div className="main-body w-100 ">
        <div className="container pt-4 d-flex">
          <div className="heading col-8">
            <p className=" fs-4 fw-bold">Employees</p>
          </div>
          <div className="btn-group d-flex justify-content-evenly col-4">
            <button className="font-btn" onClick={hideList}>
              <FaGripHorizontal />
            </button>
            <button className="font-btn" onClick={showList}>
              <FaBars />
            </button>
            <button className="addEmployee" onClick={formOpen}>
              <FaPlus />
              &nbsp; Add Employees
            </button>
          </div>
        </div>
        <div className="container pt-4 ">
          {isShown && (
            <Table className="table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Employee ID</th>
                  <th>Email</th>
                  <th>Mobile</th>
                  <th>Join Date</th>
                  <th>Role</th>
                </tr>
              </thead>
              <tbody>
                {employeeDetails.map((item, i) => {
                  return (
                    <>
                      <List
                        key={i}
                        img={item.img}
                        name={item.name}
                        employeeId={item.employeeId}
                        email={item.email}
                        mobile={item.mobile}
                        joinDate={item.joinDate}
                        role={item.role}
                      />
                    </>
                  )
                })}
              </tbody>
            </Table>
          )}
          {!isShown && <Grid />}
          <FormModal show={modalShow} onHide={() => setModalShow(false)} />
        </div>
      </div>
    </>
  )
}

export default MainList
