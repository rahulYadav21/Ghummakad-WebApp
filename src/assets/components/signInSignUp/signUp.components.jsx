import React from 'react';
import {useState, useEffect} from "react";

import {
  MDBInput,
  MDBCol,
  MDBRow,
  MDBCheckbox,
  MDBBtn,
  MDBIcon,
  MDBContainer
} from 'mdb-react-ui-kit';
import './signUp.components.css';
import { useNavigate } from 'react-router-dom';
import Footer from '../footer/footer.components';

export default function SignUp() {
  const navigate = useNavigate();
  // const [data,setData] = useState("hello");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fistname,setFirstName] = useState("");
  const [lastName,setLastName] = useState("");
  
  function func(){
    const detail = {
      password: password,
      firstname: fistname,
      lastname: lastName
    }
    localStorage.setItem(email,JSON.stringify(detail));
    // const val = JSON.parse(localStorage.getItem(email));
  }

  return (
    <>
    <form className='pb-5'>
      <MDBContainer className='mt-5 p-5 signUp__form'>
        <MDBRow className='mb-4'>
          <MDBCol>
            <MDBInput id='form3Example1' label='First name' onChange={(e)=>setFirstName(e.target.value)}/>
          </MDBCol>
          <MDBCol>
            <MDBInput id='form3Example2' label='Last name' onChange={(e)=>setLastName(e.target.value)}/>
          </MDBCol>
        </MDBRow>
        <MDBInput className='mb-4' type='email' id='form3Example3' onChange={(e)=>{setEmail(e.target.value)}} label='Email address' />
        <MDBInput className='mb-4' type='number' id='form3Example3' label='Phone Number' />
        <MDBInput className='mb-4' type='password' id='form3Example4' onChange={(e)=>{setPassword(e.target.value)}} label='Password' />

        <MDBCheckbox
          wrapperClass='d-flex justify-content-center mb-4'
          id='form3Example5'
          label='Subscribe to our new exciting deals'
          flexCheckDefault
        />

        <MDBBtn type='submit' onClick={func} className='mb-4 signUp__button' block>
          Sign Up
        </MDBBtn>

        <div className='text-center signUp__forgotText'>
          <p>
            Not a member? <a href='#!' onClick={()=>{
              navigate('/signIn');
            }}>Login</a>
          </p>
          <p>or sign up with:</p>

          <MDBBtn floating color="secondary" className='mx-1 signUp__icon'>
            <MDBIcon fab icon='facebook-f' />
          </MDBBtn>

          <MDBBtn floating color="secondary" className='mx-1 signUp__icon'>
            <MDBIcon fab icon='google' />
          </MDBBtn>

          <MDBBtn floating color="secondary" className='mx-1 signUp__icon'>
            <MDBIcon fab icon='twitter' />
          </MDBBtn>

          <MDBBtn floating color="secondary" className='mx-1 signUp__icon'>
            <MDBIcon fab icon='github' />
          </MDBBtn>
        </div>
      </MDBContainer>
    </form>
    <Footer/>
    </>   
  );
}