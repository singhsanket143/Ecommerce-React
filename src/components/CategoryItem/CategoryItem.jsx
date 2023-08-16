import { Link } from "react-router-dom";

function CategoryItem({ itemName, filter='' }) {

    const redirectLink = `/products?category=${filter}`;

    return (
        <div className="category-item d-flex align-items-center justify-content-center">
            <Link to={redirectLink}>{itemName}</Link>
        </div>
    );

}

export default CategoryItem;