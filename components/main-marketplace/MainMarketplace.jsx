import styles from "./MainMarketplaceStyle.module.css";
import HeroCard from "../hero-card/HeroCard";
import React, { useState, useEffect } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
};

const MainMarketplace = () => {
    const [cardsState, setOpenedCardId] = useState([false, false, false, false, false, false]);
    const onClickCallback = (cardId, state) => setOpenedCardId(cardsState.map((cardState, index) => index === cardId && state));

    return (
        <section>
            <h2>MARKETPLACE</h2>
            <div className={styles.marketplace_container}>
                <HeroCard opened={cardsState[0]} onclick={onClickCallback} cardId={0}/>
                <HeroCard opened={cardsState[1]} onclick={onClickCallback} cardId={1}/>
                <HeroCard opened={cardsState[2]} onclick={onClickCallback} cardId={2}/>
                <HeroCard opened={cardsState[3]} onclick={onClickCallback} cardId={3}/>
                <HeroCard opened={cardsState[4]} onclick={onClickCallback} cardId={4}/>
                <HeroCard opened={cardsState[5]} onclick={onClickCallback} cardId={5}/>
            </div>
            <Slider {...settings} className={styles.slider}>
                <HeroCard opened={cardsState[0]} onclick={onClickCallback} cardId={0}/>
                <HeroCard opened={cardsState[1]} onclick={onClickCallback} cardId={1}/>
                <HeroCard opened={cardsState[2]} onclick={onClickCallback} cardId={2}/>
                <HeroCard opened={cardsState[3]} onclick={onClickCallback} cardId={3}/>
                <HeroCard opened={cardsState[4]} onclick={onClickCallback} cardId={4}/>
                <HeroCard opened={cardsState[5]} onclick={onClickCallback} cardId={5}/>
            </Slider>
        </section>
    )
    return (
        <section>
            <h2>MARKETPLACE</h2>
            <Slider {...settings}>
                <HeroCard opened={cardsState[0]} onclick={onClickCallback} cardId={0}/>
                <HeroCard opened={cardsState[1]} onclick={onClickCallback} cardId={1}/>
                <HeroCard opened={cardsState[2]} onclick={onClickCallback} cardId={2}/>
                <HeroCard opened={cardsState[3]} onclick={onClickCallback} cardId={3}/>
                <HeroCard opened={cardsState[4]} onclick={onClickCallback} cardId={4}/>
                <HeroCard opened={cardsState[5]} onclick={onClickCallback} cardId={5}/>
            </Slider>
        </section>
    )
};

export default  MainMarketplace;