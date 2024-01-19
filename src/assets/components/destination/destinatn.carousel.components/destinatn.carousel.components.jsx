import React, { useEffect, useState } from "react";
import people from './data';
import './destinatn.carousel.components.css';

export default function CarouselTwo(){
    const [index, setIndex] = useState(0);
    console.log(people)

    useEffect(()=>{
        const lastIndex = people.length - 1;
        if(index < 0){
            setIndex(lastIndex);
        }
        if(index > lastIndex){
            setIndex(0);
        }
    }, [index, people]);

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
            <section className="destinatinCarousel__section">
                <div className="destinatinCarousel__sectionCenter">
                    {people.map((item, indexPeople) => {
                        const {id, image, name,title, quote} = item;
                        let position = 'nextSlide';
                        if(indexPeople===index){
                            position = 'activeSlide';
                        }
                        if(indexPeople === index - 1 || (index === 0 && indexPeople === people.length - 1)){
                            position = 'lastSlide';
                        }
                        return (
                            <div className="destinatinCarousel__article">
                            <article className={position} key={id}>
                                <img src={image} alt={name} className="destinatinCarousel__personImage"/>
                            </article>
                            </div>
                        );   
                    })}
                    </div>
            </section>
        </>
    );
}