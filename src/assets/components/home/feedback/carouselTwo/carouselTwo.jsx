import React, { useEffect, useState } from "react";
import './carouselTwo.css';
// import data from './data';
import people from './data';
// import  data from "autoprefixer";

export default function CarouselTwo(){
    // const [people] = useState(data);
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
            <section className="section">
                <div className="section-center">
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
                            <div className="article">
                            <article className={position} key={id}>
                                <img src={image} alt={name} className="person-img" />
                                <p className="lead name">{name}</p>
                                <p className="title">{title}</p>
                                <hr className="hr hr-blurry feedback__hrLine" />
                                <i className="text">{quote}</i>
                                <hr className="hr hr-blurry feedback__hrLine" />
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