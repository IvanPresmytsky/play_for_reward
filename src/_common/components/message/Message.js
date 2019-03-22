import PropTypes from 'prop-types';
import React, { useEffect } from 'react';

import styles from './Message.css';

const Message = ({ message, redirect, timer }) => {
  useEffect(() => {
    const timerId = setTimeout(() => {
      redirect();
    }, timer);
    return () => clearTimeout(timerId);
  }, [redirect, timer]);

  return (
    <div className={styles.message}>
      {message}
    </div>
  );
};

Message.propTypes = {
  message: PropTypes.string.isRequired,
  redirect: PropTypes.func,
  timer: PropTypes.number,
};

export default Message;
