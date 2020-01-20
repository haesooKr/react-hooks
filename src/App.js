import React from 'react';
import useAxios from './hooks/useAxios';


function App() {
  const {loading, error, data, refetch} = useAxios({url: "https://yts.lt/api/v2/list_movies.json"})
  console.log(`Loading: ${loading}\nError: ${error}\nData: ${JSON.stringify(data)}\n`);
  return (
    <div className="App">
      <h1>{data && data.status}</h1>
      <h2>{loading && "Loading"}</h2>
      <button onClick={refetch}>Refetch</button>
    </div>
  )
}

export default App;

