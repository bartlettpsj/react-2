import { Component } from 'react';

class Hello extends Component {
  constructor(props) {
    super(props)
    this.submit = this.submit.bind(this)
  }
  submit(e) {
    e.preventDefault();
    alert('got it');
    this.refs._name.value = 'Paul'
  }
  render() {
    return (
      <form onSubmit={this.submit}>
        <label htmlFor="thename">Enter Name:</label>
        <input id="thename" ref="_name" type="text" placeholder="Enter Name"></input>
        <input type="color" ref="_color" required="true"></input>
        <button>Add</button>
      </form>
    )
  }
}

export default Hello;