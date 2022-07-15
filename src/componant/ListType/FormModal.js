import React from 'react'
// import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import './mainlist.css'

const FormModal = (props) => {
  return (
    <div>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header className="border-bottom-0" closeButton></Modal.Header>
        <Modal.Body>
          <h3 className="text-center">Employees Details</h3>
          <Form className="p-3">
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>
                  First Name<sup>*</sup>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter First Name"
                  required
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Last Name"
                  required
                />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>
                  UserName<sup>*</sup>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter UserName"
                  required
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>
                  Email<sup>*</sup>
                </Form.Label>
                <Form.Control type="Email" placeholder="Enter Email" required />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>
                  Employee ID<sup>*</sup>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Employee ID"
                  required
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>
                  Joining Date<sup>*</sup>
                </Form.Label>
                <Form.Control type="date" required />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Phone</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter Phone Number"
                  required
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Company</Form.Label>
                <Form.Select required>
                  <option selected>Choose...</option>
                  <option>Global Technologies</option>
                  <option>Delta Infotect</option>
                  <option>International Software Inc</option>
                </Form.Select>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>
                  Department<sup>*</sup>
                </Form.Label>
                <Form.Select defaultValue="Choose..." required>
                  <option>Web Devlopment</option>
                  <option>IT Menagement</option>
                  <option>Marketing</option>
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>
                  Designation<sup>*</sup>
                </Form.Label>
                <Form.Select className="ae" defaultValue="Choose..." required>
                  <option className="ae2">Web Designer</option>
                  <option>Web Developer</option>
                  <option>Android Developer</option>
                </Form.Select>
              </Form.Group>
            </Row>
            <div className="d-flex justify-content-center py-3">
              <Button
                variant="primary"
                type="submit"
                className="px-3 bg-warning border-0"
              >
                Add Employee
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default FormModal
