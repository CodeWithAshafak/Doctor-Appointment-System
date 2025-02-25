import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "../css/topmenu.css"
import { Link } from 'react-router-dom';
import { useState } from 'react';

import Modal from 'react-bootstrap/Modal';



const TopMenu = () => {
  const [input, setInput] = useState({})

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleInput = (e)=>{
    const name = e.target.name;
    const value = e.target.value;
    setInput(Values=>({...Values,[name]:value }))
    console.log(input);
  }
  const handleSubmit  = (e)=>{
    e.preventDefault()
  }
  return (
    <>
     <Navbar expand="lg" className="bg-info" >
      <Container fluid>
        <Navbar.Brand as={Link} to='home'>Online E-Appointment</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link as={Link} to='home' >Home</Nav.Link>
           

            


            
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>

        <Nav className="ms-md-4 ms-lg-auto">
        <Nav.Link id='heading' onClick={handleShow}>Doctor Registration </Nav.Link>
    


        </Nav>


        </Navbar.Collapse>
      </Container>
    </Navbar>





    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Doctor Registration Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          
        <Form>

      <Form.Group className="mb-3" controlId="DoctorName">
        <Form.Label>Enter Doctor Name</Form.Label>
        <Form.Control type="text"  name='name' onChange={handleInput} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="contact">
        <Form.Label>Enter Contact </Form.Label>
        <Form.Control type="Number"   name='contact' onChange={handleInput} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="email">
        <Form.Label>Enter Email </Form.Label>
        <Form.Control type="Email"   name='email' onChange={handleInput} />
      </Form.Group>


      <Form.Group className="mb-3" controlId="specailtiy">
        <Form.Label>Enter Specialization</Form.Label>
        <Form.Select aria-label="Default select example"   name='specialization' onChange={handleInput}>
    
      <option value="Cardiologist">Cardiologist</option>
      <option value="ENT">ENT</option>
      <option value="Dentist">Dentist</option>
      <option value="Dermatologist">Dermatologist</option>
      <option value="Gyanocologist3">Gyanocologist</option>
      <option value="Dentist">Dentist</option>
    </Form.Select>
      </Form.Group>


      <Form.Group className="mb-3" controlId="City">
        <Form.Label>Enter City</Form.Label>


        <Form.Select aria-label="Default select example"  name='city' onChange={handleInput}  >
      
      <option value="Bhopal">Bhopal</option>
      <option value="Nanded">Nanded</option>
      <option value="Hydrabad">Hydrabad</option>
      <option value="Pune">Pune</option>
      <option value="Mumbai">Mumbai</option>
      <option value="Aurangabad">Aurangabad</option>
      <option value="Parbhani">Parbhani</option>
    </Form.Select>
       
      </Form.Group>


      <Form.Group className="mb-3" controlId="address">
        <Form.Label>Enter Address</Form.Label>
        <Form.Control type="text"  name='address' onChange={handleInput}  />
      </Form.Group>


      

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password"  />
      </Form.Group>
      
      
    </Form>
        
        
        </Modal.Body>
        <Modal.Footer>
         
          <Button variant="primary" onClick={handleSubmit}>
            Register
          </Button>
        </Modal.Footer>
      </Modal>
    
    </>
  )
}

export default TopMenu