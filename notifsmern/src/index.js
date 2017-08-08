import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import data from './data/notifdata';
import NotifForm from './NotifForm';
import NotifTable from './NotifTable';
// import NotifList from './NotifList';


ReactDOM.render(<NotifForm />,
  document.getElementById('root1')
);


ReactDOM.render(<NotifTable data={data}/>,
   document.getElementById('root2')
 );

 // ReactDOM.render(<NotifList />,
 //  document.getElementById('root3')
 // );
