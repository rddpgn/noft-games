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
        setTimeout(() => setShowMesage(false), 16000);
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
            {showMessage && <div className={(status === "error" || internalError) ? styles.error : styles.success} dangerouslySetInnerHTML={{ __html: !internalError ? message : "Something went wrong. Please try again later"}}/>}
        </div>
    );
}

export default SubscriptionForm;