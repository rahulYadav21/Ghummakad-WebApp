import ScrollPageThree from '../scrollPageThree/scrollPageThree.components';
import './scrollPageTwo.components.css';
import { 
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBTypography
 } from 'mdb-react-ui-kit';

export default function ScrollPageTwo(){
    return (
        <>
            <MDBContainer>
                <MDBRow>
                    <MDBCol lg='6' md='6' sm='12' className='p-5'>
                        <div className='scrollPageTwo__leftColumn'>
                            <figure className='figure'>
                                <img
                                    src='https://firebasestorage.googleapis.com/v0/b/ghummakad-bad15.appspot.com/o/scrollPageTwo.png?alt=media'
                                    className='rounded img-fluid'
                                    alt='Image'
                                />
                            </figure>
                        </div>
                    </MDBCol>
                    <MDBCol lg='6' md='6' sm='12' className='p-2'>
                        <div className='p-5'>
                            <MDBTypography><span className='scrollPageTwo__heading borderColor_1'>01</span></MDBTypography>
                            <MDBTypography variant='p' className='ms-5 scrollPageTwo__text'>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </MDBTypography>
                        </div>
                        <div className='ps-5 pe-5'>
                            <MDBTypography><span className='scrollPageTwo__heading borderColor_2'>02</span></MDBTypography>
                            <MDBTypography variant='p' className='ms-5 scrollPageTwo__text'>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </MDBTypography>
                        </div>
                        <div className='p-5'>
                            <MDBTypography><span className='scrollPageTwo__heading borderColor_3'>03</span></MDBTypography>
                            <MDBTypography variant='p' className='ms-5 scrollPageTwo__text'>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </MDBTypography>
                        </div>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>


            <ScrollPageThree/>
        </>
    );
}