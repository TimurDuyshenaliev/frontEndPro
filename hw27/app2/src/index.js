import React from 'react';
import ReactDOM from 'react-dom/client';
import { Component } from 'react';

function CreateNewStack(state) {
  const {value} = state;
  return(
    <div>{value}</div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
class StackForm extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
  }
  addStack(event){
    event.preventDefault();
    this.setState({
      value: event.target[0].value
    }, () => event.target[0].value = '')
  }
  
  render() {
    const {value} = this.state;
    return(
    <>
      <div className="App">
        <p>Timur</p>
        <p>Duishenaliev</p>
        <p>Stack: </p>
      </div>
      
      <CreateNewStack value = {value}/>
      <form action="#" onSubmit={this.addStack.bind(this)}>
        <input type="text" />
          <button>Добавить</button>
      </form>
      </>)
  }
}

root.render(
  <StackForm />
  )