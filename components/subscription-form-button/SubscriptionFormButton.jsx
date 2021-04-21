import styles from "./SubscriptionFormButtonStyle.module.css";
import React, { useState } from 'react';

const SubscriptionFormButton = (props) => {
    const [cannotAnimate, setCannotAnimate] = useState(true);
    const onClickCallback = () => {
        setCannotAnimate(false);
        props.onClickCallback();
        setTimeout(() => setCannotAnimate(true), 5000);
    }

    return (
        <div className={styles.button_container + " " + (props.dis && !cannotAnimate? styles.button_container_disabled : "")} onClick={onClickCallback}>
            <div className={styles.button_text + " " + (props.animated && !cannotAnimate && !props.dis? styles.animated : "")}>
                <div className={styles.sub_text}> {props.subscribeText}</div>
                <div className={styles.subed_text}> {props.subscribedText}</div>
            </div>
            <img className={styles.rocket + " " + (props.animated && !cannotAnimate && !props.dis? styles.animated : "")} src="/images/icons/rocket.svg" alt=""/>
            <div className={styles.button_left_padding}/>
            <div className={styles.button_right_padding}/>
        </div>
    )
}

export default SubscriptionFormButton;