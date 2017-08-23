import React from 'react';
import NotifForm from './NotifForm';
import NotifList from './NotifList';

export default class NotifView extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: '', body:'', notification: [] };
  } // NotifView is parents component that defines state.  State can be changed by event firing, and updated/changed data is passed down via props to nested components

  componentDidMount() {
    //calls fetch function passing in url of api
    fetch('http://localhost:4002/api/notifications', {mode:'cors'})
    .then(response => response.json()) //transform data into json
    .then(notifications => this.setState(() => ({ notifications: notifications.reverse() })))
    .catch(error => console.log(error));
  }

  submit(e) {
      // upon event firing, the component's state will be changed.  this.setState passes in properties that will be changed.
      this.setState(({ title, body, notifications }) => {
        return {
          title: '',
          body: '',
          notifications: [{ title, body, date: (new Date()).toISOString() }].concat(notifications),
        }; 
      });

      e.preventDefault();
      e.target.reset();

      fetch("http://localhost:4002/api/notifications", {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          title: this.state.title,
          body: this.state.body,
        })
      })
        .then((res) => {
          if (res.ok) {
            return res.json();
          } else {
            throw new Error ('fetch problems');
          }
        }).then((json) => {
          console.log(json);
        })

  }

  render() {
    const { notifications } = this.state;

    return (
      <div>
        <NotifForm
          submitForm={e => this.submit(e)}
          updateTitle={({ target: { value: title } }) => this.setState(() => ({ title }))}
          updateBody={({ target: { value: body } }) => this.setState(() => ({ body }))}
        />
        <NotifList notifications={notifications} />
      </div>
    );
  }
}
