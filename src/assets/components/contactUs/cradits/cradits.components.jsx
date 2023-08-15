import { MDBCol, MDBContainer, MDBRow, MDBTypography } from 'mdb-react-ui-kit';
import './cradits.components.css';
// import MapLocation from '../MapLocation/mapLocation.components';

export default function Cradits(){
    return (
        <>
            <MDBContainer className='p-5 mt-5 bg-dark cradits__sections'>
                <MDBRow className='p-lg-4 p-md-5 p-sm-0'>
                    <MDBCol lg={4} md={4} sm={12}>
                        <img className='img-fluid' src="../../../../../public/imags/contactUs.jpg" alt="contact Picture" />
                    </MDBCol>
                    <MDBCol lg={8} md={8} sm={12} className='cradits__text'>
                        <div className=' p-lg-5 p-md-5 p-sm-0 mt-5 cradits__text1'>
                            <h1 className='display-6 fw-bold'>Rahul can't wait to hear your ideas</h1>
                            <p className='lead'>"If there's one thing I love it's convey your thoughts to our diversely skilled team for the best results"</p><br/><br/>
                            <h6>-&nbsp;&nbsp;&nbsp;Rahul Yadav</h6>
                        </div>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
            
                {/* <MapLocation/> */}
            
        </>
    );
}