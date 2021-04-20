import styles from './SubscribtionFormStyle.module.css';
import React, { useState } from 'react';

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
            {status !== "error" && status !== "success" && <button className={styles.button} onClick={submit}>Submit</button>}
            {status === "error" && <button className={styles.button + " " + styles.button_disabled} onClick={submit}>Submit</button>}
            {status === "success" && <button className={styles.button}>Done</button>}
            {status === "success" && <div className={styles.success} dangerouslySetInnerHTML={{ __html: message }}/>}
            {status === "error" && <div className={styles.error} dangerouslySetInnerHTML={{ __html: message }}/>}
            {internalError && <div className={styles.error}>Something went wrong. Please try again later</div>}
            {status === "success" && <img className={styles.rocket} src="/images/icons/rocket.svg" alt=""/>}
        </div>
    );
};

export default SubscriptionForm;