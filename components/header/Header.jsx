import styles from "./HeaderStyle.module.css";
import IconTwitter from "../../public/images/icons/icon-twitter.svg";
import IconTelegram from "../../public/images/icons/icon-telegram.svg";
import ScrollToForm from "../../scripts/ScrollToForm";

const twitterLink = '//twitter.com/noftgames';
const telegramLink = '//t.me/noftgames';

const Header = () => {
    return (
        <header className={styles.header}>
            <a href="" className={styles.logo_link}><img className={styles.logo_link_image} src="/images/logos/header-logo.svg"/></a>
            <a className={styles.social_network_link} href={twitterLink} target='_blank'><IconTwitter viewBox="0 0 40 40" className={styles.social_network_icon}/></a>
            <a className={styles.social_network_link} href={telegramLink} target='_blank'><IconTelegram viewBox="0 0 40 40" className={styles.social_network_icon}/></a>
            <a className={styles.buy_link} style={{cursor:"pointer"}} onClick={ScrollToForm}>BUY NOFT</a>
        </header>
    )
}

export default Header;