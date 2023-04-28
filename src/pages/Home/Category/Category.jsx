import React from 'react';
import {useLoaderData, useParams} from "react-router-dom";
import NewsCard from "../NewsCard/NewsCard.jsx";

const Category = () => {
    const categoryNews = useLoaderData();
    
    return (
        <div>
            <h4>Dragon News</h4>
            {
                categoryNews.map(news => <NewsCard key={news._id} news={news}></NewsCard>)
            }
        </div>
    );
};

export default Category;