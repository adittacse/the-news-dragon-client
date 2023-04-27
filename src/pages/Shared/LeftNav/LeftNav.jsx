import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
// "../../../../public/data/categories.json"
// "http://localhost:3000/categories"

const LeftNav = () => {
    const [categories, setCategories] = useState([]);
    
    useEffect( () => {
        fetch("../../../../public/data/categories.json")
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(error => console.error(error));
    }, []);
    
    return (
        <div>
            <h4 className="mb-3">All Category</h4>
            <div className="ps-4">
                {
                    categories.map(category => <p key={category.id}>
                        <Link to={`/category/${category.id}`} className="text-secondary text-decoration-none">{category.name}</Link>
                    </p>)
                }
            </div>
        </div>
    );
};

export default LeftNav;