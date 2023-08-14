import { Route, Routes } from "react-router";

// Custom Component imports
import Home from "../pages/Home/Home";
import Error from "../pages/Error/Error";

function MainRoutes() {

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Error />}/>
        </Routes>
    )
}

export default MainRoutes;