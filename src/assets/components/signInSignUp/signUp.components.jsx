import React from 'react';
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

export default function SignUp() {
  const navigate = useNavigate();
  return (
    <form>
      <MDBContainer className='mt-5 p-5 signUp__form'>
        <MDBRow className='mb-4'>
          <MDBCol>
            <MDBInput id='form3Example1' label='First name' />
          </MDBCol>
          <MDBCol>
            <MDBInput id='form3Example2' label='Last name' />
          </MDBCol>
        </MDBRow>
        <MDBInput className='mb-4' type='email' id='form3Example3' label='Email address' />
        <MDBInput className='mb-4' type='password' id='form3Example4' label='Password' />

        <MDBCheckbox
          wrapperClass='d-flex justify-content-center mb-4'
          id='form3Example5'
          label='Subscribe to our new exciting deals'
          flexCheckDefault
        />

        <MDBBtn type='submit' className='mb-4 signUp__button' block>
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
  );
}