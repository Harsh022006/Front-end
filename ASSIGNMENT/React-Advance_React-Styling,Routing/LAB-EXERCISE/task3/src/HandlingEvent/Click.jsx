import React, { useState } from 'react'

function Click() {
      const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(prev => !prev);
    };
  return (
    <div>
       <div>
            <p className='display-1 fw-bold text-warning'>{isClicked ? 'Clicked!' : 'Not Clicked'}</p>
            <button className='btn btn-primary ms-2' onClick={handleClick}>Click Me</button>
        </div>
    </div>
  )
}

export default Click
