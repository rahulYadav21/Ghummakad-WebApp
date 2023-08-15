import {MDBContainer, MDBTypography } from 'mdb-react-ui-kit';
import './destination.components.css';
import DestinationCarousel from './destinatn.carousel.components/destinatn.carousel.components';
import IndianDestinations from './destination .india.carousel/destination.india.carousel';
import Footer from '../footer/footer.components';

export default function Destination(){
    return (
        <>
            <div className='main__destination__carousel'>
                    <MDBContainer fluid className='p-0'>
                        <DestinationCarousel/>
                    </MDBContainer>
                    <MDBContainer>
                        <MDBTypography className='pt-5 pb-5'>
                            <p className='display-1'>Let's go....</p>
                            <p className='lead ps-lg-5 ps-md-5 ps-sm-0 destination__letsgo'>The Ghummakad is the flagship digital consumer brand within the Columbus Travel Media portfolio. A comprehensive guide to the world’s best travel destinations, its print heritage stretches back 30 years, with the online portal reaching its 19-year anniversary in 2018. Available in English, German, French and Spanish versions, the WTG provides detailed and accurate travel content designed to inspire global travellers. It covers all aspects, from cities to airports, cruise ports to ski and beach resorts, attractions to events, and it also includes weekly travel news, features and quizzes.</p>
                        </MDBTypography>
                    </MDBContainer>
                    <MDBContainer>
                        <MDBTypography className='display-1 text-center pb-5'>Top location's in the <span className='span'>INDIA</span><hr className='destination__hrline hr hr-blurry'/></MDBTypography>
                        <IndianDestinations/>
                    </MDBContainer>
                    <MDBContainer className='pb-5'>
                        <MDBTypography className='display-1 text-center p-5'>Top location's in the <span className='span'>WORLD</span><hr className='destination__hrline hr hr-blurry'/></MDBTypography>
                        <IndianDestinations/>
                    </MDBContainer>

                    <Footer/>
            </div>
        </>
    );
}