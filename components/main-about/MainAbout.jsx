import styles from "./MainAboutStyle.module.css";

const aboutText = `The Noft Games is a cosmo-saga where you get characters, enjoy their battle and trade them.
                   This saga tells how 100 nofts have been closed on an astro ship and fight among themselves to survive.`;

const MainAbout = () => {
    return (
        <section className={styles.about}>
            <img className={styles.spaceship} src="/images/pictures/spaceship.png" alt=""/>
            <div>
                <h2>ABOUT</h2>
                <p className={styles.text}>{aboutText}</p>
            </div>
        </section>
    );
}

export default MainAbout;