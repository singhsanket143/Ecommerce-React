import { Route, Routes } from "react-router";

// Custom Component imports
import Home from "../pages/Home/Home";
import Error from "../pages/Error/Error";
import ProductList from "../pages/ProductList/ProductList";
import ProductDetails from "../pages/ProductDetails/ProductDetails";

function MainRoutes() {

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/products/:id" element={<ProductDetails />} />
            <Route path="*" element={<Error />}/>
        </Routes>
    )
}

export default MainRoutes;