import styles from "./CoverStyle.module.css";

const Cover = () => {
    return (
        <div className={styles.cover}>
            <h1 className={styles.headline}>NOFT GAMES</h1>
            <h2 className={styles.headline}>New decentralized battle royale show</h2>
        </div>
    )
}

export default Cover;