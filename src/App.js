import React, { useState } from 'react';
import RepositoryItem from "./components/RepositoryItem/RepositoryItem"
import Pagination from "./components/Pagination/Pagination"
import './App.css';


function getTotalCount(totalCount, username){
  return totalCount === 0 ? `We couldn’t find any user matching ${username}` : `Total count: ${totalCount}`
}

function App() {
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [totalCount, setTotalCount] = useState(null);
  const [results, setResults] = useState([]);

  function handleChange(event){
    setUsername(event.target.value)
  }

  function getData(pageNumber){
    setLoading(true)
    fetch(`https://api.github.com/search/users?q=${username}&page=${pageNumber}`).then(response => response.json())
    .then(results => {
      setResults(results.items)
      setTotalCount(results.total_count)
      setLoading(false)}
  )}

  function handlePagination(number){
    setLoading(true)
    fetch(`https://api.github.com/search/users?q=${username}&page=${number}`).then(response => response.json())
    .then(results => {
      setResults(results.items)
      setLoading(false)}
  )
  }

  return (  
    <div className="App">
      <header className="App-header">
        <h1>
          Search Github User
        </h1>
      </header>
      <form onSubmit={getData}>
        <input type="text" name="username" value={username} placeholder="Search Github User" onChange={handleChange}/>
        <button type="button" onClick={getData}>Search</button>
      </form>
     {loading ? <span>loading...</span> : 
      <div>
        <p>{totalCount && getTotalCount(totalCount, username)}</p>
        <ul>
          {results?.map((result, index) => <RepositoryItem repository={result} key={index}/>)}
        </ul>
      </div>}
      <Pagination totalCount={totalCount} handlePagination={handlePagination}/>
    </div>
  );
}

export default App;
