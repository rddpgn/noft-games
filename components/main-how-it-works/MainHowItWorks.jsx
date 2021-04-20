import styles from "./MainHowItWorks.module.css";

const MainHowItWorks = () => {
    return (
        <section>
            <h2>HOW IT WORKS</h2>
            <div className={styles.cards_container}>
                <div className={styles.card}>
                    <img src="/images/pictures/ebalo.png" alt="" className={styles.card_image}/>
                    <p className={styles.card_text}>Non Fungible<br/>Token standard</p>
                </div>
                <div className={styles.card}>
                    <img src="/images/pictures/swords.png" alt="" className={styles.card_image}/>
                    <p className={styles.card_text}>Battle royal show managed<br/>programmatically</p>
                </div>
                <div className={styles.card}>
                    <img src="/images/pictures/gearhead.png" alt="" className={styles.card_image}/>
                    <p className={styles.card_text}>Victory as opportunity to get<br/>experience and improve abilities</p>
                </div>
            </div>
            <div className={styles.link_container}>
                <a href="#subscribe-form" className={styles.link}>TAKE A CHANCE</a>
            </div>
        </section>
    )
}

export default MainHowItWorks;