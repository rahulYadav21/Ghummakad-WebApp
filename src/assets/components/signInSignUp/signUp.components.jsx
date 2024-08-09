import React, { useState } from "react";
import {
  MDBInput,
  MDBCol,
  MDBRow,
  MDBCheckbox,
  MDBBtn,
  MDBIcon,
  MDBContainer,
  MDBTypography,
  MDBRadio,
} from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Footer from "../footer/footer.components";
import "./signUp.components.css";

export default function SignUp() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [address, setAddress] = useState("");
  const [state, setState] = useState("");
  const [dist, setDist] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  const [role, setRole] = useState("");

  let register = async () => {
    try {
      let endpoint = "";
      if (role === "tourist") {
        endpoint = "http://localhost:8080/tourist";
      } else {
        endpoint = "http://localhost:8080/guide";
      }
      let userData = {
        name: name,
        email: email,
        number: number,
        address: address,
        district: dist,
        state: state,
        password: password,
        gender: gender,
        role: role,
      };

      // console.log(data);
      let res = await axios.post(endpoint, userData);
      console.log("Registration successful!", res);
      navigate("/signIn");
    } catch (err) {
      console.error("Registration failed:", err);
    }
  };

  return (
    <>
      <form className="pb-5">
        <MDBContainer className="mt-5 p-5 signUp__form">
          <MDBRow className="mb-2">
            <MDBCol>
              <MDBTypography>Are you Tourist or Guide?. </MDBTypography>
            </MDBCol>
            <MDBCol>
              <select
                className="w-100 h-75 rounded border-gray border border-secondary"
                name="role"
                id="role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
              >
                <option>select</option>
                <option value="tourist">Tourist</option>
                <option value="guide">Guide</option>
              </select>
            </MDBCol>
          </MDBRow>
          <MDBInput
            className="mb-4"
            label="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <MDBInput
            className="mb-4"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            label="Email address"
          />
          <MDBInput
            className="mb-4"
            type="number"
            label="Phone Number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
          <MDBInput
            className="mb-4"
            type="text"
            label="Your Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <MDBRow className="mb-4">
            <MDBCol>
              <MDBInput
                type="text"
                label="Your District"
                value={dist}
                onChange={(e) => setDist(e.target.value)}
              />
            </MDBCol>
            <MDBCol>
              <MDBInput
                type="text"
                label="Your State"
                value={state}
                onChange={(e) => setState(e.target.value)}
              />
            </MDBCol>
          </MDBRow>
          <MDBInput
            className="mb-4"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            label="Password"
          />

          <MDBRow className="mb-4">
            <MDBCol>
              <MDBTypography inline>Gender:</MDBTypography>
              <MDBRadio
                name="gender"
                value="male"
                label="Male"
                inline
                checked={gender === "male"}
                onChange={(e) => setGender(e.target.value)}
              />
              <MDBRadio
                name="gender"
                value="female"
                label="Female"
                inline
                checked={gender === "female"}
                onChange={(e) => setGender(e.target.value)}
              />
              <MDBRadio
                name="gender"
                value="other"
                label="Other"
                inline
                checked={gender === "other"}
                onChange={(e) => setGender(e.target.value)}
              />
            </MDBCol>
          </MDBRow>

          <MDBCheckbox
            wrapperClass="d-flex justify-content-center mb-4"
            id="form3Example5"
            label="Subscribe to our new exciting deals"
            flexCheckDefault
          />

          <MDBBtn
            type="button"
            onClick={register}
            navigate="/signIn"
            className="mb-4 signUp__button"
            block
          >
            Sign Up
          </MDBBtn>

          <div className="text-center signUp__forgotText">
            <p>
              Not a member?{" "}
              <a
                href="#!"
                onClick={() => {
                  navigate("/signIn");
                }}
              >
                Login
              </a>
            </p>
            <p>or sign up with:</p>

            <MDBBtn floating color="secondary" className="mx-1 signUp__icon">
              <MDBIcon fab icon="facebook-f" />
            </MDBBtn>

            <MDBBtn floating color="secondary" className="mx-1 signUp__icon">
              <MDBIcon fab icon="google" />
            </MDBBtn>

            <MDBBtn floating color="secondary" className="mx-1 signUp__icon">
              <MDBIcon fab icon="twitter" />
            </MDBBtn>

            <MDBBtn floating color="secondary" className="mx-1 signUp__icon">
              <MDBIcon fab icon="github" />
            </MDBBtn>
          </div>
        </MDBContainer>
      </form>
      <Footer />
    </>
  );
}
