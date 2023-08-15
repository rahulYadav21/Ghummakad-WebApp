import React from "react";
import './destination.india.carousel.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { otherdataindia, dataIndia } from "./dataIndia";
import CrouselItem from "./itemCarousel";

export default function IndianDestinations(){
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

      const locations = dataIndia.map(item =>(
        <CrouselItem className="IndianDestinations__carouselItem"
        title={item.title}
        url={item.imageUrl}
        text={item.text}
        location={item.location}
        />
      ))
    const otherLocations = otherdataindia.map(item =>(
        <CrouselItem className="IndianDestinations__carouselItem"
        title={item.title}
        url={item.imageUrl}
        text={item.text}
        location={item.location}
        />
      ))
    return (
        <>
            <Carousel responsive={responsive}>
                {locations}
            </Carousel>;
            <Carousel responsive={responsive}>
                {otherLocations}
            </Carousel>;  
        </>
    );
}