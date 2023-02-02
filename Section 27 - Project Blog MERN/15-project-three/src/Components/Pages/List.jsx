import React from 'react';
import { Global } from '../../helpers/Global';

export const List = ({articles, setArticles}) => {
    return (
        articles.map(article => {
            return(
                <article className="article-item" key={article._id}>
                    <div className="mask">
                        {article.image != 'default.png' && <img src={Global.url + 'image/' + article.image} alt={article.title} />}
                        {article.image == 'default.png' && <img src={Global.url + 'image/' + article.image} alt={article.title} />}
                    </div>
                    <div className="data">
                        <h3 className="title">{article.title}</h3>
                        <p className="description">{article.content}</p>
                        <button className="edit">Edit</button>
                        <button className="delete">Delete</button>
                    </div>
                </article>
            );
        } 
    )
    )
}
