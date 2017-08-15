import React from 'react';
import './css/list-style.css';

const NotifList = ({ notifications }) => (
  <div>
    {notifications.map(({ id, date, title, body }) => (//if notifications exist, then map notifications
      <div key={date}>
        <h1>{title}</h1>
        <h3 className="bodytext">{body}</h3>
      </div>
    ))}
  </div>
);

NotifList.defaultProps = {
  notifications: [],
};

export default NotifList;
