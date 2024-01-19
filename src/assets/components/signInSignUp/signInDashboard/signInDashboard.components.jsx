import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn, MDBTypography, MDBCardHeader, MDBIcon } from 'mdb-react-ui-kit';
import "./signInDashboard.components.css";
// import IndianDestinations from '../../destination/destination .india.carousel/destination.india.carousel';

export default function SignInDashboard({data}) {
    const name = JSON.parse(localStorage.getItem(data));
      return (
        <div className="gradient-custom-2 SignInDashboard__background">
          <MDBContainer className="py-5">
            <MDBRow className="justify-content-center align-items-center">
              <MDBCol lg="9">
                <MDBContainer className=''>
                  <div className="rounded-top text-white d-flex flex-row SignInDashboard__banner">
                    {/* <MDBBtn outline color='light' className='float-end'>Change</MDBBtn> */}
                    <div className="ms-4 mt-5 d-flex flex-column SignInDashboard__editImage">
                      <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp" alt="Generic placeholder image" className="mt-4 mb-2 img-thumbnail SignInDashboard__profileImage" fluid/>
                      <MDBBtn className='SignInDashboard__editButtom' outline>Edit profile</MDBBtn>
                    </div>
                    <div className="ms-3" style={{ marginTop: '130px' }}>
                      <MDBTypography tag="h5">{name.firstname} {name.lastname}</MDBTypography>
                      <MDBCardText>New York</MDBCardText>
                    </div>
                  </div>
                  <div className="p-4 text-black" style={{ backgroundColor: '#f8f9fa' }}>
                    <div className="d-flex justify-content-end text-center py-1">
                      <div>
                        <MDBCardText className="mb-1 h5">10</MDBCardText>
                        <MDBCardText className="small text-muted mb-0">Visit Places</MDBCardText>
                      </div>
                      <div className="px-3">
                        <MDBCardText className="mb-1 h5">1026</MDBCardText>
                        <MDBCardText className="small text-muted mb-0">Followers</MDBCardText>
                      </div>
                      <div>
                        <MDBCardText className="mb-1 h5">478</MDBCardText>
                        <MDBCardText className="small text-muted mb-0">Following</MDBCardText>
                      </div>
                    </div>
                  </div>
                  <MDBContainer className="text-black pt-5">
                    <div className="mb-5">
                      <p className="lead fw-normal mb-1">About</p>
                      <div className="p-4 SignInDashboard__about">
                      <MDBIcon className='float-end' far icon="edit" />
                        <MDBCardText className="font-italic mb-1">Traveler</MDBCardText>
                        <MDBCardText className="font-italic mb-1">I was visit many famous places of India</MDBCardText>
                        <MDBCardText className="font-italic mb-0">My hobbie is Wild Photography</MDBCardText>
                      </div>
                    </div>
                    <div className="d-flex justify-content-between align-items-center mb-4">
                      <MDBCardText className="lead fw-normal mb-0">Recent photos</MDBCardText>
                      <MDBCardText className="mb-0"><a href="#!" className="text-muted">Show all</a></MDBCardText>
                    </div>
                    <MDBRow className='g-2'>
                      <MDBCol className="mb-2">
                        <MDBCardImage src="https://ihplb.b-cdn.net/wp-content/uploads/2016/11/alleppey.jpg"
                          alt="image 1" className="w-100 h-100 rounded-3" />
                      </MDBCol>
                      <MDBCol className="mb-2">
                        <MDBCardImage src="https://www.gingerhotels.com/resourcefiles/blogsmallimages/famous-attractions-to-visit-in-kochi-in-one-day.jpg"
                          alt="image 1" className="w-100 h-100 rounded-3" />
                      </MDBCol>
                      <MDBCol className="mb-2">
                        <MDBCardImage src="https://assets.traveltriangle.com/blog/wp-content/uploads/2014/11/Cochin-Skyline.jpg"
                          alt="image 1" className="w-100 h-100 rounded-3" />
                      </MDBCol>
                    </MDBRow>
                    <MDBRow className="g-2">
                      <MDBCol className="mb-2">
                        <MDBCardImage src="https://www.fabhotels.com/blog/wp-content/uploads/2018/08/1000x650-115.jpg"
                          alt="image 1" className="w-100 h-100 rounded-3" />
                      </MDBCol>
                      <MDBCol className="mb-2">
                        <MDBCardImage src="https://www.fabhotels.com/blog/wp-content/uploads/2019/02/Akshardham-Temple.jpg"
                          alt="image 1" className="w-100 h-100 rounded-3" />
                      </MDBCol>
                      <MDBCol className="mb-2">
                        <MDBCardImage src="https://www.hlimg.com/images/stories/738X538/agrasen-ki-baoli-3_1568783478-6404e.jpg?w=480&dpr=2.6"
                          alt="image 1" className="w-100 h-100 rounded-3" />
                      </MDBCol>
                    </MDBRow>
                  </MDBContainer>
                  <MDBContainer>
                    <div className='visitPlace'>
                        <MDBTypography className='lead fw-normal mb-1 mt-2' color='dark'>
                            List Of Visit Places
                        </MDBTypography>
                        <MDBCard className='h-100 mt-1 ms-0'>
                            <MDBCardHeader className='lead m-0 '>Kerla</MDBCardHeader>
                            <MDBCardBody>
                                <MDBCardImage src='https://thesouthfirst.com/wp-content/uploads/2023/03/kerala-tourism.jpg' alt='card_image 404....' className='w-100'/>
                            </MDBCardBody>
                        </MDBCard>
                    </div>
                  </MDBContainer>
                </MDBContainer>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </div>
      );
    }