import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import google from '../../Images/Social/google.png';
import Loading from '../Loading/Loading';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
const navigate = useNavigate();

if(loading){
    return <Loading></Loading>
}
    let errorElement;
    if (error) {
       
        errorElement=<p className='text-danger'>Error: {error.message}</p>
            
      }

      if(user){
        navigate('/home');
      }


    return (
        <div>
            <div className='d-flex justify-content-center align-items-center'>
                <div style={{height: '1px'}} className='bg-primary w-25'></div>
                <p className='mt-3 px-2'>Or</p>
                <div style={{height: '1px'}} className='bg-primary w-25'></div>
            </div>
            {errorElement}
            <div className='d-flex justify-content-center'>
                <button onClick={()=> signInWithGoogle()} className='btn btn-secondary w-25'><img src={google} alt="" /> Google Sign In</button>
            </div>
        </div>
    );
};

export default SocialLogin;