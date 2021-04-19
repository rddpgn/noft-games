import styles from "./HeaderStyle.module.css";
import IconTwitter from "../../public/images/icons/icon-twitter.svg";
import IconTelegram from "../../public/images/icons/icon-telegram.svg";

const twitterLink = '';
const telegramLink = '';

const Header = () => {
    return (
        <header className={styles.header}>
            <a href="" className={styles.logo_link}><img className={styles.logo_link_image} src="/images/logos/header-logo.svg"/></a>
            <a className={styles.social_network_link} href={twitterLink}><IconTwitter viewBox="0 0 40 40" className={styles.social_network_icon}/></a>
            <a className={styles.social_network_link} href={telegramLink}><IconTelegram viewBox="0 0 40 40" className={styles.social_network_icon}/></a>
            <a href="" className={styles.buy_link}>BUY NOFT</a>
        </header>
    )
}

export default Header;