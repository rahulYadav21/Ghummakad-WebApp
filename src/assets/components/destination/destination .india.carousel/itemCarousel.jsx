import React from "react";
import './destination.india.carousel.css'

export default function CrouselItem(props){
    return (
        <>
            <div className="card">
                <div className="image__container">
                    <img src={props.url} alt="image" className="location__image img-fluid"/>
                </div>
                <div className="image__text">
                    <h4 className="location__heading">{props.title}<hr/></h4>
                    <p className="location__text">{props.text}</p>
                    {/* <p className="location__link">{props.location}</p> */}
                </div>
            </div>
        </>
    );
}