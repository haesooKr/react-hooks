import React from 'react';
import useNotification from './hooks/useNotification';


function App() {
  const triggerNotification = useNotification("Can I have your name?", { body: "Hello Haesoo" });
  return (
    <div className="App">
      <button onClick={triggerNotification}>Hello</button>
    </div>
  )
}

export default App;

