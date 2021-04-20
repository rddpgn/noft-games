import styles from './SubscribtionFormStyle.module.css';

const SubscriptionForm =  ({ status, message, onValidated }) => {
    let email;
    const submit = () =>
        email &&
        email.value.indexOf("@") > -1 &&
        onValidated({
            EMAIL: email.value,
        });

    return (
        <div className={styles.form}>
            <input className={styles.input} ref={node => (email = node)} type="email" placeholder="Email"/>
            {status !== "error" && <button className={styles.button} onClick={submit}>{status === 'success' ? "Done" : "Submit"}</button>}
            {status === "error" && <button className={styles.button + " " + styles.button_disabled} onClick={submit}>{status === 'success' ? "Done" : "Submit"}</button>}
            {status === "success" && <div className={styles.success} dangerouslySetInnerHTML={{ __html: message }}/>}
            {status === "error" && <div className={styles.error} dangerouslySetInnerHTML={{ __html: message }}/>}
        </div>
    );
};

export default SubscriptionForm;