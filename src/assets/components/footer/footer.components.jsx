import '../footer/footer.components.css';
import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon, MDBTypography } from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }} className='p-5 text-center text-lg-start text-muted'>
      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <MDBRow className=''>
                <MDBCol lg="2" md="2" sm="2"><img src="https://firebasestorage.googleapis.com/v0/b/ghummakad-bad15.appspot.com/o/Footer.png?alt=media" alt="footer image" height={35}/></MDBCol>
                <MDBCol><h2 className='text-uppercase fw-bold mb-4'>Ghummakad</h2></MDBCol>
              </MDBRow>
              <p>
              Book your trip in a minute, and enjoy your destination trip.
              </p>
              <br/>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                info@ghummakad.com
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Company</h6>
              <p>
                <a href='#!' className='text-reset'>
                  About
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Career
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Logistic
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Privacy & Policy
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>More</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Press Center
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Our Blog
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Low Fare Tips
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Help
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Chanels</h6>
              <div>
              <p><a href='' className='me-4 text-reset'>
                <MDBIcon fab icon="facebook-f" /> &nbsp;Facebook
              </a></p>
              <p><a href='' className='me-4 text-reset'>
                <MDBIcon fab icon="twitter" /> &nbsp;Twitter
              </a></p>
              <p><a href='' className='me-4 text-reset'>
                <MDBIcon fab icon="google" /> &nbsp;Google
              </a></p>
              <p><a href='' className='me-4 text-reset'>
                <MDBIcon fab icon="instagram" /> &nbsp;Instagram
              </a></p>
              <p><a href='' className='me-4 text-reset'>
                <MDBIcon fab icon="linkedin" /> &nbsp;Linkedin
              </a></p>
              <p><a href='' className='me-4 text-reset'>
                <MDBIcon fab icon="github" /> &nbsp;Github
              </a></p>
              </div>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section><hr/>

      <div className='text-center'>
        <MDBTypography variant='h4' className='lead'>© 2021 Copyright :&nbsp;
        <a className='text-reset fw-bold' href='#'>
          Ghummakad.com
        </a>
        </MDBTypography>
      </div>
    </MDBFooter>
  );
}