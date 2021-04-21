import styles from "./MainMarketplaceStyle.module.css";
import HeroCard from "../hero-card/HeroCard";
import React, { useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import HeroCardMin from "../hero-card-min/HeroCardMin";



const MainMarketplace = () => {
    const [cardsState, setOpenedCardId] = useState([false, false, false, false, false, false]);
    //const onClickCallback = (cardId, state) => setOpenedCardId(cardsState.map((cardState, index) => index === cardId && state));
    const onClickCallback = (cardId, state) => null;
    const [currentCard, setCurrentCard] = useState(0);

    const settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        afterChange: (index) => setCurrentCard(index),
    };

    return (
        <section>
            <h2>MARKETPLACE</h2>
            <div className={styles.marketplace_container}>
                <HeroCardMin cardImage="/images/card-faces/1.png"/>
                <HeroCardMin cardImage="/images/card-faces/2.png"/>
                <HeroCardMin cardImage="/images/card-faces/3.png"/>
                <HeroCardMin cardImage="/images/card-faces/4.png"/>
                <HeroCardMin cardImage="/images/card-faces/5.png"/>
                <HeroCardMin cardImage="/images/card-faces/6.png"/>
                <a href="#subscribe-form" className={styles.void_card}><div>Subscribe for updates</div></a>
            </div>
            <Slider {...settings} className={styles.slider}>
                <HeroCardMin cardImage="/images/card-faces/1.png"/>
                <HeroCardMin cardImage="/images/card-faces/2.png"/>
                <HeroCardMin cardImage="/images/card-faces/3.png"/>
                <HeroCardMin cardImage="/images/card-faces/4.png"/>
                <HeroCardMin cardImage="/images/card-faces/5.png"/>
                <HeroCardMin cardImage="/images/card-faces/6.png"/>
                <a href="#subscribe-form" className={styles.void_card}><div>Subscribe for updates</div></a>
            </Slider>
            <div className={styles.slider_counter}>{currentCard + 1}/7</div>
        </section>
    )
};

export default MainMarketplace;