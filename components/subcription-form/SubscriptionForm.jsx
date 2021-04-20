import styles from './SubscribtionFormStyle.module.css';
import React, { useState } from 'react';
import SubscriptionFormButton from "../subscription-form-button/SubscriptionFormButton";

const SubscriptionForm =  ({ status, message, onValidated }) => {
    let email;
    const [internalError, setInternalError] = useState(false);
    const submit = () => {
        if (email && email.value.indexOf("@") > -1) {
            onValidated({
                EMAIL: email.value,
            });
            setInternalError(false);
        } else {
            setInternalError(true);
        }
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
            {status === "success" && <div className={styles.success} dangerouslySetInnerHTML={{ __html: message }}/>}
            {status === "error" && <div className={styles.error} dangerouslySetInnerHTML={{ __html: message }}/>}
            {internalError && <div className={styles.error}>Something went wrong. Please try again later</div>}
        </div>
    );
};

export default SubscriptionForm;