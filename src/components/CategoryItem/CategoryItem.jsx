function CategoryItem({ itemName }) {
    return (
        <div className="category-item d-flex align-items-center justify-content-center">
            <a href="productList.html">{itemName}</a>
        </div>
    );

}

export default CategoryItem;