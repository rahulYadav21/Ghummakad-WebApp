import React from "react";
import './indian.exclusiveDeals.components.css'
import { MDBBtn, MDBCol, MDBRow } from "mdb-react-ui-kit";

export default function ExclusiveDealsItem(props){
    return (
        <>
            <div className="card">
                <div className="image__container">
                    <img src={props.url} alt="image" className="location__image img-fluid"/>
                </div>
                <div className="image__text">
                    <h4 className="location__heading">{props.title}<hr/></h4>
                    <MDBRow>
                        <MDBCol>
                            <p className="location__text fs-5" color='dark'>{props.text}</p>
                        </MDBCol>
                        <MDBCol>
                            <MDBBtn outline rounded className='p-2 exclusive__btn'>{props.time}</MDBBtn>
                        </MDBCol>
                    </MDBRow>
                    
                    <a className="exclusive__link" href={props.location} target="blank">Location link</a>
                </div>
            </div>
        </>
    );
}