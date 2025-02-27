import React from 'react'
import "../css/doctorlogin.css"
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
const Doctorlogin = () => {
  return (
    <>
    <div id='formcoverlogin'>

    <h1 id='loginheading'>doctor login </h1>

    <Form id='loginform'> 
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>


    </div>
   
    </>
  )
}

export default Doctorlogin