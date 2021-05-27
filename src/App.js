import React, { useEffect, useState } from 'react';
import RepositoryItem from "./components/RepositoryItem/RepositoryItem"
import Pagination from "./components/Pagination/Pagination"
import './App.css';


function getTotalCount(totalCount, username){
  return totalCount === 0 ? `We couldn’t find any user matching ${username}` : `Total count: ${totalCount}`
}


function App() {
  const [username, setUsername] = useState("");
  const [totalCount, setTotalCount] = useState();
  const [results, setResults] = useState([]);
  const [pageNumber, setPageNumber] = useState(1)
  
  function handleChange(event){
    setUsername(event.target.value)
  }

  function getData(pageNumber){
    fetch(`https://api.github.com/search/users?q=${username}&page=${pageNumber}`).then(response => response.json())
    .then(results => {
      setResults(results.items)
      setTotalCount(results.total_count)}
  )}

  function handlePagination(number){
    setPageNumber(number)
  }

  useEffect(()=>{
    getData(pageNumber)
  }, [pageNumber])

  

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Search Github User
        </h1>
      </header>
      <form>
        <input type="text" name="username" value={username} placeholder="Search Github User" onChange={handleChange}/>
        <button onClick={getData} type="button">Search</button>
      </form>
      <p>{totalCount && getTotalCount(totalCount, username)}</p>
      <ul>
        {results?.map(result => <RepositoryItem repository={result} />)}
      </ul>
      <Pagination totalCount={totalCount} handlePagination={handlePagination}/>
    </div>
  );
}

export default App;
