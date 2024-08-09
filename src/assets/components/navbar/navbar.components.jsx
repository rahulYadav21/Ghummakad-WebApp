<<<<<<< HEAD
import './navbar.components.css';
import '../home/home.components';
import '../about/about.components';
import '../about/about.components';
import '../destination/destination.components';

import React, { useState } from 'react';
=======
import "./navbar.components.css";
import "../home/home.components";
import "../about/about.components";
import "../about/about.components";
import "../destination/destination.components";

import React, { useState } from "react";
>>>>>>> main
import {
  MDBNavbar,
  MDBContainer,
  MDBNavbarBrand,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBBtn,
<<<<<<< HEAD
  MDBBtnGroup
} from 'mdb-react-ui-kit';
// import Home from '../home/home.components';
import { Link, Outlet, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const [showNavText, setShowNavText] = useState(false);
  const navigate=useNavigate();
  return (
    <>
    <MDBNavbar expand='lg'>
      <MDBContainer fluid className='ms-lg-5 ms-md-5 ms-sm-0 me-lg-5 me-md-5 me-sm-0'>
        <MDBNavbarBrand className='nav__togle'>
            <div className="logo__nav">
                    <img src='https://firebasestorage.googleapis.com/v0/b/ghummakad-bad15.appspot.com/o/logomain.png?alt=media' alt='LOGO' className=' ms-lg-5 ms-md-5 ms-sm-0 logo__image' onClick={()=>{navigate("/")}}/>
            </div>
        </MDBNavbarBrand>
        <MDBNavbarToggler
          type='button'
          data-target='#navbarText'
          aria-controls='navbarText'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowNavText(!showNavText)}
        >
          <MDBIcon icon='bars'/>
        </MDBNavbarToggler>
        <MDBCollapse navbar show={showNavText}>
          <MDBNavbarNav className='mr-auto mb-2 mb-lg-0 lead'>
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current='page'>
                <Link className='navbar__hoverEfect' to='/'>Home</Link>
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem className='ms-lg-4 ms-md-4 ms-sm-0'>
              <MDBNavbarLink>
                <Link className='navbar__hoverEfect' to='destination'>Destination</Link>
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem  className='ms-lg-4 ms-md-4 ms-sm-0'>
              <MDBNavbarLink>
                <Link className='navbar__hoverEfect' to='tour'>Guide</Link>
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem  className='ms-lg-4 ms-md-4 ms-sm-0'>
              <MDBNavbarLink>
                <Link className='navbar__hoverEfect' to='about'>About</Link>
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem  className='ms-lg-4 ms-md-4 ms-sm-0'>
              <MDBNavbarLink>
                <Link className='navbar__hoverEfect' to='contactUs'>Contact Us</Link>
              </MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>
          <MDBBtnGroup className='w-50'>
            <MDBBtn type='button' color='danger' className='nav__signInBtn' size='lg' onClick={()=>{
              navigate('/signIn');
            }}>
                Sign In
            </MDBBtn>
            <MDBBtn type='button' color='warning' size='lg' onClick={()=>{
              navigate('/signUp');
            }}>
                Sign Up
            </MDBBtn>
          </MDBBtnGroup>
          {/* <MDBBtn type='button' size='lg' className='nav__LogoutBtn'>Logout</MDBBtn> */}
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
    
    <Outlet/>
    </>
  );
}
=======
  MDBBtnGroup,
} from "mdb-react-ui-kit";
// import Home from '../home/home.components';
import { Link, Outlet, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [showNavText, setShowNavText] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <MDBNavbar expand="lg">
        <MDBContainer
          fluid
          className="ms-lg-5 ms-md-5 ms-sm-0 me-lg-5 me-md-5 me-sm-0"
        >
          <MDBNavbarBrand className="nav__togle">
            <div className="logo__nav">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/ghummakad-bad15.appspot.com/o/logomain.png?alt=media"
                alt="LOGO"
                className=" ms-lg-5 ms-md-5 ms-sm-0 logo__image"
                onClick={() => {
                  navigate("/");
                }}
              />
            </div>
          </MDBNavbarBrand>
          <MDBNavbarToggler
            type="button"
            data-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setShowNavText(!showNavText)}
          >
            <MDBIcon icon="bars" />
          </MDBNavbarToggler>
          <MDBCollapse navbar show={showNavText}>
            <MDBNavbarNav className="mr-auto mb-2 mb-lg-0 lead">
              <MDBNavbarItem>
                <MDBNavbarLink active aria-current="page">
                  <Link className="navbar__hoverEfect" to="/">
                    Home
                  </Link>
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem className="ms-lg-4 ms-md-4 ms-sm-0">
                <MDBNavbarLink>
                  <Link className="navbar__hoverEfect" to="destination">
                    Destination
                  </Link>
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem className="ms-lg-4 ms-md-4 ms-sm-0">
                <MDBNavbarLink>
                  <Link className="navbar__hoverEfect" to="tour">
                    Guide
                  </Link>
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem className="ms-lg-4 ms-md-4 ms-sm-0">
                <MDBNavbarLink>
                  <Link className="navbar__hoverEfect" to="about">
                    About
                  </Link>
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem className="ms-lg-4 ms-md-4 ms-sm-0">
                <MDBNavbarLink>
                  <Link className="navbar__hoverEfect" to="contactUs">
                    Contact Us
                  </Link>
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem className="ms-lg-4 ms-md-4 ms-sm-0">
                <MDBNavbarLink>
                  <Link className="navbar__hoverEfect" to="review">
                    Review
                  </Link>
                </MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>
            <MDBBtnGroup className="w-50">
              <MDBBtn
                type="button"
                color="danger"
                className="nav__signInBtn"
                size="lg"
                onClick={() => {
                  navigate("/signIn");
                }}
              >
                Sign In
              </MDBBtn>
              <MDBBtn
                type="button"
                color="warning"
                size="lg"
                onClick={() => {
                  navigate("/signUp");
                }}
              >
                Sign Up
              </MDBBtn>
            </MDBBtnGroup>
            {/* <MDBBtn type='button' size='lg' className='nav__LogoutBtn'>Logout</MDBBtn> */}
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>

      <Outlet />
    </>
  );
}
>>>>>>> main
