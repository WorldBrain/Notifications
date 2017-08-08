import React, {Component, PropTypes} from 'react';
import Notification from './notification';

class NotifList extends React.Component {
  render() {
    let notificationNodes = this.props.data.map(notification => {
      return (
        <Notification title={ notification.title } key={ notification.id }>
          { notification.body}
        </Notification>
      )
    })
    return (
      <div className="notifList">
        <p>Notification List</p>
        <ul>
          <li> {notificationNodes} </li>
        </ul>
      </div>
    );
  }
}

// export default NotifList;
