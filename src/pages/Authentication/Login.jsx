// CSS imports
import { Link, useNavigate } from 'react-router-dom';
import Auth from '../../components/Auth/Auth';
import './Auth.css';
import axios from 'axios';
import Cookies from 'js-cookie';
import { sigin } from '../../apis/fakeStoreProdApis';
import { useRef } from 'react';
import { useCookies } from 'react-cookie';

function Login() {

    const authRef = useRef(null);
    const navigate = useNavigate();
    const [token, setToken] = useCookies(['jwt-token']);
    async function onAuthFormSubmit(formDetails) {
        try {
            const response = await axios.post(sigin(), {
                username: formDetails.username,
                email: formDetails.email,
                password: formDetails.password
            }); 
            console.log(response);
            setToken('jwt-token', response.data.token);
            navigate('/');
        } catch (error) {
            authRef.current.resetFormData();
            console.log(error);
        }
    }

    return (
        <div className="container">
            <div className="row">
                <h2 className="home-title text-center">
                    Welcome to Shop Cart
                </h2>
            </div>
            <div className="login-wrapper" id="loginForm">
                <h4 className="text-center">Login</h4>
                <Auth onSubmit={onAuthFormSubmit} ref={authRef} />
                <div className="signup-btn text-center" id="showSignupBtn">
                    <Link  to="/signup">
                     Donot have an Account? Sign Up Here
                    </Link>
                </div>
                
            </div>
        </div>
    )
}

export default Login;