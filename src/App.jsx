// CSS imports
import './App.css'
// library imports
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useCookies } from 'react-cookie'
import jwt_decode from "jwt-decode";
// Custom components
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import MainRoutes from './routes/MainRoutes'
// context import
import UserContext from './context/userContext'
import CartContext from './context/CartContext';
import { fetchUserCart } from './helpers/fetchUserCartHelper';

function App() {

  const [user, setUser] = useState(null);
  const [cart, setCart] = useState(null);
  const [token, setToken] = useCookies(['jwt-token']);

  async function accessToken() {
    const res = await axios.get(`${import.meta.env.VITE_FAKE_STORE_URL}/accesstoken`, {withCredentials: true})
    setToken('jwt-token', res.data.token, {httpOnly: true});
    const tokenDetails = jwt_decode(res.data.token);
    setUser({username: tokenDetails.user, id: tokenDetails.id});
  }

  async function load() {
    if(!user) {
      await accessToken();
    }

    if(user) {
      await fetchUserCart(user.id, setCart);
    }
  }

  useEffect(() => {
    load();
  }, [user]);


  return (

    <UserContext.Provider value={{user, setUser}}>
    <CartContext.Provider value={{cart, setCart}}>
    <div className="app-wrapper">
      {/* Common header for all pages */}
      <Header 
        color="light" 
        light={true} 
        expand="md" 
        container="md"
      />

      <MainRoutes />

      {/* Common footer for all pages */}
      <Footer />
    </div>
    </CartContext.Provider>
    </UserContext.Provider>
  )
}

export default App
