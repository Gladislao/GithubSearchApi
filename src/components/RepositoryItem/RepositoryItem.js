import React from "react";
import "./RepositoryItem.css"

function RepositoryItem({repository}){
    return(
        <li className="repository-item">
            <img className="repository-item-avatar-url" src={repository.avatar_url} alt="repository avatar"></img>
            <a
            href={repository.html_url}
            target="_blank"
            rel="noopener noreferrer"
            >
            <p>{repository.login}</p>
            </a> 
        </li>
    )
}

export default RepositoryItem;