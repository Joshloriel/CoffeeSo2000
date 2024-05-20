import React from 'react';
import { Link } from 'react-router-dom';
import { signInWithGoogle, signInWithFacebook, auth } from './../firebase/firebase';
import { AiFillGoogleCircle, AiFillFacebook } from "react-icons/ai";

const Login = () => {
    const handleGoogleLogin = async () => {
        try {
            const result = await signInWithGoogle();
            console.log(result);
            alert("logged in successfully");
            window.location.href = '/';
            // Handle the result as needed
        } catch (error) {
            console.error(error);
            // Handle the error as needed
        }
    };

    const handleFacebookLogin = async () => {
        try {
            const result = await signInWithFacebook();
            console.log(result);
            alert("logged in successfully");
            window.location.href = '/';
            // Handle the result as needed
        } catch (error) {
            console.error(error);
            // Handle the error as needed
        }
    };
    const GobacktoHome = () => {
        window.location.href = '/';
    }

    return (
        <div
            className='row m-0'
            style={{
                backgroundColor: '#ffe4b5',
                minHeight: '100vh'
            }}>
            <div className="col-md-5 bg-light d-flex flex-column justify-content-center align-items-center p-5">
                <h2 className=' mb-5'>Login</h2>
                <form className='form-floating d-flex flex-column w-100 oswald'>
                    <div className="form-floating mb-3">
                        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                        <label htmlFor="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                        <label htmlFor="floatingPassword">Password</label>
                    </div>
                    <button type="submit" className="btn mt-3 text-light" style={{ backgroundColor: '#c19a6b ' }}>Login</button>
                </form>
                <p className='my-3'>or</p>
                <div className="d-flex gap-2">
                    <button className='btn btn-danger me-2' onClick={handleGoogleLogin}>Login with <AiFillGoogleCircle size={25} />
                    </button>
                    <button className='btn btn-primary' onClick={handleFacebookLogin}>Login with <AiFillFacebook size={25} />
                    </button>
                </div>
            </div>
            <div className="col-md-7 d-none d-md-flex align-items-center justify-content-center bg-kopi">
                <div className='text-white bg-black-lo p-5 rounded-4'>
                    <h2>Welcome to </h2>
                    <Link to={"/"} className='h1 pacifico-regular' style={{ textDecoration: 'none', fontSize: '100px' }}>CoffeeSo</Link>

                </div>
            </div>
        </div>
    );
};

export default Login;
