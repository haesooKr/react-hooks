import React from 'react';
import useClick from './hooks/useClick';


function App() {
  const sayHello = () => console.log("say hello");
  const sayHi = () => console.log("say hi");
  const h1 = useClick(sayHello);
  const h2 = useClick(sayHi)
  return (
    <div className="App">
      <h1 ref={h1}>Hello</h1>
      <h2 ref={h2}>Hi</h2>
    </div>
  )
}

export default App;
