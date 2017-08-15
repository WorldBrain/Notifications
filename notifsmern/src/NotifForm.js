import React from 'react';
import './css/form-style.css';

const NotifForm = ({ submitForm, updateTitle, updateBody }) => (
  <form onSubmit={submitForm}>
    <div>
    <input
      type="text"
      id="textboxid"
      placeholder="Notification Title"
      onChange={updateTitle} />
    </div>
    <div>
    <textarea
      id="bodytextid"
      placeholder="Notification Message"
      onChange={updateBody}>
    </textarea>
    </div>
    <div>
    <button label="Submit">
      Submit
    </button>
    </div>
  </form>
);

export default NotifForm;
