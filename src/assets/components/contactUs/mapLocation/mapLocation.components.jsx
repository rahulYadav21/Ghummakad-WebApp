import { MDBCol, MDBContainer, MDBRow, MDBTypography } from 'mdb-react-ui-kit';
import './mapLocation.components.css';

export default function MapLocation(){
    return (
        <>
        <MDBContainer fluid className='mapLocation__maincomponent'>
            <MDBRow>
                <MDBCol lg={4} md={4} sm={12}>
                    <MDBContainer className='mapLocation__text ps-lg-5 ps-md-5 ps-sm-0 ms-lg-5 ms-md-5 ms-sm-0'>
                        <p className='display-5'>Our office is located by the LUCKNOW</p>
                        <p className='lead'>We like our home like we like our designs; clean and minimal. We’re based in the heart of beautiful Lucknow, so don’t hesitate to visit. We have an open door policy.</p>
                        <MDBTypography variant='h4' className='fw-light mt-5'>
                            Our address -<br/>Prem Nagar, Hazratganj,<br/>Lucknow,<br/>Uttar Pradesh<br/> 226001
                        </MDBTypography>
                    </MDBContainer>
                </MDBCol>
                <MDBCol lg={4} md={4} sm={12}></MDBCol>
            </MDBRow>
        </MDBContainer>
        </>
    );
}