import React from 'react';

import styles from './Notification.module.css';

Notification = ({message}) => {
    return (
        <p className={styles.notification}>{message}</p>
    )
}

export default Notification;