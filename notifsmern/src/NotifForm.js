import React from 'react';
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
          onChange={this.handleTitleChange} />
        </div>
        <div>
        <textarea
          id='bodytextid'
          placeholder='Notification Message'
          value={ this.state.body }
          onChange={ this.handleBodyChange }>
        </textarea>
        </div>
        <div>
        <button type='submit'
          value= 'Submit'> Submit
        </button>
        </div>
      </form>
    )
  }
}

export default NotifForm;
