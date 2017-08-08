import React, { Component } from 'react';
import './css/form-style.css';

class NotifForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: '', text:''};
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
    console.log('${this.state.title} and "${this.state.body}"')
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type='text'
          placeholder='Notification Title'
          value={this.state.title}
          onChange={this.handleTitleChange} />
        <input
          type='text'
          placeholder='Notification message'
          value={ this.state.body }
          onChange={ this.handleBodyChange } />
        <input
          type='submit'
          value= 'Submit' />
      </form>
    )
  }
}

export default NotifForm;
