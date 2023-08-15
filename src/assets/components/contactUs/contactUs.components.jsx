import './contactUs.components.css';
import Footer from '../footer/footer.components';
import { MDBBtn, MDBCol, MDBContainer, MDBInput, MDBInputGroup, MDBRow, MDBTextArea, MDBTypography } from 'mdb-react-ui-kit';
import Cradits from './cradits/cradits.components';
import MapLocation from './MapLocation/mapLocation.components';

export default function ContactUs(){
    return (
        <>
            <MDBContainer fluid>
                <MDBContainer className='p-lg-5 p-md-5 p-sm-5'>
                    {/* <MDBTypography variant='p' className='lead ps-5 pt-5 fw-bold'>
                        Contact
                    </MDBTypography> */}
                    <MDBTypography variant='h1' className='display-1 p-lg-5 p-md-5 p-sm-0'>
                        We&#x384;re here to help<br/>you level up
                    </MDBTypography>
                </MDBContainer>
                <MDBContainer>
                    <MDBRow>
                        <MDBCol lg={5} md={5} sm={12} className='ps-lg-5 ps-md-5 ps-sm-0 pe-lg-5 pe-md-5 pe-sm-0'>
                            <MDBTypography variant='h4' className='contactUs_text ps-lg-5 ps-md-5 ps-sm-0 pe-lg-5 pe-md-5 pe-sm-0 fw-light'>
                                We&#x384;re just one click away to help you take your brand or product from great to incredible. Fill in the form to share more details about your project. Or your favorite gum flavor. Either way, we&#x384;d love to talk.
                            </MDBTypography>
                        </MDBCol>
                        <MDBCol lg={7} md={7} sm={12} className='contact__formInput'>
                            <MDBContainer className='p-5'>
                            <label htmlFor='basic-url1`' className='form-label fw-bold contactUs__label'>
                                What&#x384;s your name?
                            </label>
                            <MDBInput id='typeText' type='text' size='lg' className='contactUs__input'/><br/>
                            <label htmlFor='basic-url1`' className='form-label pt-5 fw-bold contactUs__label'>
                                Your email
                            </label>
                            <MDBInput id='typeText' type='email' size='lg' className='contactUs__input'/><br/>
                            <label htmlFor='basic-url1`' className='form-label pt-5 fw-bold contactUs__label'>
                                What can we help you with?
                            </label>
                            <MDBTextArea id='textAreaExample' className='contactUs__input' rows={5}/><br/><br/>
                            <MDBBtn rounded size='lg' color='light' className='contactUs__btn fw-bold'>Send</MDBBtn>
                            </MDBContainer>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
                <MDBContainer className='contactUs__cradits'>
                    <Cradits/>
                </MDBContainer>
            </MDBContainer>
            <MDBContainer fluid>
                <MapLocation/>
            </MDBContainer>

            {/* footer  */}

            <Footer/>
        </>
    );
}