import React, { useState } from 'react'
import { Row ,Col} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import './SpeedCalculator.css'

function SpeedCalculator() {
    const [distance,setDistance]=useState(0)
    const[Time,setTime]=useState(0)
    const[Speed,setSpeed]=useState(0)

    const [result,setResult]=useState('')
    const CalculateSpeed = () =>{
         setResult(Number(distance) / Number(Time))
    }
    const CalculateDistance = () =>{
         setResult(Number(distance) * Number(Time))
    }
    const CalculateTime = () =>{
         setResult(Number(distance) * Number(Time))
    }
  return (
    <div>
     <Row className='d-flex justify-content-center align-items-center row'>
        <Col className='col'>
        <input type="text" onChange={(e)=>setDistance(e.target.value)} placeholder='Enter distance' />
        <input type="text" onChange={(e)=>setTime(e.target.value)} placeholder='enter time'/>
    </Col>
    <Col className='col'>
    <Button variant="primary"onClick = {CalculateSpeed}> Calculate Speed</Button>
         <Button variant="primary"onClick = {CalculateDistance}> Calculate Dsitance</Button>
         <Button variant="primary"onClick = {CalculateTime}> Calculate Time</Button>

    </Col>
         
         <div><h1>Result is : {result}</h1></div>
        
     </Row>
    </div>
  )
}

export default SpeedCalculator
