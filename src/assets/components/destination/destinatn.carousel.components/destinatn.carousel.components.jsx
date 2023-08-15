// import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';
import './destinatn.carousel.components.css';
import { useEffect, useState } from 'react';
import imageSlider from './data';

export default function DestinationCarousel(){
    const [index, setIndex] = useState(0);
    console.log(imageSlider)

    useEffect(()=>{
        const lastIndex = imageSlider.length - 1;
        if(index < 0){
            setIndex(lastIndex);
        }
        if(index > lastIndex){
            setIndex(0);
        }
    }, [index, imageSlider]);

    useEffect(()=>{
        let slider = setInterval(()=>{
            setIndex(index + 1)
        }, 5000);
        return ()=>{
            clearInterval(slider)
        }
    }, [index]);
    return (
        <>
            <section className="section">
                <div className="section-center">
                    {imageSlider.map((item, indexPeople) => {
                        const {id, image} = item;
                        let position = 'nextSlide';
                        if(indexPeople===index){
                            position = 'activeSlide';
                        }
                        if(indexPeople === index - 1 || (index === 0 && indexPeople === imageSlider.length - 1)){
                            position = 'lastSlide';
                        }
                        return (
                            <div className="article">
                            <article className={position} key={id}>
                                <img src={image} alt={name} className="person-img" />
                            </article>
                            </div>
                        );   
                    })}
                    {/* <button className="prev" onclick={() => setIndex(index + 1)}>
                        <i className="fas fa-arrow-right" />
                    </button>
                    <button className="next" onclick={() => setIndex(index - 1)}>
                        <i className="fa fa-arrow-left" />
                    </button> */}
                </div>
            </section>
        </>
    );
}