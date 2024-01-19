import React from "react";
// import './destination.india.carousel.css';
import Carousel from 'react-multi-carousel';
import './indian.exclusiveDeals.components.css';
import { MDBCol, MDBContainer, MDBRow, MDBTypography } from "mdb-react-ui-kit";
import { exclusiveDealsIndia, exclusiveDealsWorld } from "./dataExlusiveDeals";
import ExclusiveDealsItem from "./itemExclusiveDeals";

export default function IndianExclusiveDeals(){
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 1024 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 1024, min: 800 },
          items: 4
        },
        tablet: {
          breakpoint: { max: 800, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

      const locations = exclusiveDealsIndia.map(item =>(
        <ExclusiveDealsItem className="exclusiveDeals__carouselItem"
        title={item.name}
        url={item.image}
        text={item.price}
        time={item.time}
        location={item.location}
        />
      ))
    const otherLocations = exclusiveDealsWorld.map(item =>(
        <ExclusiveDealsItem className="exclusiveDeals__carouselItem"
        title={item.name}
        url={item.image}
        text={item.price}
        time={item.time}
        location={item.location}
        />
      ))
    return (
        <>
            <MDBContainer>
            <MDBTypography className='display-6 pb-5'>Exclusive Deals in <span className='span'>INDIA</span><hr className='exclusiveDeals__hrline hr hr-blurry'/></MDBTypography>
                <Carousel responsive={responsive}>
                    {locations}
                </Carousel>;
            {/* <MDBTypography className='display-6 pb-5 pt-5'>Exclusive Deals in <span className='span'>WORLD</span><hr className='exclusiveDeals__hrline hr hr-blurry'/></MDBTypography>
                <Carousel responsive={responsive}>
                    {otherLocations}
                </Carousel>; */}
            </MDBContainer>
        </>
    );
}