import React from 'react'
import { Container } from '../Components/Layout'
import { Button } from '../Components/buttons'
import { Input } from '../Components/input'

const Login = () => {
  return(
    <Container style={{ overflowX: 'hidden' }} className="login-page">
       <div className="p-6 relative">
        <div style={{ height: "100vh", paddingTop: "40px", paddingBottom: "40px"}}>
          <div className='mb-4'>
            <h3 className='mb-0'>Enter Your Mobile Number</h3>
            </div>
            <div style={{width:"90%"}}>
            <Input className="" id="" type="" label="" />
            </div>
            <div className='mb-4'>
              <small>Enter OTP Sent to your mobile number</small>
              <div className='d-flex items-center' style={{marginTop: '-' + "0.5rem"}}>
                <Input className="otp-input" id="" type="number" label=""  max-length="1" />
                <Input className="otp-input" id="" type="number" label=""  max-length="1" />
                <Input className="otp-input" id="" type="number" label=""  max-length="1" />
                <Input className="otp-input" id="" type="number" label=""  max-length="1" />
                <Input className="otp-input" id="" type="number" label=""  max-length="1" />
                <Input className="otp-input" id="" type="number" label=""  max-length="1" />
              </div>
            </div>
            <Button style={{width: "100%"}} className="secondary">Continue</Button>
              </div>
          </div>     
    </Container>
  )
}

export default Login