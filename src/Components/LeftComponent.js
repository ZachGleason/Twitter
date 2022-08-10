import React from 'react';
import '../LeftComponent.css';
import Logo from '../Assets/logo.png'

const LeftComponent = () => {
  return (
    <div className='background'>
        <div className='box'>
            <img 
                src={Logo}
                alt='Logo'
                className='Logo'    
            />
        </div>
    </div>
  )
}

export default LeftComponent