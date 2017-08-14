import React from 'react';
import './css/form-style.css';

class NotifForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: '', body:''};
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleBodyChange = this.handleBodyChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleTitleChange(e){
    this.setState({ title: e.target.value});
  }
  handleBodyChange(e) {
    this.setState({ body: e.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();
    // let reqBody = {
    //   title: this.refs.title.value,
    //   body: this.refs.body.value,
    // };

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
        console.log(this.state.title);
        console.log(this.state.body);

        console.log(json);
      })
    // console.log('${this.state.title} and "${this.state.body}"')
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
        <input
          type='text'
          id='textboxid'
          placeholder='Notification Title'
          value={this.state.title}
          onChange={this.handleTitleChange.bind(this)} />
        </div>
        <div>
        <textarea
          id='bodytextid'
          placeholder='Notification Message'
          value={ this.state.body }
          onChange={ this.handleBodyChange.bind(this) }>
        </textarea>
        </div>
        <div>
        <button type='button'
          label= 'Submit'
          onClick={this.handleSubmit}>Submit
        </button>
        </div>
      </form>
    )
  }
}

export default NotifForm;
