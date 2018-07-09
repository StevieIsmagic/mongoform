import React, { Component } from 'react';
import Form from './Form.js';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';

class App extends Component {
  state = {
    users: [],
    fields: {}
  };

  onSubmit = (fields) => {
    console.log('State from formComponent', fields)
    // this.setState({ fields: fields})
    this.getUpdatedDB();
  
  }

  componentDidMount() {
    this.callApi()
      .then(res => {
        console.log('CDM Response', res);
        this.setState({ users: res })})
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/users');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  }

  getUpdatedDB() {
    axios.get('/users')
      .then(res => res.data)
      .then(users => {
        this.setState({ users })
      })
      .catch(err => console.log(err));
  }

  render() {
    console.log("App.js Render State: ", this.state)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">MongoDB (M-Lab) Form</h1>
        </header>
        <p className="App-intro">
          Hey Try This Out: Updates List After POST / GET Request from MongoDB
        </p>
        <p>
          {this.state.users.map((user, i) => <li key={i}> {JSON.stringify(user, null, 2)} </li>)}
        </p>
        <Form onSubmit={fields => this.onSubmit(fields)} />
      </div>
    );
  }
}

export default App;
