import { 
    MDBContainer,
    MDBTypography,
    MDBRow,
    MDBCol,
    MDBIcon,
 } from 'mdb-react-ui-kit';
import './exclusiveDeals.components.css';
import Feedback from '../feedback/feedback.components';
import IndianExclusiveDeals from './indian.ExclusiveDeals/indian.exclusiveDeals.components';

export default function ExclusiveDeals(){
    return (
        <>
            <MDBContainer className='exclusiveDeals__container' >
                <MDBContainer className='p-5'>
                    <MDBTypography variant='h1'className='text-center display-3'>
                        Exclusive Deals <span className='spanFor__and'>&</span> Discounts
                    </MDBTypography>
                    <hr className="hr hr-blurry exclusiveDeals__hrLine" />
                    <MDBTypography variant='p'className='text-center lead'>
                        Discover our fantastic early booking discounts<br/>& start planning your journey.
                    </MDBTypography>
                </MDBContainer> 
            </MDBContainer>
            <MDBContainer fluid className='exclusiveDeals__indianDeals mb-5'>
                <IndianExclusiveDeals/>
            </MDBContainer>

            <Feedback/>
        </>
    );
}