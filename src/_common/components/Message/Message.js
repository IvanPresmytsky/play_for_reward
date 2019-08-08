import PropTypes from 'prop-types';
import React, { useEffect } from 'react';

const Message = ({ message, redirect, timer }) => {
  useEffect(() => {
    const timerId = setTimeout(() => {
      redirect();
    }, timer);
    return () => clearTimeout(timerId);
  }, [redirect, timer]);

  if (!message) return null;

  return (
    <div>{message}</div>
  );
};

Message.defaultProps = {
  message: null,
  redirect: () => null,
  timer: 0,
};

Message.propTypes = {
  message: PropTypes.string,
  redirect: PropTypes.func,
  timer: PropTypes.number,
};

export default Message;
