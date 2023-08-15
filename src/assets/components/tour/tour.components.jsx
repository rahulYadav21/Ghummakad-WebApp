import { MDBContainer, MDBTypography } from 'mdb-react-ui-kit';
import './tour.components.css';
import Footer from '../footer/footer.components';

export default function Tour(){
    return (
        <>
            <MDBContainer fluid className='tour__container'>
                <MDBContainer className='p-lg-5 p-md-5 p-sm-5'>
                    <MDBTypography variant='h1' className='display-1 ps-lg-5 ps-md-5 ps-sm-0 pt-lg-5 pt-md-5 pt-sm-0 pe-lg-5 pe-md-5 pe-sm-0'>
                        <p>We'r here for <span className='tour__span'>U</span><br/>We will guide <span className='tour__span'>U</span> for <span className='tour__span'>your</span><br/> favorite location</p>
                    </MDBTypography>
                    <MDBTypography className='display-6 ps-5 text-secondary tour__container__quote'>
                    "Traveling&minus; it leaves you speechless, <br/>then turns you into a storyteller."
                    </MDBTypography>
                </MDBContainer>
                <MDBContainer className='p-lg-5 p-md-5 p-sm-0'>
                    <MDBTypography variant='p' className='display-5 tour__text'>
                        If <span className='tour__span'>"you need our Guide"</span> and want to enjoy our services to get the best experience out of your favourite visiting place, connect with us from here, and we will give you the best experience.
                    </MDBTypography>
                </MDBContainer>
                <MDBContainer className='p-lg-5 p-md-5 p-sm-0'>
                    <MDBTypography variant='h' className='display-5 tour__text'>
                        <span className='tour__span'>You need a guide,</span> so just call or Mail us, and we will provide you with our best Guide at your current place, as per your preference.
                    </MDBTypography>
                    <MDBTypography listUnStyled className='pt-5 lead display-6'>
                        <ul className='tour__textList'>
                                <li>+91-987654321</li>
                                <li>abcd@mail.com</li>
                        </ul>
                    </MDBTypography>
                </MDBContainer>
            <Footer/>
            </MDBContainer>
        </>
    );
}
