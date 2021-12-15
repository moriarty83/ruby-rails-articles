import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';

function Articles (props){

    const [articles, setArticles] = useState(null)

    const token = localStorage.getItem("jwt") ? "Bearer " + localStorage.getItem("jwt") : undefined;

    const getArticles = async () =>{

            
        console.log(token)
        const response = await fetch(`${props.url}articles`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json', 'Authorization': token }})
        
        setArticles(await response.json(response))
        }

    const loading = ()=>{
        return(
            <h1>Loading</h1>
        )
    }

    const loaded = ()=>{
        console.log(articles)
        return(
            <p>{JSON.stringify( articles)}</p>
        )
    }
    
    useEffect(() => getArticles(), []);

        
    return(
        <div>
            <h1>Articles</h1>
            {articles ? loaded() : loading()}
        </div>
    )
}

export default Articles