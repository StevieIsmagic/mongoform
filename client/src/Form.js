import React, { Component} from 'react';


class Form extends Component {
  state = {
    firstName: '',
    lastName: '',
    email: ''
  }


  render() {
    return (
      <div>
        <h1>M-Lab Database</h1>
        <form>
          <input
            placeholder="First Name"
            value={this.state.firstName}
            onChange={event => this.setState({firstName: event.target.value})}
          />
          <input 
            placeholder="Last Name"
            value={this.state.lastName}
            onChange={event => this.setState({lastName: event.target.value})}
          />
          <input 
            placeholder="E-Mail Address"
            value={this.state.email}
            onChange={event => this.setState({email: event.target.value})}
          />
         
          <button onClick={(e) => this.onSubmit(e)}> SUBMIT </button>
        </form>
      </div>
    )
  }
}

export default Form;