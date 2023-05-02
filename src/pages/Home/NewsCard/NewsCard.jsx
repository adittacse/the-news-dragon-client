import React from 'react';
import Card from 'react-bootstrap/Card';
import {Link} from "react-router-dom";
import "./NewsCard.css";
import Image from 'react-bootstrap/Image';
import moment from "moment";
import {FaRegBookmark, FaShareAlt, FaEye, FaRegStar, FaStar} from "react-icons/fa";
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';

const NewsCard = ({ news }) => {
    const {_id, title, details, image_url, author, rating, total_view } = news;
    
    return (
        <Card className="mb-4">
            <Card.Header className="d-flex align-items-center">
                <Image style={{width: "40px", height: "40px"}} src={author.img} roundedCircle />
                <div className="ps-3 flex-grow-1">
                    <p className="mb-0">{author?.name}</p>
                    <p><small>{moment(author?.published_date).format("YYYY-MM-D")}</small></p>
                </div>
                <div>
                    <FaRegBookmark></FaRegBookmark>
                    <FaShareAlt className="ms-2"></FaShareAlt>
                </div>
            </Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Img variant="top" src={image_url} />
                <Card.Text>
                    {
                        details.length < 250 ? <>{details}</> :
                            <>{details.slice(0, 250)}...<Link className="read-more" to={`/news/${_id}`}>Read More</Link></>
                    }
                </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted d-flex">
                <div className="d-flex flex-grow-1 align-items-center">
                    <Rating style={{ maxWidth: 100 }} value={Math.round(rating?.number) || 0} readOnly />
                    <span className="ms-2">{rating?.number}</span>
                </div>
                <div>
                    <FaEye></FaEye> <span className="ms-2">{total_view}</span>
                </div>
            </Card.Footer>
        </Card>
    );
};

export default NewsCard;