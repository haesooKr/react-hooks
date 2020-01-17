import React from 'react';
import useInput from './hooks/useInput';

function App() {
  const noA = value => !value.includes('a');
  const name = useInput("Mr.", noA);

  return (
    <div className="App">
      <h1>Hello</h1>
      <input onChange={name.onChange} placeholder="Name" value={name.value}/>
    </div>
  );
}

export default App;
