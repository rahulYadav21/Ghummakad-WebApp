import { 
    MDBContainer,
    MDBTypography,
    MDBRow,
    MDBCol,
 } from 'mdb-react-ui-kit';
import './feedback.components.css';
import Subscribe from '../subscribe/subscribe.components';
// import CarouselComments from './carouselComments/carouselComments.components';
import '../feedback/carouselComments/data.components';
import CarouselTwo from './carouselTwo/carouselTwo';

export default function Feedback(){
    return (
        <>
            <MDBContainer fluid className='feedback__container pt-5' >
                <MDBContainer className=''>
                    <MDBRow className='feedback__row'>
                        <MDBCol lg='5' md='5' sm='12'>
                            <MDBTypography variant='h1'className='display-3 feedback__heading'>
                                What People Say<br /><span> About Us.</span>   
                            </MDBTypography>
                            <hr className="hr hr-blurry feedback__hrLine" />
                            <MDBTypography variant='p'className='lead feedback__paragraph'>
                                Our Clients send us bunch of smiles with our services <br /> and we love them.
                            </MDBTypography>
                        </MDBCol>
                        <MDBCol lg='7' md='7' sm='12' className=' feedback__carouselComments'>
                            <MDBContainer fluid className="feedback__comments">
                                <CarouselTwo/>
                            </MDBContainer>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </MDBContainer>
            <Subscribe/>
        </>
    );
}