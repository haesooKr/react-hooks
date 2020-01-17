import React from 'react';
import useTitle from './hooks/useTitle';


function App() {
  const titleUpdate = useTitle('Loading...');
  const time = async () => {
    console.log('timer start')
    await setTimeout(() => {
      titleUpdate('Haesoo')
      console.log('title changed');
    }, 5000);
  }
  return (
    <div className="App">
      <button onClick={() => time()}>Title</button>
    </div>
  );
}

export default App;
