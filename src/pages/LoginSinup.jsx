import React from 'react'
import './CSS/LoginSingup.css'

function LoginSinup() {
  return (
    <div className='loginsingup'>
      <div className="loginsingup-container">
        <h1>Sign up</h1>

        <div className="loginsingup-field">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email Adress" />
          <input type="password" placeholder=" Password" />
        </div>
        <button>Continue</button>
        <p className="loginsinup-login">Already have an acount? <span>Login hera</span></p>
        <div className="loginsingup-agrea">
          <input type="checkbox" name='' id=''/>
          <p>by continuing, i agrea to the term of use & privacy policy.</p>
        </div>
      </div>

    </div>
  )
}

export default LoginSinup