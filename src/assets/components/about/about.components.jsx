import { MDBCol, MDBContainer, MDBIcon, MDBRow, MDBTypography } from 'mdb-react-ui-kit';
import './about.components.css';
import Footer from '../footer/footer.components';

export default function About(){
    return (
        <>
            <MDBContainer fluid>
                <MDBContainer className='p-lg-5 p-md-5 p-sm-5'>
                    {/* <MDBTypography variant='p' className='lead ps-5 pt-5 fw-bold'>
                        About
                    </MDBTypography> */}
                    <MDBTypography variant='h1' className='display-1 p-lg-5 p-md-5 p-sm-0'>
                        We&#x384;re a Tour & Travel agency with a taste for outstanding Packages and Deals....
                    </MDBTypography>
                    <MDBTypography variant='p' className='lead ps-lg-5 p-md-5 p-sm-5'>
                        <MDBRow>
                            <MDBCol lg={7} className='about__background__text1'>
                            The Ghummakad is the flagship digital consumer brand within the Columbus Travel Media portfolio. A comprehensive guide to the world’s best travel destinations, its print heritage stretches back 30 years, with the online portal reaching its 19-year anniversary in 2018.
                            </MDBCol>
                            <MDBCol lg={5}></MDBCol>
                        </MDBRow>
                    </MDBTypography>
                </MDBContainer>
                <MDBContainer>
                <MDBTypography variant='h1' className='display-3 text-center pt-5'>
                                About this site
                </MDBTypography>
                <hr className="hr hr-blurry about__hrLine" />
                    <MDBRow>
                        <MDBCol lg={6} md={6} sm={12} className='about__imageBox'>
                            <img src="https://firebasestorage.googleapis.com/v0/b/ghummakad-bad15.appspot.com/o/image%2Fabout_1.jpg?alt=media" alt="about imag 1" className='img-fluid p-lg-5 p-md-5 p-sm-5' />
                        </MDBCol>
                        <MDBCol lg={6} md={6} sm={12} className='about__aboutTextBox ps-lg-5 ps-md-5 ps-sm-0 pe-lg-5 pe-md-5 pe-sm-0'>
                            <MDBTypography variant='p' className='lead p-lg-5 p-md-5 p-sm-5'>
                                The Ghummakad is the flagship digital consumer brand within the Columbus Travel Media portfolio. A comprehensive guide to the world’s best travel destinations, its print heritage stretches back 30 years, with the online portal reaching its 19-year anniversary in 2018. Available in English, German, French and Spanish versions, the WTG provides detailed and accurate travel content designed to inspire global travellers. It covers all aspects, from cities to airports, cruise ports to ski and beach resorts, attractions to events, and it also includes weekly travel news, features and quizzes. Updated every day by a dedicated global editorial team, the portal logs 1 million+ unique users monthly.
                            </MDBTypography>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
                <MDBContainer>
                <MDBTypography variant='h1' className='display-3 text-center pt-5'>
                    Who we are
                </MDBTypography>
                <hr className="hr hr-blurry about__hrLine" />
                    <MDBRow>
                        <MDBCol lg={6} md={6} sm={12} className='about__aboutTextBox ps-lg-5 ps-md-5 ps-sm-0 pe-lg-5 pe-md-5 pe-sm-0'>
                            <MDBTypography variant='p' className='lead p-lg-5 p-md-5 p-sm-5'>
                                The Ghummakad is the flagship digital consumer brand within the Columbus Travel Media portfolio. A comprehensive guide to the world’s best travel destinations, its print heritage stretches back 30 years, with the online portal reaching its 19-year anniversary in 2018. Available in English, German, French and Spanish versions, the WTG provides detailed and accurate travel content designed to inspire global travellers. It covers all aspects, from cities to airports, cruise ports to ski and beach resorts, attractions to events, and it also includes weekly travel news, features and quizzes. Updated every day by a dedicated global editorial team, the portal logs 1 million+ unique users monthly.
                            </MDBTypography>
                        </MDBCol>
                        <MDBCol lg={6} md={6} sm={12} className='about__imageBox'>
                            <img src="https://firebasestorage.googleapis.com/v0/b/ghummakad-bad15.appspot.com/o/image%2Fabout_2.jpg?alt=media" alt="about imag 1" className='img-fluid p-lg-5 p-md-5 p-sm-5' />
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </MDBContainer>
            <MDBContainer fluid className='about__background'>
                <MDBContainer  className='background__shadow'>
                    <MDBContainer className='p-lg-5 p-md-5 p-sm-5 about__background__text'>
                        <MDBTypography variant='h1' className='display-3 text-center'>
                            Our team
                        </MDBTypography>
                        <hr className="hr hr-blurry" />
                        <MDBTypography variant='p' className='lead about__background__text1'>
                            We’ve been travelling the world for over 30 years, building a reputation for providing quality travel content that’s inspiring, engaging and informative. With all of our guides and features written and updated by a global network of expert travel writers that includes some of the best names in the business, we pride ourselves on producing content that stands out from the crowd. Regrettably, we aren’t able to accept guest posts and won’t be able to reply to guest post requests.
                        </MDBTypography>
                    </MDBContainer>
                </MDBContainer>
            </MDBContainer>
            <MDBContainer className='p-lg-5 p-md-5 p-sm-5 mt-5'>
                <MDBTypography variant='h1' className='display-3 text-center'>Content solutions</MDBTypography>
                <hr className="hr hr-blurry about__hrLine" />
                <MDBTypography variant='p' className='lead about__background__text1 p-lg-5 p-md-5 p-sm-5'>
                    As one of the world’s leading travel content providers, Columbus Travel Media (CTM) specialises in two distinct services for brands and retailers; its flexible approach means it can package existing travel content, or its editorial team can develop unique, accurate and tailored content in a style and tone to match briefs. CTM is the definitive supplier for many international travel brands.
                </MDBTypography>
                <hr className="hr hr-blurry about__hrLine" />
                <MDBRow className='mt-5 p-lg-5 p-md-5 p-sm-5'>
                    <MDBCol lg={4} md={4} sm={12}>
                        <div className='about__icons rounded-7'>
                            <div className='text-center p-5'><MDBIcon fas icon="home" className='display-1 about__icons_1'/></div>
                            <div className='about__icons__text rounded-7'>
                                <MDBTypography className='lead p-5 text-light'>
                                    In 2010, we started our journey with a small store in a small town in Hamirpur, Himachal Pradesh.
                                </MDBTypography>
                            </div>
                        </div>
                    </MDBCol>
                    <MDBCol lg={4} md={4} sm={12}>
                        <div className='about__icons rounded-7'>
                            <div className='text-center p-5'><MDBIcon fas icon="city" className='display-1 about__icons_1'/></div>
                            <div className='about__icons__text rounded-7'>
                                <MDBTypography className='lead p-5 text-light'>
                                    In 2020, With our hardwork and devotion to serve people we sucessfully planned 10k famlies
                                </MDBTypography>
                            </div>
                        </div>
                    </MDBCol>
                    <MDBCol lg={4} md={4} sm={12}>
                        <div className='about__icons rounded-7'>
                            <div className='text-center p-5'><MDBIcon fas icon="globe" className='display-1 about__icons_1'/></div>
                            <div className='about__icons__text rounded-7'>
                                <MDBTypography className='lead p-5 text-light'>
                                    In 2022, We helped people to remember their trips and make them their one of the best moment of life.
                                </MDBTypography>
                            </div>
                        </div>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
            <Footer/>
        </>
    );
}