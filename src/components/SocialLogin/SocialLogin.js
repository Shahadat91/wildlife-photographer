import React from 'react';

const SocialLogin = () => {
    return (
        <div>
            <div className='d-flex justify-content-center align-items-center'>
                <div style={{height: '1px'}} className='bg-primary w-25'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{height: '1px'}} className='bg-primary w-25'></div>
            </div>
            <div className='d-flex justify-content-center'>
                <button className='btn btn-primary w-25'>Google Sign In</button>
            </div>
        </div>
    );
};

export default SocialLogin;