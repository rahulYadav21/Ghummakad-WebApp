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
import './signIn.components.css';
import { useNavigate } from 'react-router-dom';

export default function SignIn() {
    const navigate = useNavigate();
  return (
    <form>
        <MDBContainer className='p-5 mt-5 signIn__form'>
            <MDBInput className='mb-4' type='email' id='form2Example1' label='Email address' />
            <MDBInput className='mb-4' type='password' id='form2Example2' label='Password' />

            <MDBRow className='mb-4'>
                <MDBCol className='d-flex justify-content-center'>
                <MDBCheckbox id='form2Example3' label='Remember me' flexCheckDefault />
                </MDBCol>
            </MDBRow>
            <MDBRow className='mb-4'>
            <MDBCol className='d-flex justify-content-center signIn__forgotText'>
                <a href='#!'>Forgot password?</a>
                </MDBCol>
            </MDBRow>

            <MDBBtn type='submit' className='mb-4 signIn__button' block>
                Sign in
            </MDBBtn>

            <div className='text-center signIn__forgotText'>
                <p>
                Not a member? <a href='#!' onClick={()=>{
                    navigate('/signUp');
                }}>Register</a>
                </p>
                <p>or sign In with:</p>

                <MDBBtn floating color="secondary" className='mx-1 signIn__icon'>
                <MDBIcon fab icon='facebook-f' />
                </MDBBtn>

                <MDBBtn floating color="secondary" className='mx-1 signIn__icon'>
                <MDBIcon fab icon='google' />
                </MDBBtn>

                <MDBBtn floating color="secondary" className='mx-1 signIn__icon'>
                <MDBIcon fab icon='twitter' />
                </MDBBtn>

                <MDBBtn floating color="secondary" className='mx-1 signIn__icon'>
                <MDBIcon fab icon='github' />
                </MDBBtn>
            </div>
        </MDBContainer>
    </form>
  );
}