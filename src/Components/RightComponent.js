import React from 'react';
import '../RightComponent.css';
import Logo from '../Assets/logo.png'
import Logo2 from '../Assets/Logo2.png'
import Logo3 from '../Assets/Logo3.png'

const RightComponent = () => {
  return (
    <div className='black'>
        <div className='box2'>
            <img 
            src={Logo}
            alt=''
            className='logo2'
            />
        </div>
        <div className='textbox1'>
            <p>Happening Now</p>
        </div>
        <div className='textbox2'>
            <p>Join Twitter today.</p>
        </div>
        <div className='buttons'>
            <div className='button1'>
                <img 
                src={Logo2}
                alt='Logo'
                className='Logo2'
                />
                <p>Sign up with Google</p>
            </div>
            <div className='button2'>
            <img 
                src={Logo3}
                alt='Logo'
                className='Logo2'
                />
                <p>Sign up with Apple</p>
            </div>
        </div>
        <div>
            <h2><span>or</span></h2>
        </div>
        <div className='buttons2'>
            <p>Sign up with phone or email</p>
        </div>
        <div className='footer'>
            <p className='introtext'>By signing up, you agree to the <a href="google.com" className='tos'>Terms of Service</a> </p>
            <p className='introtext' id='bottom'>and <a href='google.com' className='privacy'>Privacy Policy</a>, including <a href='google.com' className='cookie'>Cookie Use.</a></p>
        </div>
        <div className='account'>
            <p>Already have an account?</p>
        </div>
        <div className='signin'>
            <p>Sign in</p>
        </div>
    </div>
  )
}

export default RightComponent