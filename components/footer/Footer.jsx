import styles from "./FooterStyle.module.css";
import IconTwitter from "../../public/images/icons/icon-twitter.svg";
import IconTelegram from "../../public/images/icons/icon-telegram.svg";
import MailchimpSubscribe from "react-mailchimp-subscribe"
import SubscriptionForm from "../subcription-form/SubscriptionForm";

const twitterLink = '//twitter.com/noftgames';
const telegramLink = '//t.me/noftgames';
const subscriptionLink = "//yandex.us1.list-manage.com/subscribe/post?u=6f2e045922cbfbbb5db446716&amp;id=32b2484365";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer_main}>
                <div>
                    <h2>KEEP IN TOUCH</h2>
                    <div className={styles.subscribe_text}>Subscribe not to miss the start of sales:</div>
                    <div id="subscribe-form">
                        <MailchimpSubscribe
                            url={subscriptionLink}
                            render={({ subscribe, status, message }) => (
                                <SubscriptionForm
                                    status={status}
                                    message={message}
                                    onValidated={formData => subscribe(formData)}
                                />
                            )}
                        />
                    </div>
                </div>
                <div className={styles.links}>
                    <span>Follow us:</span>
                    <a className={styles.social_network_link} href={twitterLink} target='_blank'><IconTwitter viewBox="0 0 40 40" className={styles.social_network_icon}/></a>
                    <a className={styles.social_network_link} href={telegramLink} target='_blank'><IconTelegram viewBox="0 0 40 40" className={styles.social_network_icon}/></a>
                </div>
            </div>
            <div className={styles.subfooter}>
                2021 Noft Games
            </div>
        </footer>
    )
}

export default Footer;