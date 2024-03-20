import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <div>
            {
                categories.map(category => <Link to={`${category.id}`} className="btn block text-xl mb-8" key={category.id}>{category.name}</Link>)
            }
        </div>
    );
};

export default LeftSideNav;