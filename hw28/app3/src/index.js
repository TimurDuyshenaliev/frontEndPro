import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState } from 'react';

const root = ReactDOM.createRoot(document.getElementById('root'));

function AddStack(event){
  const [state, setState] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setState(
      {
      value: [state.value] + ' ' + event.target[0].value
      },
      event.target[0].value = '');
  }
  
  return(
    <>
      <div className="App">
        <p>Timur</p>
        <p>Duishenaliev</p>
        <p>Stack: </p>
        <div>{state.value}</div>
      </div>
      <form action="#" onSubmit={handleSubmit}>
        <input type="text"/>
          <button>Добавить</button>
      </form>
      </>)
}

export default AddStack;

root.render(
  <AddStack/>
)