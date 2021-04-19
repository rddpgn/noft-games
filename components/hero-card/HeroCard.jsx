import styles from "./HeroCardStyle.module.css";
import React, { useState } from 'react';

const HeroCard = (props) => {
    return (
        <div className={styles.card_container} onMouseOver={() => props.onclick(props.cardId, true)} onMouseOut={() => props.onclick(props.cardId, false)}>
            <div className={styles.card_front}>
                <div className={styles.card_front_image_container}>
                    <img src="/images/pictures/card-hero.jpg" alt=""/>
                    <div className={styles.card_front_image_price}>
                        <h3>10.000</h3>
                        <div>ERC721</div>
                    </div>
                </div>
                <div className={styles.card_front_name_container}>
                    <div className={styles.card_front_name}>Noft Name</div>
                    <div>View attributes +</div>
                    <a href="" className={styles.buy_button + ' ' + styles.buy_button_front}>BUY</a>
                </div>
            </div>
            <div className={styles.card_back + ' ' + (props.opened ? styles.visible : styles.invisible)}>
                <div className={styles.close_button} onClick={() => props.onclick(props.cardId, false)}>-</div>
                <div className={styles.card_back_header}>
                    <img src="/images/pictures/card-hero.jpg" alt=""/>
                    <div className={styles.card_back_header_wrapper}>
                        <div className={styles.card_back_header_name}>Noft Name</div>
                        <div className={styles.card_back_stats_container}>
                            <div className={styles.card_back_stats}>
                                <div>1</div>
                                <div>GEN</div>
                            </div>
                            <div className={styles.card_back_stats}>
                                <div>22</div>
                                <div>EXP</div>
                            </div>
                            <div className={styles.card_back_stats}>
                                <div>3</div>
                                <div>LVL</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.card_back_main_stats}>
                    <div className={styles.card_back_main_stats_row}>
                        <img className={styles.card_back_main_stats_row_icon} src="/images/card-icons/vitality.svg" alt=""/>
                        <div className={styles.card_back_main_stats_row_name}>vitality</div>
                        <div className={styles.card_back_main_stats_row_stat}>10</div>
                    </div>
                    <div className={styles.card_back_main_stats_row}>
                        <img className={styles.card_back_main_stats_row_icon} src="/images/card-icons/power.svg" alt=""/>
                        <div className={styles.card_back_main_stats_row_name}>power</div>
                        <div className={styles.card_back_main_stats_row_stat}>20</div>
                    </div>
                    <div className={styles.card_back_main_stats_row}>
                        <img className={styles.card_back_main_stats_row_icon} src="/images/card-icons/vision.svg" alt=""/>
                        <div className={styles.card_back_main_stats_row_name}>vision</div>
                        <div className={styles.card_back_main_stats_row_stat}>30</div>
                    </div>
                    <div className={styles.card_back_main_stats_row}>
                        <img className={styles.card_back_main_stats_row_icon} src="/images/card-icons/agility.svg" alt=""/>
                        <div className={styles.card_back_main_stats_row_name}>agility</div>
                        <div className={styles.card_back_main_stats_row_stat}>40</div>
                    </div>
                    <div className={styles.card_back_main_stats_row}>
                        <img className={styles.card_back_main_stats_row_icon} src="/images/card-icons/speed.svg" alt=""/>
                        <div className={styles.card_back_main_stats_row_name}>speed</div>
                        <div className={styles.card_back_main_stats_row_stat}>50</div>
                    </div>
                    <div className={styles.card_back_main_stats_row}>
                        <img className={styles.card_back_main_stats_row_icon} src="/images/card-icons/luck.svg" alt=""/>
                        <div className={styles.card_back_main_stats_row_name}>luck</div>
                        <div className={styles.card_back_main_stats_row_stat}>60</div>
                    </div>
                    <div className={styles.card_back_main_stats_row}>
                        <img className={styles.card_back_main_stats_row_icon} src="/images/card-icons/grow-rate.svg" alt=""/>
                        <div className={styles.card_back_main_stats_row_name}>grow rate</div>
                        <div className={styles.card_back_main_stats_row_stat}>70</div>
                    </div>
                    <div className={styles.card_back_main_stats_row}>
                        <img className={styles.card_back_main_stats_row_icon} src="/images/card-icons/exp-rate.svg" alt=""/>
                        <div className={styles.card_back_main_stats_row_name}>exp rate</div>
                        <div className={styles.card_back_main_stats_row_stat}>80</div>
                    </div>
                </div>
                <a className={styles.buy_button} href="">Buy for 7.000 ERC721</a>
            </div>
        </div>
    )
}

export default HeroCard;