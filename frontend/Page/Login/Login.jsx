import React from 'react'
import './Login.css'
const Login = () => {
    return (
        <div className='login'>
            <div className='login-content'>
                <h1>Login <span>ChatApp</span></h1>

                <form>
                    <div className="login-content-inputname">
                        <label className='label-inputname'>
                            <span>UserName</span>
                        </label>
                        <input type="text" required  placeholder='Enter Your Name'/>
                    </div>
                    <div className="login-content-inputpassword">
                        <label className='label-inputpassword'>
                            <span>Password</span>
                        </label>
                        <input type="text" required  placeholder='Enter Your Password'/>
                    </div>
                    <a href="#">{"Don't"} have an account</a>
                    <div className='login-content-button'>
                        <button>Login</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login