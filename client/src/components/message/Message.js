import React from 'react';
import { Body } from './message.styles';

const Message = ({ error = true, children }) => {
  return <Body error={error}>{children}</Body>;
};

export default Message;
