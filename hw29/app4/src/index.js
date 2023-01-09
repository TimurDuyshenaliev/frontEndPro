import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { Header } from './сomponents/header';
import {Main} from './pages/Main';
import {Contact} from './pages/Contact';
import { ErrorBoundary } from './сomponents/ErrorBoundary';

const root = ReactDOM.createRoot(document.getElementById('root'));

function CreateNewStack(state) {
  const {value} = state;
  return(
    <div>{value}</div>
  )
}
class StackForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      value: this.state.value + ' ' + event.target[0].value
      },() => event.target[0].value = '');
    console.log(this.state.value.length);
    console.log(event.target[0].value)
  }
  
  render() {
    const {value} = this.state;
    console.log(value)
    return (
      <>
      <form onSubmit={this.handleSubmit}>
          <label>
            Stack:
            <input type="text"  onChange={this.handleChange} />
          </label>
          <button type="submit" disabled= { this.state.value.length < 5}> Add</button>
        </form></>
    );
  }
}

root.render(
  <ErrorBoundary>
     <BrowserRouter>
                    <Header/>
                    <><div className="App">
                      <p>Timur</p>
                      <p>Duishenaliev</p>
                      <p>Stack:</p>
                      <CreateNewStack />
                    </div></>
                    <Routes>
                        <Route path="/" element={<StackForm/>}/>
                        <Route path="/contact" element={<Contact/>}/>
                    </Routes>
                </BrowserRouter>
  </ErrorBoundary>
)