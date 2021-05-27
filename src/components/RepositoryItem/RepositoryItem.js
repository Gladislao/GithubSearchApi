import React from "react";

function RepositoryItem({repository}){
    return(
        <li className="repository-item">
            <img className="avatar-url" src={repository.avatar_url} alt="repository avatar"></img>
            <a
            href={repository.html_url}
            target="_blank"
            rel="noopener noreferrer"
            >
            {repository.login}
            </a> 
        </li>
    )
}

export default RepositoryItem;