import React, { Component } from 'react';
import axios from 'axios';

class Test extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      data: [],
    };
  }
 
  componentDidMount() {
    const apiUrl = 'http://192.168.137.1:8080/';
    axios.get(apiUrl)
      .then(response => {
        this.setState({ data: response.data });
      })
      .catch(error => {
        console.error('Error for getting data', error);
      });
  }

  render() {
    return (
      <div>
        <h1>Data</h1>
        <ul>
          {/* {this.state.data.map(item => (
            <li key={item.id}>{item.data}</li>
          ))} */}
        </ul>
      </div>
    );
  }
}

export default Test;
