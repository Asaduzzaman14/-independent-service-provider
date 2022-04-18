import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import './Register.css'
// import { async } from '@firebase/util';
import auth from '../../../firebase.init';
import SocilaLogin from '../SocilaLogin/SocilaLogin';


const Register = () => {
    const [agree, setAgree] = useState(false)
    const navigate = useNavigate()
    const [createUserWithEmailAndPassword, user, loading, error,] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile] = useUpdateProfile(auth);

    if (user) {
        console.log(user);
    }


    const handelfromSubmit = async (event) => {
        event.preventDefault()
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        await createUserWithEmailAndPassword(email, password)

        await updateProfile({ displayName: name });

        navigate('/')

    }


    return (
        <div>
            <h2 className='form-title text-primary'>Please Register</h2>
            <form onSubmit={handelfromSubmit} className='register-from'>
                {/* <label htmlFor="name">Name</label> */}
                <input type="text" name='name' placeholder='your name' />
                <br />
                {/* <label htmlFor="email">Email</label> */}
                <input type="email" name='email' id='' placeholder='your email' required />
                <br />
                {/* <label htmlFor="password">Password</label> */}
                <input type="password" name='password' id='' placeholder='password' required />
                <br />

                <input onClick={() => setAgree(!agree)} type="checkbox" name='trams' id="trams" />
                <label className={`ps-2 ${agree ? '' : 'text-danger'}`} htmlFor="trams">Accept Dantal Terms and Condation</label>

                <input disabled={!agree} className='mt-3 bg-info ' type="submit" value='register' />


                <p className='my-2 p-auto'>Already have an account? <Link to='/login' className='text-danger text-decoration-none' onClick={() => navigate('/login')}>Please logIn</Link></p>
                <SocilaLogin></SocilaLogin>

            </form>
        </div>
    );
};

export default Register;