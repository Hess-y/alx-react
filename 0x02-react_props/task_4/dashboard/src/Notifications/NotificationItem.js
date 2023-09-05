import React from 'react';

const NotificationItem = ({ type, html, value }) => {
  return (
    <li data-notification-type={type}>
      <span dangerouslySetInnerHTML={{ __html: html }}></span>
      {value}
    </li>
  );
};

export default NotificationItem;
