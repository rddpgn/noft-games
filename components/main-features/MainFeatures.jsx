import styles from "./MainFeaturesStyle.module.css";

const MainFeatures = () => {
    return (
        <section>
            <h2>FEATURES</h2>
            <div className={styles.features_block}>
                <div className={styles.image}>
                    <img className={styles.main_image} src="/images/pictures/red-chilipizdrik.png" alt=""/>
                </div>
                <div className={styles.features_row_container}>
                    <div className={styles.features_row}>
                        <div>Unique genome defines oblique and abilities</div>
                        <img src="/images/icons/genome.svg" alt=""/>
                    </div>
                    <div className={styles.features_row}>
                        <div>Ten qualities improve with each victory</div>
                        <img src="/images/icons/improvement.svg" alt=""/>
                    </div>
                    <div className={styles.features_row}>
                        <div>Crypto-value of character grows with they improvement</div>
                        <img src="/images/icons/qualities.svg" alt=""/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MainFeatures;