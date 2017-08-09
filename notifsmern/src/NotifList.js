import React from 'react';
import data from './data/data';

class List extends React.Component {
  render() {
    // console.log('all notifications listed:', this.props.data)

    const {data} = this.props;
    // grabs props from data list in notedata.js
    const titleList = data.map(title => {
      // grab data from array by looping through array using .map method
      return (
        <li key={title.id}>{title.title}: {title.body} {title.date} {title.views}</li>
        // for each title, output id, title, body, etc
      )
    })
    return (
      <div className="notificationList">
        <p>Notification List Title</p>
        <ul>
          <li>{titleList}</li>
        </ul>
      </div>
      // Pass through {titleList} to display all the data specified under const titleList
    );
  }
}

export default List
