import React from 'react';
import google from '../../images/logo/google.png'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

const SocilaLogin = () => {
    const navigate = useNavigate()

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    let hookError;


    if (loading) {
        return <loading></loading>
    }
    if (error) {
        hookError = <div>
            <p>Error: {error?.message} </p>
        </div>

    }
    if (user) {
        navigate('/home')
    }

    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
                <p className='mt-2 mx-2'>or</p>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
            </div>
            <p className='text-danger'>{hookError}</p>
            <div className=''>
                <button onClick={() => signInWithGoogle()} className='btn-info rounded p-1 mb-2 d-block mx-auto w-50'>
                    <img style={{ width: '30px', marginRight: '20px' }} src={google} alt="" />
                    Google sign In
                </button>

            </div>
        </div>
    );
};

export default SocilaLogin;