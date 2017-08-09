import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import NotifForm from './NotifForm';
import Table from './NotifTable';
import List from './NotifList';
// import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Table />, document.getElementById('root1'));

ReactDOM.render(<NotifForm />, document.getElementById('root2'));

ReactDOM.render(<List />, document.getElementById('root3'));
