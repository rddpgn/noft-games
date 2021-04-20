import styles from "./SubscriptionFormButtonStyle.module.css";

const SubscriptionFormButton = (props) => {
    return (
        <div className={styles.button_container + " " + (props.dis ? styles.button_container_disabled : "")} onClick={props.onClickCallback}>
            <div className={styles.button_text + " " + (props.animated ? styles.animated : "")}>
                <div className={styles.sub_text}> {props.subscribeText}</div>
                <div className={styles.subed_text}> {props.subscribedText}</div>
            </div>
            <img className={styles.rocket + " " + (props.animated ? styles.animated : "")} src="/images/icons/rocket.svg" alt=""/>
            <div className={styles.button_left_padding}/>
            <div className={styles.button_right_padding}/>
        </div>
    )
}

export default SubscriptionFormButton;