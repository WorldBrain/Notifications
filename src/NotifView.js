import React from 'react';
import NotifForm from './NotifForm';
import NotifList from './NotifList';

//define env var that specifies path for fetch api based on the production or dev environment
const API_BASE_URL = process.env.REACT_APP_API === 'development' ? '//localhost:4002' : '';
console.log('You are running this app in {process.env.NODE_ENV}', process.env.NODE_ENV);
console.log('You are running this app in {process.env}', process.env);

//parent component that renders both the NotifForm and NotifList
export default class NotifView extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: '', body:'', notification: [] };
  }


  //fetch notifications after first mount
  componentDidMount() {
    //calls fetch function passing in template literal with expression containing baseurl api path
    fetch(`${API_BASE_URL}/api/notifications`, { mode:'cors' }) //allows cross-origin requests
    .then(response => response.json()) //transform data into json
    .then(notifications => this.setState(() =>
      ({ notifications: notifications.reverse() })))//calling .reverse to list notifs in reverse chronologic order
    .catch(error => console.log(error));
  }

  //fetches list of notifcations from API, and re-renders list each time a new notif is submitted in NotifForm
  submit(e) {
      this.setState(({ title, body, notifications }) => {
        return {
          title: '',
          body: '',
          notifications: [{ title, body, date:
            (new Date()).toISOString() }].concat(notifications),
        };
      });

      e.preventDefault(); //prevents default action of submit button from submitting a form
      e.target.reset(); //reset event is fired when form is reset, clearing form

      //fetch method takes one argument: the notifications API path, then returns a promise that resolves to a response to that request
      fetch(`${API_BASE_URL}/api/notifications`, {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          title: this.state.title,
          body: this.state.body,
        }) //declare body content type as JSON and how it should be handled
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
    const { notifications } = this.state; //object destructuring: assigns this.state.notifications to the local const notifications

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
