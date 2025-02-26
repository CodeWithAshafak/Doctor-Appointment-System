import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import BASE_URL from '../config';
import  "../css/home.css"
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const Home = () => {

  const [mydata , setMyData] = useState([])
  const loadData =  async()=>{
     let api =`${BASE_URL}/doctor/homedoctorsdisplay`
    try {
      const responce = await axios.get(api);
      console.log(responce.data);
      setMyData(responce.data)
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(()=>{loadData()},[])

  const result = mydata.map((key)=>{
    return(
      <>

<Card style={{ width: '18rem' }}>
    
    <Card.Body>
      <Card.Title>{key.name}</Card.Title>
      <Card.Text>
      specialization : {key.specialization
        }
      </Card.Text>
      <Card.Text>
       
       City: {key.city}
       
      </Card.Text>
      <Card.Text>
      Contact : {key.contact}
      </Card.Text>
      <Button variant="primary">Book Appointment</Button>
    </Card.Body>
  </Card>
      
      </>
    )
    

  })
  return (
    <>
      <Container id='main'>


        <div className="heading">
          <h3>Our Speciality Doctors</h3>
          <p>we take pride in our team of highly skilled and experienced specialists dedicated to providing top-quality healthcare. Our expert doctors specialize in various fields to ensure comprehensive care tailored to your needs.</p>
        </div>

        <div className="doctors">
         {result}
       

        </div>
        
      </Container>


    </>
  )
}

export default Home