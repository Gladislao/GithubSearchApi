import React from "react"

function Pagination ({totalCount, handlePagination}){
  console.log("totalCount", totalCount)
  const limit = 30;  //Default value used by Github Search API 
  const pageNumbers = []
  const numberOfPages = Math.ceil(totalCount/limit)
  
  
  for(let i=1; i<= numberOfPages; i++){
    pageNumbers.push(i)
  }
  return (
  <nav>
    <ul>
      {pageNumbers.map(number => (
        <li key={number}>
          <a onClick={handlePagination(number)} href='!#'>
            {number}
          </a>
        </li>))}
    </ul>
  </nav>)
  }

export default Pagination;