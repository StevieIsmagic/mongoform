import React, { Component} from 'react';
import axios from 'axios';


class Form extends Component {
  state = {
    firstName: '',
    lastName: '',
    email: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault();

    axios.post('/users', this.state)
      .then(res => console.log('axios response', res))
      .catch(err => console.log(err))

    this.props.onSubmit(this.state)
    console.log(this.state);
    this.setState({
      firstName: '',
      lastName: '',
      email: ''
    })
  }






  render() {
    return (
      <div>
        <h1>M-Lab Database</h1>
        <form>
          <input
            name="firstName"
            placeholder="First Name"
            value={this.state.firstName}
            onChange={e => this.handleChange(e)}
          />
          <input 
            name="lastName"
            placeholder="Last Name"
            value={this.state.lastName}
            onChange={e => this.handleChange(e)}
          />
          <input 
            name="email"
            placeholder="E-Mail Address"
            value={this.state.email}
            onChange={e => this.handleChange(e)}
          />
         
          <button onClick={(e) => this.handleSubmit(e)}> SUBMIT </button>
        </form>
      </div>
    )
  }
}

export default Form;