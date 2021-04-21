import styles from "./HeroCardMinStyle.module.css";

const HeroCardMin = (props) => {
    return (
        <div className={styles.hero_container}>
            <img className={styles.hero_img} src={props.cardImage} alt=""/>
            <div className={styles.text}>It's coming..</div>
        </div>
    )
}

export default HeroCardMin;