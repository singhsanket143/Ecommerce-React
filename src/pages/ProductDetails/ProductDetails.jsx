// CSS imports
import { useNavigate, useParams } from 'react-router-dom';
import './ProductDetails.css';
import { useContext, useEffect, useState } from 'react';
import { addProductToUserCart, getProduct } from '../../apis/fakeStoreProdApis';
import axios from 'axios';
import userContext from '../../context/userContext';
import CartContext from '../../context/CartContext';

function ProductDetails() {
    const {id} = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);
   
    const {user} = useContext(userContext);
    const {setCart} = useContext(CartContext);
    async function downloadProduct(id) {
        const response = await axios.get(getProduct(id));
        setProduct(response.data);
        console.log(response.data);
    }

    async function addProductToCart() {
        if(!user) return;
        const response = await axios.put(addProductToUserCart(), {userId: user.id, productId: id});
        setCart({...response.data});
        navigate(`/cart/${user.id}`);
    }

    useEffect(() => {
        downloadProduct(id);
    }, []);

    return (
        product && 
        <div className="container">
            <div className="row">
                <div className="product-details-wrapper d-flex justify-content-between align-items-start flex-row">
                    <div className="product-img d-flex">
                        <img 
                            src={product.image}
                            alt="product image" 
                            id="product-img" 
                        />
                    </div>

                    <div className="product-details-box d-flex flex-column">
                        <div id="productDetails">
                            {/* <!-- product details --> */}
                            <div className="product-name" id="product-name">{product.title}</div>
                            <div className="product-price fw-bold" id="product-price">{product.price}</div>
                            <div className="product-description">
                                <div className="product-description-title fw-bold">Description</div>
                                <div className="product-description-data" id="product-description-data">
                                {product.description}
                                </div>
                            </div>
                        </div>

                        <div className="product-details-action btn btn-primary text-decoration-non" onClick={addProductToCart}>Add to cart</div>
                        <a href="cart.html" id="goToCartBtn" className="product-details-action btn btn-warning text-decoration-none">
                            Go to cart
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetails;