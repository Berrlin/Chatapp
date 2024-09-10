import React from 'react'
import './SignUp.css'

const SignUp = () => {
    return (
        <div className='signup'>
            <div className='signup-content'>
                <h1>SignUp <span>ChatApp</span></h1>

                <form>
                    <div className="signup-content-inputfullname">
                        <label className='label-inputfullname'>
                            <span>FullName</span>
                        </label>
                        <input type="text" required placeholder='Enter Your Full Name' />
                    </div>
                    <div className="signup-content-inputname">
                        <label className='label-inputname'>
                            <span>UserName</span>
                        </label>
                        <input type="text" required placeholder='Enter Your User Name' />
                    </div>
                    <div className="signup-content-inputpassword">
                        <label className='label-inputpassword'>
                            <span>Password</span>
                        </label>
                        <input type="text" required placeholder='Enter Your Password' />
                    </div>

                    {/* Gender selection */}
                    <div className="gender-options">
                        <label className='gender-male'>
                            <input
                                type="checkbox"
                                name="gender"
                                // checked={selectedGender === 'male'}
                                // onChange={() => handleGenderChange('male')}
                            />
                            Male
                        </label>
                        <label className='gender-female'>
                            <input
                                type="checkbox"
                                name="gender"
                                // checked={selectedGender === 'female'}
                                // onChange={() => handleGenderChange('female')}
                            />
                            Female
                        </label>
                    </div>

                    <div className="signup-content-avatar">
                        <label className='label-inputavatar'>
                            <span>Avatar</span>
                        </label>
                        <input type="file" accept="image/*" required />
                    </div>

                    <a href="#">{"Already"} have an account</a>
                    <div className='signup-content-button'>
                        <button>SignUp</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignUp
