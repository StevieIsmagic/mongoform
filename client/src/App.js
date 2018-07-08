import React, { Component } from 'react';
import Form from './Form.js';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    response: {},
    fields: {}
  };

  onSubmit = (fields) => {
    console.log('State from formComponent', fields)
    this.setState({ fields: fields})
  }

  componentDidMount() {
    this.callApi()
      .then(res => {
        console.log('CDM Response', res);
        this.setState({ response: res })})
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/users');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  }

  render() {
    console.log("App.js render State: ", this.state.response)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          {/* {this.state.response} */}
        </p>
        <p>{JSON.stringify(this.state.response, null, 2)}</p>
        <Form onSubmit={fields => this.onSubmit(fields)} />
      </div>
    );
  }
}

export default App;
