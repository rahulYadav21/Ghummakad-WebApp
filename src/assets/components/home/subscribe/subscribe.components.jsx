import { MDBBtn, MDBCol, MDBContainer, MDBInput, MDBInputGroup, MDBRow, MDBTypography, MDBTextArea, MDBCheckbox, MDBIcon } from 'mdb-react-ui-kit';
import Footer from '../../footer/footer.components';
import './subscribe.components.css';

export default function Subscribe(){
    return (
        <>
            <MDBContainer fluid className='subscribe__home mt-5'>
                <MDBTypography variant='h1' className='display-3 text-center'>
                    Subscribe Us 
                </MDBTypography>
                <MDBContainer>
                    <hr className="hr hr-blurry subscribe__hrLine" />
                </MDBContainer>
                <MDBTypography variant='p' className='lead text-center'>
                    For Better Experiance and being first priority of our new <span className='subscribe__spanForColor'>F</span>eatures and <span className='subscribe__spanForColor'>S</span>ervices
                </MDBTypography>
                <MDBRow className='subscribe__form'>
                        <MDBCol lg={8} md={8} sm={12} className='p-0'>
                            <form className='w-100'>
                                <MDBContainer className=' p-lg-5 p-md-5 p-sm-5 w-75 subscribe__mainForm'>
                                    <MDBRow className='mb-4'>
                                        <MDBCol>
                                            <MDBInput id='form3Example1' label='First name' size='lg'/>
                                        </MDBCol>
                                        <MDBCol>
                                            <MDBInput id='form3Example2' label='Last name' size='lg'/>
                                        </MDBCol>
                                    </MDBRow>
                                    <MDBInput className='mb-4' type='email' id='form3Example3' label='Email address' size='lg'/>
                                    <MDBTextArea label='Message' className='mb-4' id='textAreaExample' rows={4} size='lg'/>
                                    <MDBBtn type='submit' className='mb-4 subscribe__button fw-bold' size='lg'>SUBSCRIBE</MDBBtn>
                                </MDBContainer>
                            </form>
                        </MDBCol>
                    <MDBCol lg={4} md={4} sm={12}>
                        <img className='imf-fluid w-100' src="../../public/XliJ.gif" alt="subscribe side image" />
                    </MDBCol>
                </MDBRow>
            </MDBContainer>

            <Footer/>
        </>
    );
}