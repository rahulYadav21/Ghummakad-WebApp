    import { 
    MDBContainer,
    MDBTypography,
    MDBRow,
    MDBCol,
    MDBIcon,
 } from 'mdb-react-ui-kit';
import './scrollPageThree.components.css';
import ExclusiveDeals from '../exclusiveDeals/exclusiveDeals.components';

export default function ScrollPageThree(){
    return (
        <>
            <MDBContainer fluid className='scrollPageThree__container pb-5'>
                <MDBContainer className='p-5'>
                    <MDBTypography variant='h1'className='text-center display-3'>
                        Things You Need To Do
                    </MDBTypography>
                    <hr className="hr hr-blurry scrollPageThree__hrLine" />
                    <MDBTypography variant='p'className='text-center lead'>
                        We ensure that you will embark on a perfectly planned,<br />sale vacation at a place you can afford
                    </MDBTypography>
                </MDBContainer>
                <MDBContainer className=''>
                    <MDBRow>
                        <MDBCol lg='4' md='4' sm='12' className='ps-5 pe-5 pb-5'>
                            <div className='border22 rounded'>
                                <div className=' '>
                                    <MDBIcon fas icon="sign-in-alt" className='display-5 p-4 icon-1' />
                                </div>
                                <div>
                                    <MDBTypography variant='h1' className='ps-4 ScrollPageThree__banner_1'>Sign UP</MDBTypography>
                                    <MDBTypography variant='p'className='p-4'>
                                        Completes all the work associated with planning and processing
                                    </MDBTypography>
                                </div>
                            </div>
                        </MDBCol>
                        <MDBCol lg='4' md='4' sm='12' className='ps-5 pe-5 pb-5'>
                            <div className='border22 rounded'>
                                <div className=''>
                                    <MDBIcon fas icon="dollar-sign" className='display-5 p-4 icon-2'/>  
                                </div>
                                <div>
                                    <MDBTypography variant='h1' className='ps-4 ScrollPageThree__banner_2'>Worth of Money</MDBTypography>
                                    <MDBTypography variant='p'className='p-4'>
                                        After successful aceess then book from exclusive deals & pricing
                                    </MDBTypography>
                                </div>
                            </div>
                        </MDBCol>
                        <MDBCol lg='4' md='4' sm='12' className='ps-5 pe-5 pb-5'>
                            <div className='border22 rounded'>
                                <div>
                                    <MDBIcon fas icon="map-marked-alt" className='display-5 p-4 icon-3'/>
                                </div>
                                <div>
                                    <MDBTypography variant='h1' className='ps-4 ScrollPageThree__banner_3'>Exciting Travel</MDBTypography>
                                        <MDBTypography variant='p'className='p-4'>
                                            Start and explore a wide range of exciting travel experience
                                        </MDBTypography>
                                </div>
                            </div>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </MDBContainer>

            <ExclusiveDeals/>
        </>
    );
}