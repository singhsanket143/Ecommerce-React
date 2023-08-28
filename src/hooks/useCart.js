import { useContext, useEffect } from "react";
import CartContext from "../context/CartContext";
import { fetchUserCart } from "../helpers/fetchUserCartHelper";
function useCart(userId) {
    const {cart, setCart} = useContext(CartContext);

    useEffect(() => {
        fetchUserCart(userId, setCart);
    }, [userId]);

    return [cart, setCart];
}

export default useCart;