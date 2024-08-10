import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardImage,
  MDBBtn,
  MDBTypography,
  MDBCardText,
  MDBIcon,
  MDBInput,
} from "mdb-react-ui-kit";
import "./signInDashboard.components.css";
import { useParams } from "react-router-dom";

export default function SignInDashboard() {
  const [data, setData] = useState("");
  const { role, email } = useParams();
  const [x, setX] = useState(false);

  useEffect(() => {
    const userData = async () => {
      let endpoints = "";
      if (role === "tourist" && email) {
        endpoints = `http://localhost:8080/tourist?email=${email}`;
      } else {
        endpoints = `http://localhost:8080/guide?email=${email}`;
      }
      try {
        const res = await axios.get(endpoints);
        setX(true);
        setData(res.data[0]);
      } catch (error) {
        console.error("Login error:", error);
      }
    };
    userData();
  }, [role, email]);

  return (
    <div className="gradient-custom-2 SignInDashboard__background">
      <MDBContainer className="py-5 w-75">
        <MDBTypography className="display-5">Profile</MDBTypography>
        <MDBRow className="">
          <MDBCol className="col-4 one position-static">
            <MDBContainer className="bg-light rounded-9">
              <MDBRow className="py-4 justify-content-center">
                <div className="d-flex flex-column SignInDashboard__editImage">
                  <MDBCardImage
                    src={data.profileImage || "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp"}
                    alt="profile"
                    className="SignInDashboard__profileImage"
                    fluid
                  />
                </div>
              </MDBRow>
              <MDBRow className="justify-content-center">
                <MDBBtn
                  className="SignInDashboard__editButtom w-50"
                  type="file"
                  name="img"
                  accept="image/*"
                  outline
                >
                  Upload Image
                </MDBBtn>
              </MDBRow>
              <hr className="hr bg-secondary hr-blurry" />
              <MDBRow className="">
                <MDBTypography className="lead fs-3 text-center">
                  {data.name}
                  <MDBIcon fas icon="check-circle fs-6 lh-1 text-success" />
                </MDBTypography>
              </MDBRow>
              <MDBRow className="">
                <MDBCol className="col-2 ps-5">
                  <MDBIcon fas icon="phone-volume" />
                </MDBCol>
                <MDBCol className="col-10 pe-5">
                  <MDBTypography className="lead fs-5">
                    {data.phone}
                  </MDBTypography>
                </MDBCol>
              </MDBRow>
              <MDBRow className="">
                <MDBCol className="col-2 ps-5">
                  <MDBIcon fas icon="at" />
                </MDBCol>
                <MDBCol className="col-10 pe-5">
                  <MDBTypography className="lead">{data.email}</MDBTypography>
                </MDBCol>
              </MDBRow>
              <MDBRow className="">
                <MDBCol className="col-2 ps-5">
                  <MDBIcon fas icon="transgender-alt" />
                </MDBCol>
                <MDBCol className="col-10 pe-5">
                  <MDBTypography className="lead">
                    {data.gender}
                  </MDBTypography>
                </MDBCol>
              </MDBRow>
              <MDBRow className="">
                <MDBCol className="col-2 ps-5">
                  <MDBIcon fas icon="map-marked-alt" />
                </MDBCol>
                <MDBCol className="col-10 pe-5">
                  <MDBTypography className="lead">
                    {data.address}, {data.district}, {data.state}
                  </MDBTypography>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </MDBCol>
          <MDBCol className="col-8 two float-right">
            <MDBContainer className="bg-light rounded-9 ps-5 pe-5">
              <MDBRow className="py-4">
                <MDBTypography className="fs-3 lead text-center">
                  Update{" "}
                  <span className="signInDashboard__typoChange">
                    {data.role}
                  </span>{" "}
                  Profile
                </MDBTypography>
                <hr className="hr bg-secondary hr-blurry" />
              </MDBRow>
              <MDBInput
                label="Name"
                id="name"
                type="text"
                size="lg"
                defaultValue={data.name}
              />
              <br />
              <MDBInput
                label="Email"
                id="email"
                type="text"
                size="lg"
                defaultValue={data.email}
              />
              <br />
              <MDBInput
                label="Phone"
                id="phone"
                type="text"
                size="lg"
                defaultValue={data.phone}
              />
              <br />
              <MDBInput
                label="Address"
                id="address"
                type="text"
                size="lg"
                defaultValue={data.address}
              />
              <br />

              <MDBRow className="py-4">
                <MDBTypography className="fs-5 lead">
                  Update your Password
                </MDBTypography>
                <hr className="hr bg-secondary hr-blurry" />
              </MDBRow>
              <MDBInput
                label="New Password"
                id="newPassword"
                type="password"
                size="lg"
              />
              <br />
              <MDBInput
                label="Confirm Password"
                id="confirmPassword"
                type="password"
                size="lg"
              />
              <br />
            </MDBContainer>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}
