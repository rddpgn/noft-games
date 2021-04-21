import styles from './SubscribtionFormStyle.module.css';
import React, { useState, useRef } from 'react';
import SubscriptionFormButton from "../subscription-form-button/SubscriptionFormButton";

const SubscriptionForm =  ({ status, message, onValidated }) => {
    let email;
    const [internalError, setInternalError] = useState(false);
    const [showMessage, setShowMesage] = useState(false);

    const submit = () => {
        if (email && email.value.indexOf("@") > -1) {
            onValidated({
                EMAIL: email.value,
            });
            setInternalError(false);
        } else {
            setInternalError(true);
            email.value = '';
        }
        setShowMesage(true);
        setTimeout(() => setShowMesage(false), 10000);
        setTimeout((email) => email.value = '', 1000, email);
    }

    return (
        <div className={styles.form}>
            <input className={styles.input} ref={node => (email = node)} type="email" placeholder="Email"/>
            <SubscriptionFormButton onClickCallback={submit}
                                    subscribeText="Subscribe"
                                    subscribedText="Done"
                                    dis={status === "error" || internalError}
                                    animated={status === "success"}
            />
            {showMessage && status === "success" && <div className={styles.success} dangerouslySetInnerHTML={{ __html: message }}/>}
            {showMessage && status === "error" && <div className={styles.error} dangerouslySetInnerHTML={{ __html: message }}/>}
            {showMessage && status !== "error" && internalError && <div className={styles.error}>Something went wrong. Please try again later</div>}
        </div>
    );
}

export default SubscriptionForm;