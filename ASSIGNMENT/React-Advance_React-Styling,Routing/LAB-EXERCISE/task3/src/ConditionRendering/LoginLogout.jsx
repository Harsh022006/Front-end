import React, { useState } from 'react'

function LoginLogout() {
     const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handle = () => {
        setIsLoggedIn(prev => !prev);
    };
  return (
    <div>
       <div>
            <p className='display-5 fw-bolder text-secondary ms-5 mt-5'>{isLoggedIn ? 'Welcome, User!' : 'Please log in.'}</p>
            <button className='btn btn-primary ms-5' onClick={handle}>
                {isLoggedIn ? 'Logout' : 'Login'}
            </button>
        </div>
    </div>
  )
}

export default LoginLogout
