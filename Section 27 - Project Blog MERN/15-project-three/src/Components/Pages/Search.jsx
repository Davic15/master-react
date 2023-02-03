import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Request } from "../../helpers/Request";
import { Global } from "../../helpers/Global";
import { List } from "./List";

export const Search = () => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const params = useParams();

    useEffect(() => {
        getData();
    }, []);

    useEffect(() => {
        getData();
    }, [params]);

    const getData = async () => {
        const {data, loading} = await Request(Global.url + 'search/' + params.search, "GET");

        if(data.status === 'Success') {
            setArticles(data.articles);
        } else {
            setArticles([]);
        }
        setLoading(false)
    }

    return (
        <>
            {loading ? 'Loading...' : 
                articles.length >= 1 ? <List articles={articles} setArticles={setArticles} /> : <h1>No articles found</h1>
            }
        </>
    );
}
