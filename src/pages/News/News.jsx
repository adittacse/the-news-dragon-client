import React from 'react';
import {Link, useLoaderData} from "react-router-dom";
import Card from "react-bootstrap/Card";
import {Button} from "react-bootstrap";
import {FaArrowLeft} from "react-icons/all.js";
import EditorsInsight from "../Home/News/EditorsInsight/EditorsInsight.jsx";

const News = () => {
    const news = useLoaderData();
    const {image_url, title, details, category_id} = news;
    
    return (
        <div>
            <Card className="p-4">
                <Card.Img variant="top" src={image_url} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{details}</Card.Text>
                    <Link to={`http://localhost:5173/category/${category_id}`}>
                        <Button style={{background: "#D72050", border: "none"}} variant="primary">
                            <FaArrowLeft></FaArrowLeft> All news in this category</Button>
                    </Link>
                </Card.Body>
            </Card>
            <h4 className="mt-5">Editors Insight</h4>
            <EditorsInsight></EditorsInsight>
        </div>
    );
};

export default News;