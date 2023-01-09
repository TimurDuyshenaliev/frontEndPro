import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { Header } from './сomponents/header';
import {Contact} from './pages/Contact';
import { ErrorBoundary } from './сomponents/ErrorBoundary';

const root = ReactDOM.createRoot(document.getElementById('root'));

function CreateNewStack(state) {
  const {value} = state;
  return(
    <span>Stack:{value}</span>
  )
}
class StackForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      stack: ''
    };
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      stack: this.state.stack + ' ' + event.target[0].value
      },() => event.target[0].value = '');
  }
  
  render(){
    const {value, stack} = this.state;
    return(
      <form onSubmit={this.handleSubmit}>
        <CreateNewStack value ={stack}/>
        <br/>
        <label>
          New Stack:
          <input type="text" value={value} onChange={this.handleChange} />
        </label>
        <button type="submit" disabled= {value.length < 5}> Add</button>
      </form>
    );
  }
}

root.render(
  <ErrorBoundary>
    <BrowserRouter>
      <Header/>
      <>
        <div className="App">
          <p>Timur</p>
          <p>Duishenaliev</p>
        </div>
      </>
      <Routes>
        <Route path="/" element={<StackForm/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </BrowserRouter>
  </ErrorBoundary>
)