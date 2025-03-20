"use client"
import styles from './wiki.module.css'
import { useParams } from 'next/navigation';
import { retrieveWiki } from '@/data/wiki';
import { useState, useEffect } from 'react';
import { listArticles } from '@/data/article';

export default function Page() {

    const [wiki, setWiki] = useState(
        {
            id: 0,
            title: "",
            is_draft: false,
            image: null,
            user: 0,
            topic: 0
        }
    )

    const [articles,setArticles] = useState(
        [
            {
                id: 0,
                title: "",
                text: "",
                position: 0,
                is_editing: false,
                image: null,
                wiki: 0
            }
        ]
    )
    
    const params = useParams();
    const id = params.id; 

    useEffect(() => {
        retrieveWiki({wikiId:`${id}`})
            .then((res)=>setWiki(res))
    },[])

    useEffect(() => {
        listArticles({wikiId:`${id}`})
            .then((res)=>setArticles(res))
    },[])

    return (

        <main>

            <h1>{wiki.title}</h1>
            {articles.map((article) => 
                <article key={`section${article.id}`}>
                    <h1>{article.title}</h1>
                    <p>{article.text}</p>
                </article>
            )}

        </main>
    );
}