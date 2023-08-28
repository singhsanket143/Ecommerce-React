// library import
import { useContext, useEffect, useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import axios from 'axios';
// CSS import
import './Header.css';
// Context import
import UserContext from '../../context/userContext';
import CartContext from '../../context/CartContext';


function Header(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [token, setToken, removeToken] = useCookies(['jwt-token']);
  const {user, setUser} = useContext(UserContext);
  const {cart, setCart} = useContext(CartContext);
  const toggle = () => setIsOpen(!isOpen);
  
  function logout() {
    removeToken('jwt-token', {httpOnly: true});
    axios.get(`${import.meta.env.VITE_FAKE_STORE_URL}/logout`, {withCredentials: true});
    setUser(null);
    setCart(null)
  }

  useEffect(() => {
    console.log("user", user)
  }, [token]);

  return (
    <div>
      <Navbar {...props}>
        <NavbarBrand id="title">
          <Link to="/">Shop Cart</Link>

        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ms-auto" navbar>
            <UncontrolledDropdown nav inNavbar style={{marginRight: '2rem'}}>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                { user && <DropdownItem> <Link to={`/cart/${user.id}`}>Cart {cart && cart.products && `(${cart.products.length})`}</Link></DropdownItem> }
                <DropdownItem>Settings</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  {token['jwt-token'] ? <Link onClick={() => {
                    logout();
                  }} to="/signin">Logout</Link> : <Link to="/signin">SignIn</Link>}
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            {user && <NavbarText>{user.username}</NavbarText>}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;