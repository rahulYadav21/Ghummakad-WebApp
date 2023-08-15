import React from "react";
import './indian.exclusiveDeals.components.css'
import { MDBBtn, MDBCol, MDBRow, MDBTypography } from "mdb-react-ui-kit";

export default function ExclusiveDealsItem(props){
    return (
        <>
            <div className="card">
                <div className="image__container">
                    <img src={props.url} alt="image" className="location__image img-fluid"/>
                </div>
                <div className="image__text">
                    <MDBRow className="location__heading">
                        <MDBTypography variant="h5" className="lead">
                            {props.title}
                        </MDBTypography>
                        <hr className="hr hr-blurry"/>
                    </MDBRow>
                    <h4 ></h4>
                    <MDBRow>
                        <MDBCol>
                            <p className="location__text lead" color='dark'>{props.text}</p>
                        </MDBCol>
                        <MDBCol>
                            <MDBBtn outline rounded className='p-2 exclusive__btn'>{props.time}</MDBBtn>
                        </MDBCol>
                    </MDBRow>
                    <hr className="hr hr-blurry"/>
                    <MDBRow className="exclusive__link">
                        <MDBBtn color='light' className="exclusive__link1 w-75" href={props.location} target="blank">Location link</MDBBtn>
                    </MDBRow>
                </div>
            </div>
        </>
    );
}