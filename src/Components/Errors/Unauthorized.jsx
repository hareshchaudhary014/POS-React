import React from 'react'
import error from './401.svg'
const Unauthorized = () => {
    return (
        <div className="grid place-items-center">
            <div className="w-5/12 object-contain mt-20">
                <img className='object-cover' src={error} alt="" />
                <p className='text-center mt-3'>Sorry, you are unauthorized to this section</p>
            </div>
        </div>
    )
}

export default Unauthorized