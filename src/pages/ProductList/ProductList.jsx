// CSS import
import './ProductList.css';

// Image import
import ProductImage from '../../assets/product.jpg'
import ProductBox from '../../components/ProductBox/ProductBox';
import FilterProducts from '../../components/FilterProducts/FilterProducts';

function ProductList() {
    return (
        <div className='container'>
            <div className='row'>
                <h2 className='product-list-title text-center'>All Products</h2>
                <div className='product-list-wrapper d-flex flex-row'>


                    <FilterProducts />

                    {/* list of products */}
                    <div className='product-list-box' id='productList'>

                        <ProductBox productImage={ProductImage} name={"dummy"} price={1000} />

                    </div>


                </div>
            </div>
        </div>
    )
}

export default ProductList;