import React from 'react';
import './css/list-style.css';
// import data from './data/data';

class List extends React.Component {
  constructor(){
    super();
    this.state = {items: []};
  }
  componentDidMount(){
    //calls fetch function passing in url of api
    fetch('http://localhost:4001/api/notifications', {mode:'cors'})
    .then( response => response.json()) //transform data into json
    .then( results => this.setState(() => ({ results })))
    .catch(function(error){
      console.log(error);

    })
    // .then( out => {
    //   console.log(out);
    // })

  }
  render() {
    const { results } = this.state
      return (
        <div>

          {results && results.map(result => //if results exist, then map results
            <div>
            <h3 key={result.date}>{result.date}</h3>
            <h1 key={result.title}>{result.title}</h1>
            <h3 key={result.id}>{result.id}</h3>
            <h3 className="bodytext" key={result.body}>{result.body}</h3>
          </div>)}

          {/* {items.map(item => {item.id}>{item.title}: {item.body} {item.date} {item.views})} */}
         </div>
      )
    }
  }


export default List
