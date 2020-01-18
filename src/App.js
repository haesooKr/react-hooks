import React from 'react';
import useBeforeLeave from './hooks/useBeforeLeave';


function App() {
  const begForLife = () => console.log("Please don't leave...");
  useBeforeLeave(begForLife);

  return (
    <div className="App">
    </div>
  )
}

export default App;
