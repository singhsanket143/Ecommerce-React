import { Link, useNavigate } from "react-router-dom";
import Auth from "../../components/Auth/Auth";
import './Auth.css';
import axios from "axios";
import { signup } from "../../apis/fakeStoreProdApis";
import { useState } from "react";
function Signup() {

    const navigate = useNavigate();

    const [resetSignUpForm, setResetSignUpForm] = useState(false);

    async function onAuthFormSubmit(authArguments) {
        try {
            await axios.post(signup(), {
                username: authArguments.username,
                email: authArguments.email,
                password: authArguments.password
            });
            navigate('/signin');
        } catch(error) {
            console.log(error);
            setResetSignUpForm(true);
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
                <h4 className="text-center">Signup</h4>
                <Auth 
                    onSubmit={onAuthFormSubmit}
                    resetForm={resetSignUpForm}
                />
                <div className="signup-btn text-center" id="showSignupBtn">
                    <Link  to="/signin">
                        Already have an Account? Sign In Here
                    
                    </Link>
                </div>
                
            </div>
        </div>
    )
}

export default Signup;