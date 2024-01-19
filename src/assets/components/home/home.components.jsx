import './home.components.css';
import { 
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBTypography, 
    MDBBtn,
    MDBIcon
 } from 'mdb-react-ui-kit';
import ScrollPageTwo from './scrollPageTwo/scrollPageTwo.components';
import { Link, useNavigate } from 'react-router-dom';

export default function Home(){
    const navigate = useNavigate();
    return (
        <>
            <MDBContainer>
                <MDBRow>
                    <MDBCol lg='6' md='6' sm='12' className='home__container'>
                    <MDBTypography className='p-lg-5 p-md-5 p-sm-1'>
                        <MDBTypography  variant='h1' className='display-2'>
                            <span className='home__spanForColor'><abbr title='Gummakad'>G</abbr></span>et started your exciting journey with us.
                        </MDBTypography>
                        <br/>
                        <MDBTypography  variant='p' className='home_paragraph lead'>
                        A Team of experienced tourism professionals will provide you with the best advice and tips for your desire place.
                        </MDBTypography>
                        <br/>
                        <MDBBtn rounded color='danger' className='home__discoverBtn p-3' size='lg' onClick={()=>{
                            navigate('/destination')
                        }}>
                            Discover Now
                        </MDBBtn>
                        
                    </MDBTypography>
                    </MDBCol>
                    <MDBCol lg='6' md='6' sm='12'>
                        <figure className='figure'>
                            <img
                                src='https://firebasestorage.googleapis.com/v0/b/ghummakad-bad15.appspot.com/o/Home.jpg?alt=media&'
                                className='figure-img img-fluid p-5'
                                alt='home cover picture'
                            />
                        </figure>
                    </MDBCol>
                </MDBRow>
                {/* <div className='home__icon'>
                    <MDBBtn floating tag='a' className='home__scrollBtn'onClick={()=>{
                        navigate('/scrollPageTwo');
                    }} >
                        <MDBIcon fas icon="angle-double-down"/>
                    </MDBBtn>
                </div> */}
            </MDBContainer>
            <ScrollPageTwo/>
        </>
    );
}