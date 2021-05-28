import React, {useMemo} from "react"
import "./Pagination.css"

const DEFAULT_GITHUB_LIMIT = 30;  //Default value used by Github Search API 

function Pagination ({totalCount, handlePagination}){
  
  const numberOfPages = Math.ceil(totalCount/DEFAULT_GITHUB_LIMIT)
  const pageNumbers = useMemo(() => {
    let numbers = []
    if(Math.ceil(totalCount/DEFAULT_GITHUB_LIMIT)) {
     for(let i=1; i<= numberOfPages; i++){
      numbers.push(i)
      }
    } 
   return numbers
  }, [totalCount, numberOfPages])

  return (
  <nav >
    <ul className="pagination-list" >
      {pageNumbers?.map(number => (
        <li key={number} className="pagination-list-item">
          <a onClick={()=>handlePagination(number)} href='!#'>
            {number}
          </a>
        </li>))}
    </ul>
  </nav>)
  }

export default Pagination;