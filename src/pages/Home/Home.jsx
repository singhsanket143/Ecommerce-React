// CSS imports
import './Home.css';

import CategoryItem from '../../components/CategoryItem/CategoryItem';
import useCategory from '../../hooks/useCategory';
import useCart from '../../hooks/useCart';
import { useContext, useEffect } from 'react';
import UserContext from '../../context/userContext';

function Home() {

    const [categories] = useCategory();
    const {user} = useContext(UserContext);
    const [cart] = useCart(user ? user.id : undefined);

    useEffect(() => {
    }, [user]);

    return (
        <div className="container welcome-wrapper">
            <div className="row">
                <h2 className="home-title text-center">Welcome to Shop Cart</h2>
                <div className="category-list d-flex flex-row justify-content-between align-items-center" id="categoryList">
                    
                    <CategoryItem itemName="All Products" />

                    {categories && categories.map(category => <CategoryItem itemName={category} key={category} filter={category} />)}
                    
                </div>
                <div className="category-title text-center">
                    Select a category to start Shopping
                </div>
            </div>
        </div>
    );
}

export default Home;